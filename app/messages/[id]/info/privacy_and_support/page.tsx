'use client'

import { ArrowBackIosNew, Block, Feedback, InfoOutlined, NavigateNext, NoAccounts } from "@mui/icons-material";
import { Button, Switch } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Messages_privacy_and_support() {
  const router = useRouter();
  const { id: chatId } = useParams() as { id: string };
  const [readSelected, setReadSelected] = useState(false);
  const [typingSelected, setTypingSelected] = useState(false);

  useEffect(() => {
    document.title = "Privacy and support - Cozy Care";
  }, []);

  const acceptReadToggle = () => {
    setReadSelected(!readSelected);
  }

  const typingToggle = () => {
    setTypingSelected(!readSelected);
  }

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <Button
            onPress={() => router.back()}
            className="text-cozy-green-light"
            isIconOnly
            radius="full"
            variant="light"
          >
            <ArrowBackIosNew />
          </Button>
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            ความเป็นส่วนตัวและความปลอดภัย
          </h1>
        </div>

        <div className="flex flex-col w-full h-[300px] gap-4 px-4">
          <p>นาย น่ารักที่สุด</p>

          <Button
            radius="lg"
            variant="light"
            className="flex justify-between items-center p-3 py-5 text-black"
          >
            <div className="flex gap-5">
              <InfoOutlined />
              <p className="font-bold text-base">ตารางนัดหมาย</p>
            </div>

            <NavigateNext />
          </Button>

          <p>รักษาข้อความของคุณให้ปลอดภัย</p>

          <Button onPress={acceptReadToggle} radius="lg" className="flex justify-between w-full h-max p-3 shadow-md bg-[#EFF0F0] text-black">
            <div className="flex flex-col items-start gap-1 h-max">
              <p className="font-bold text-lg">ใบตอบรับการเปิดอ่าน</p>
              <p className="font-normal text-sm">คนอื่นๆ จะไม่เห็นเมื่อคุณอ่านข้อความของพวกเขาแล้ว</p>
            </div>

            <Switch isSelected={readSelected} onValueChange={setReadSelected} />
          </Button>

          <Button onPress={typingToggle} radius="lg" className="flex justify-between w-full h-max p-3 shadow-md bg-[#EFF0F0] text-black">
            <div className="flex flex-col items-start gap-1">
              <p className="font-bold text-lg">ตัวบ่งชี้การพิมพ์</p>
              <p className="font-normal text-sm">คนอื่นๆ สามารถเห็นได้เมื่อคุณกำลังพิมพ์</p>
            </div>

            <Switch isSelected={typingSelected} onValueChange={setTypingSelected} />
          </Button>

          <p>คนที่สามารถเข้าถึงคุณได้</p>

          <Button
            radius="lg"
            variant="light"
            color="danger"
            className="flex justify-between items-center p-3 py-5 text-[#CC0A0A]"
          >
            <div className="flex gap-5">
              <NoAccounts />
              <p className="font-bold text-base">จำกัด</p>
            </div>

            <NavigateNext />
          </Button>

          
          <Button
            radius="lg"
            variant="light"
            color="danger"
            className="flex justify-between items-center p-3 py-5 text-[#CC0A0A]"
          >
            <div className="flex gap-5">
              <Block />
              <p className="font-bold text-base">บล็อค</p>
            </div>

            <NavigateNext />
          </Button>

          <p>คนที่สามารถเข้าถึงคุณได้</p>


          <Button
            radius="lg"
            variant="light"
            className="flex justify-between items-center p-3 py-5 text-black"
          >
            <div className="flex gap-5">
              <Feedback />
              <p className="font-bold text-base">รายงานปัญหา</p>
            </div>

            <NavigateNext />
          </Button>

        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}