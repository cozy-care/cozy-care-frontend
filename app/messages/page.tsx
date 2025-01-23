'use client'

import { ArrowBackIosNew, MoreHoriz, Search } from "@mui/icons-material";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { chatCardMock } from "./chatMock";

export default function Message() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredChat = chatCardMock.filter((data) =>
    data.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = "Message - Cozy Care";
  }, []);

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
            <Input placeholder="ค้นหาแชท" value={searchTerm} onValueChange={setSearchTerm} isClearable startContent={<Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />} />
          </div>
        </div>

        <div className="w-full h-[calc(100svh-90px)] overflow-y-scroll">
          {filteredChat.map((data, index) => (
            <Button radius="none" variant="light" fullWidth className="flex gap-3 h-[90px]">
              <div className="w-[70px] aspect-square rounded-full overflow-hidden">
                <img
                  alt="Caregiver background image"
                  src={data.profile_image}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col items-start grow">
                <p className="text-xl font-bold">{data.username}</p>
                <p className="text-base">{data.lastMessage} • {data.lastMessageTime} นาที</p>
              </div>

              <div className="flex justify-center w-[30px]">
                <p className="text-5xl text-cozy-blue-light">•</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}