'use client'

import { useEffect, useRef, useState } from "react";
import MyChatBox from "./MyChatBox";
import { io, Socket } from "socket.io-client";
import TheirChatBox from "./TheirChatBox";
import { AddPhotoAlternate, ArrowBackIosNew, Info, KeyboardArrowDown, KeyboardArrowUp, Send } from '@mui/icons-material';
import { Button, Link, Image, Input, DateRangePicker } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { useParams, useRouter } from "next/navigation";
import { parseDate, getLocalTimeZone } from "@internationalized/date";

interface Message {
  message_id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  sent_at: string;
}

interface UserData {
  user_id: string;
  alias: string;
  profile_image: string | null;
}

// WebSocket connection
const socket: Socket = io(`${process.env.NEXT_PUBLIC_API_URL}`);

export default function Message() {
  const chatId = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [otherUserData, setOtherUserData] = useState<UserData | null>(null);
  const chat_id = chatId?.id ?? "";

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = "Someone name - Cozy Care";
  }, []);

  // Scroll to the bottom of the chat when a new message is added
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check for token and user authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response: AxiosResponse<{ user_id: string }> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
          {
            withCredentials: true, // Include HttpOnly cookie in the request
          }
        );
        setUserId(response.data.user_id); // Store the userId
        setIsAuthenticated(true); // Set authenticated to true
      } catch (error) {
        console.error("User is not authenticated:", error);
        // router.push("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuthentication();
  }, [router]);

  // Fetch messages from the API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response: AxiosResponse<Message[]> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/chat/${chat_id}`,
          {
            withCredentials: true,
          }
        );
        setMessages(response.data);
        scrollToBottom(); // Scroll to bottom after fetching messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [chat_id]);

  // Join the WebSocket room for the chat
  useEffect(() => {
    // WebSocket connection setup
    if (!userId) return;

    // Connect socket
    socket.connect();

    // Join chat room
    socket.emit("joinChat", chat_id);

    // Handle incoming messages
    const handleNewMessage = (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      scrollToBottom();
    };

    socket.on("message", handleNewMessage);

    // Error handling
    socket.on("connect_error", (err) => {
      console.error("WebSocket connection error:", err);
    });

    // Cleanup WebSocket on unmount
    return () => {
      socket.off("message", handleNewMessage);
      socket.off("connect_error");
      socket.disconnect();
    };
  }, [chat_id, userId]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(); // Send message on pressing Enter
    }
  };

  // Fetch Other User Data
  useEffect(() => {
    const fetchOtherUserData = async () => {
      try {
        const response: AxiosResponse<UserData> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/getOtherBychatId/${chat_id}`,
          { withCredentials: true }
        );
        setOtherUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch other user data:", error);
      }
    };
    fetchOtherUserData();
  }, [chat_id]);

  // Handle sending messages
  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/send`,
        {
          chat_id,
          sender_id: userId,
          content: messageText,
        },
        {
          withCredentials: true,
        }
      );
      setMessageText(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Sort messages by sent_at
  const sortedMessages = messages.sort(
    (a, b) => new Date(b.sent_at).getTime() - new Date(a.sent_at).getTime()
  );

  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menuToggleHandle = () => {
    setMenuToggle(!menuToggle);
    setDateRangeToggle(false);
  };

  const [dateRangeToggle, setDateRangeToggle] = useState<boolean>(false);
  const dateRangeToggleHandle = () => {
    setDateRangeToggle(!dateRangeToggle);
  };

  const [dateRange, setDateRange] = useState({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });
  const dateRangeHandle = () => {
    console.log(dateRange.start.toDate(getLocalTimeZone()));
    console.log(dateRange.end.toDate(getLocalTimeZone()));
  };

  return (
    <main className="flex flex-col h-[100dvh]">
      <div className="grow flex flex-col items-center">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-3 w-full h-[50px]">
          <div className="flex gap-3">
            <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
              <ArrowBackIosNew />
            </Button>

            <div className="flex gap-4 items-center">
              <Image
                alt="Chat profile"
                className="w-[45px] aspect-square rounded-full overflow-hidden h-full object-cover object-center"
                height={"auto"}
                src={otherUserData?.profile_image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              />
              <p className="text-xl font-bold">
                {otherUserData?.alias || "Loading..."}
              </p>
            </div>
          </div>

          <Button as={Link} href={`/messages/${chat_id}/info`} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
            <Info />
          </Button>

        </div>

        {/* Main Chat Area */}
        <div className="w-full h-[calc(100svh-100px)] flex flex-col-reverse gap-1 px-3 pb-2 overflow-y-scroll">
          <div ref={messagesEndRef} />{" "}
          {sortedMessages.map((message) =>
            message.sender_id === userId ? (
              <MyChatBox
                key={message.message_id}
                text={message.content}
                date={new Date(message.sent_at).toLocaleTimeString()}
              />
            ) : (
              <TheirChatBox
                key={message.message_id}
                text={message.content}
                date={new Date(message.sent_at).toLocaleTimeString()}
              />
            )
          )}
        </div>

        {/* Message Input */}
        <div className="flex items-center px-2 gap-3 w-full h-[50px] border-t-2">
          <Button onPress={menuToggleHandle} type="button" className="text-cozy-blue-light dark:text-cozy-teal-dark" isIconOnly radius="full" variant="light">
            {menuToggle ? (
              <KeyboardArrowDown sx={{ fontSize: 30 }} />
            ) : (
              <KeyboardArrowUp sx={{ fontSize: 30 }} />
            )}
          </Button>
          <Button isDisabled type="button" className="text-cozy-blue-light dark:text-cozy-teal-dark" isIconOnly radius="full" variant="light">
            <AddPhotoAlternate sx={{ fontSize: 30 }} />
          </Button>
          <Input
            size="sm"
            type="text"
            placeholder="Aa"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="grow"
          />
          <Button
            type="button"
            className="text-cozy-blue-light dark:text-cozy-teal-dark"
            onPress={handleSendMessage}
            isIconOnly radius="full" variant="light"
          >
            <Send sx={{ fontSize: 30 }} />
          </Button>

          {menuToggle ? (
            <>
              <div className="absolute flex items-center justify-center left-0 bottom-[50px] px-4 w-full h-[75px] bg-[#C1E2F2]">
                <Button onPress={dateRangeToggleHandle} radius="full" className="w-full font-bold text-base bg-white">
                  เริ่มต้นการนัดหมาย
                </Button>
              </div>
              {dateRangeToggle ? (
                <div className="absolute flex flex-col items-center justify-center gap-2 left-0 bottom-[125px] w-full h-max py-4 px-4 bg-[#addbe9]">
                  <p className="font-bold text-xl self-start">เลือกวันที่นัดหมาย</p>

                  <DateRangePicker
                    value={dateRange}
                    onChange={(value) => {
                      if (value) setDateRange(value);
                    }}
                    isRequired
                    radius="full"
                    className="w-full"
                  />

                  <div className="flex justify-between w-full">
                    <Button onPress={menuToggleHandle} radius="full" className="font-bold text-base bg-[#FCF3F2] border-[#EB0000] border-2 text-[#EB0000]">
                      ยกเลิก
                    </Button>
                    <Button onPress={dateRangeHandle} radius="full" className="font-bold text-base bg-[#E7F1DA] border-[#01AC46] border-2 text-[#01AC46]">
                      ตกลง
                    </Button>
                  </div>
                </div>
              ) : (<div className="hidden" />)}
            </>
          ) : (<div className="hidden" />)}
        </div>
      </div>
    </main>
  )
}