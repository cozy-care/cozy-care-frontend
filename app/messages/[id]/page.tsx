"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import axios, { AxiosResponse } from "axios";
import {
  MoreHoriz,
  Info,
  AddCircle,
  Image as ImageIcon,
  Send,
} from "@mui/icons-material";
import { Input, Image } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import MyChatBox from "./MyChatBox";
import TheirChatBox from "./TheirChatBox";

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

export default function Messages() {
  const chatId = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [otherUserData, setOtherUserData] = useState<UserData | null>(null);
  const chat_id = chatId; // Fixed chat ID

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleInfo = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsVisible(true); // เปิด Sidebar เมื่อหน้าจอใหญ่กว่า 768px
      } else {
        setIsVisible(false); // ปิด Sidebar เมื่อหน้าจอเล็กกว่า 768px
      }
    };

    // เช็คขนาดจอครั้งแรก
    handleResize();

    // เพิ่ม event listener เพื่อตรวจสอบการเปลี่ยนแปลงขนาดจอ
    window.addEventListener("resize", handleResize);

    // ลบ event listener เมื่อ component ถูกทำลาย
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to the bottom of the chat when a new message is added
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check for token and user authentication
  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response: AxiosResponse<{ user_id: string }> = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
  //         {
  //           withCredentials: true, // Include HttpOnly cookie in the request
  //         }
  //       );
  //       setUserId(response.data.user_id); // Store the userId
  //       setIsAuthenticated(true); // Set authenticated to true
  //     } catch (error) {
  //       console.error("User is not authenticated:", error);
  //       router.push("/login"); // Redirect to login if not authenticated
  //     }
  //   };

  //   checkAuthentication();
  // }, [router]);
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
    if (userId) {
      socket.emit("joinChat", chat_id);

      // Listen for new messages via WebSocket
      socket.on("message", (newMessage: Message) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollToBottom(); // Scroll to bottom when a new message is received
      });

      return () => {
        socket.disconnect();
      };
    }
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/getOtherBychatId/${chatId}`,
          { withCredentials: true }
        );
        setOtherUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch other user data:", error);
      }
    };
    fetchOtherUserData();
  }, [chatId]);

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

  return (
    <main className="flex min-h-[calc(100svh-3.5rem)]">
      {/* Sidebar with Chat List */}
      <div className="flex flex-col w-[100px] sm:w-[120px] md:w-[360px] max-h-[calc(100svh-3.5rem)] border-r-1 border-gray-300">
        <div className="flex justify-between px-4 py-2 border-b-1 border-gray-300">
          <h2 className="text-2xl font-semibold">แชท</h2>
          <button type="button" className="hover:!text-blue-500">
            <MoreHoriz sx={{ fontSize: 30 }} />
          </button>
        </div>

        <div className="grow overflow-y-auto px-2">
          {/* Placeholder for chat list items */}
          {/* Add ChatCard components here */}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-col grow max-h-[calc(100svh-3.5rem)] border-r-1 border-gray-300">
        <div className="flex h-[64px] px-4 items-center justify-between border-b-1 border-gray-300">
          <div className="flex gap-4 items-center">
            <Image
              alt="Chat profile"
              className="object-center object-cover rounded-full w-10 md:w-12"
              height={"auto"}
              src={
                otherUserData?.profile_image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
            />
            <p className="text-2xl font-semibold">
              {otherUserData?.alias || "Loading..."}
            </p>
          </div>
          <button
            type="button"
            className="hover:!text-blue-500"
            onClick={toggleInfo}
          >
            <Info sx={{ fontSize: 30 }} />
          </button>
        </div>

        {/* Messages */}
        <div className="w-full h-full flex flex-col-reverse gap-1 px-3 pb-2 overflow-y-scroll">
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
        <div className="flex h-[64px] items-center justify-between px-4 gap-4 border-t-1 border-gray-300">
          <button type="button" className="hover:!text-blue-500">
            <AddCircle sx={{ fontSize: 30 }} />
          </button>
          <button type="button" className="hover:!text-blue-500">
            <ImageIcon sx={{ fontSize: 30 }} />
          </button>
          <Input
            type="text"
            placeholder="Type your message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="grow"
          />
          <button
            type="button"
            className="hover:!text-blue-500"
            onClick={handleSendMessage}
          >
            <Send sx={{ fontSize: 30 }} />
          </button>
        </div>
      </div>

      {/* Chat Info Sidebar */}
      {isVisible && (
        <div className="w-[362px] flex flex-col px-6 pt-6 gap-3">
          <div className="flex flex-col items-center gap-3">
            <Image
              alt="Chat profile"
              className="object-center object-cover rounded-full w-20 md:w-40"
              height={"auto"}
              src={
                otherUserData?.profile_image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
            />
            <p className="text-2xl font-semibold mb-2">
              {otherUserData?.alias || "Loading..."}
            </p>
          </div>
          <p className="text-lg font-medium">ชื่อ-สกุล : ...</p>
          <p className="text-lg font-medium">สถานะ : ...</p>
          <p className="text-lg font-medium">อายุ : ...</p>
          <p className="text-lg font-medium">โรคภัยประจำตัว : ...</p>
          <p className="text-lg font-medium">ประวัติการแย้พา : ...</p>
          <p className="text-lg font-medium">ความเชี่ยวชาญ : ...</p>
        </div>
      )}
    </main>
  );
}
