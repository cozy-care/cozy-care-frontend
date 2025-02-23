'use client'

import { ArrowBackIosNew, History, ThumbDown, ThumbUp } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

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

        <div className="flex flex-col w-full gap-6 px-4">
          <AppointmentCard
            date="11 ธันวาคม 2024"
            detail="123"
            cost={1000}
            status="Ongoing"
            remark="232"
          />
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}