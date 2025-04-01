'use client'

import { ArrowBackIosNew, CalendarMonth, History, NavigateNext } from "@mui/icons-material";
import { Button, Link, Image } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function About() {
  const router = useRouter();
  const { id: chatId } = useParams() as { id: string };

  useEffect(() => {
    document.title = "About - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            เกี่ยวกับบัญชีนี้
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
          <div className="flex flex-col gap-4 items-center mt-5">
            <Image
              alt="Chat profile"
              className="w-[100px] aspect-square rounded-full overflow-hidden h-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s"
            />
            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">defaultUserName</p>
            </div>
          </div>

          <div className="flex gap-[18px] px-3">
            <CalendarMonth sx={{ width: '24px', height: 'auto' }} />
            <div className="flex flex-col text-base">
              <p>วันที่เข้าร่วม Cozy Care</p>
              <p>13 ตุลาคม</p>
            </div>
          </div>

          <Button
            as={Link}
            href={`/messages/${chatId}/info/privacy_and_support/about/appointment_history`}
            radius="lg"
            variant="light"
            className="flex justify-between items-center p-3 py-5 text-black"
          >
            <div className="flex gap-5">
              <History />
              <p className="font-bold text-base">ประวัติการนัดหมาย กับบุคคลนี้</p>
            </div>

            <NavigateNext />
          </Button>
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}