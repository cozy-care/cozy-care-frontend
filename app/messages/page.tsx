'use client';

import { ArrowBackIosNew, MoreHoriz, Search } from "@mui/icons-material";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

// Define types for the chat data
interface Chat {
  chatId: number;
  profileImage: string;
  username: string;
  lastMessage?: string;
  lastMessageTime?: string;
}

export default function Message() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [chatData, setChatData] = useState<Chat[]>([]);
  const router = useRouter();

  useEffect(() => {
    document.title = "Message - Cozy Care";

    // Fetch chat data from API
    const fetchChats = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/me`, {
          withCredentials: true,
        });

        const mappedChats: Chat[] = response.data.map((chat: any) => ({
          chatId: chat.chat_id,
          profileImage: chat.profile_image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          username: chat.full_name || "ไม่ทราบชื่อ",
          lastMessage: chat.content || null,
          lastMessageTime: chat.last_time_sent || null,
        }));

        setChatData(mappedChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  // แปลง lastMessageTime ให้อยู่ในรูปแบบที่อ่านง่าย
  const formatTime = (timeString: string | null) => {
    if (!timeString) return null;
  
    // ตรวจสอบว่า timeString มีคำว่า "ชั่วโมง" หรือไม่
    if (!timeString.includes("ชั่วโมง")) {
      return timeString; // ถ้าไม่ใช่ชั่วโมง ให้คืนค่าตามที่ได้รับจาก Backend
    }
  
    // ดึงตัวเลขชั่วโมงจากข้อความ (เช่น "473 ชั่วโมง" → 473)
    const match = timeString.match(/\d+/);
    if (!match) return timeString; // ถ้าไม่มีตัวเลข ให้คืนค่าตามที่ได้รับ
  
    const hours = parseInt(match[0], 10);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
  
    if (hours < 24) {
      return `${hours} ชั่วโมงที่แล้ว`;
    } else if (days < 30) {
      return `${days} วันที่แล้ว`;
    } else {
      return `${months} เดือนที่แล้ว`;
    }
  };

  const filteredChat = chatData.filter((data) =>
    data.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col h-[100dvh]">
      <div className="h-full flex flex-col items-center overflow-y-scroll">
        {/* Top Bar */}
        <div className="flex flex-col items-center w-full h-[90px]">
          <div className="flex justify-between items-center w-full h-[45px] px-2">
            <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
              <ArrowBackIosNew />
            </Button>

            <h1 className="font-bold">แชท</h1>

            <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
              <MoreHoriz />
            </Button>
          </div>

          <div className="flex justify-center items-center w-full h-[45px] px-3">
            <Input
              placeholder="ค้นหาแชท"
              value={searchTerm}
              onValueChange={setSearchTerm}
              isClearable
              startContent={<Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
            />
          </div>
        </div>

        <div className="w-full h-[calc(100svh-90px)] overflow-y-scroll">
          {filteredChat.length > 0 ? (
            filteredChat.map((data) => (
              <Button
                key={data.chatId}
                radius="none"
                variant="light"
                fullWidth
                className="flex gap-3 h-[90px]"
                onPress={() => router.push(`/messages/${data.chatId}`)}
              >
                <div className="w-[70px] aspect-square rounded-full overflow-hidden">
                  <img
                    alt="Caregiver background image"
                    src={data.profileImage}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col items-start grow">
                  <p className="text-xl font-bold">{data.username}</p>

                  {/* แสดงข้อความล่าสุดและเวลาที่ถูกแปลง */}
                  {data.lastMessage && data.lastMessageTime && (
                    <p className="text-base">
                      {data.lastMessage} • {formatTime(data.lastMessageTime)}
                    </p>
                  )}
                </div>

                <div className="flex justify-center w-[30px]">
                  <p className="text-5xl text-cozy-blue-light">•</p>
                </div>
              </Button>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-5">ไม่มีแชทที่จะแสดง</p>
          )}
        </div>
      </div>
    </main>
  );
}
