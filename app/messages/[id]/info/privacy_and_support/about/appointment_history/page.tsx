'use client'

import { ArrowBackIosNew, History, ThumbDown, ThumbUp } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppointmentHistory() {
  const router = useRouter();
  const { id: chatId } = useParams() as { id: string };

  useEffect(() => {
    document.title = "History - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            ประวัติการนัดหมาย
          </h1>
          <Button
            onPress={() => router.back()}
            className="text-cozy-green-light"
            isIconOnly
            radius="full"
            variant="light"
          >
            <ArrowBackIosNew />
          </Button>
        </div>

        <div className="flex flex-col w-full gap-4 px-4">
          <Button disableAnimation radius="md" className="flex justify-between w-full h-max bg-white shadow-lg p-3">
            <div className="w-max h-max flex justify-start"><History /></div>

            <div className="flex flex-col justify-self-start h-max gap-2">
              <p>วันที่ 11 ธันวาคม 2024</p>
              <p>รายละเอียดงาน : พาไปหาหมอ</p>
              <p>ราคา : 1000 บาท/วัน</p>
            </div>

            <div className="w-max h-max text-[#09D810]"><ThumbUp /></div>
          </Button>
        </div>

        
        <div className="flex flex-col w-full gap-4 px-4">
          <Button disableAnimation radius="md" className="flex justify-between w-full h-max bg-white shadow-lg p-3">
            <div className="w-max h-max flex justify-start"><History /></div>

            <div className="flex flex-col justify-self-start h-max gap-2">
              <p>วันที่ 11 ธันวาคม 2024</p>
              <p>รายละเอียดงาน : พาไปหาหมอ</p>
              <p>ราคา : 1000 บาท/วัน</p>
            </div>

            <div className="w-max h-max text-[#FF0101]"><ThumbDown /></div>
          </Button>
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}