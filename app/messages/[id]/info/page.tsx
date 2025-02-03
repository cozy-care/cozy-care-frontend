'use client'

import { Button, Link, Image } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowBackIosNew, MoreHoriz, NotificationsNone, Person, Search, Verified } from '@mui/icons-material';

export default function Info() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    document.title = "Info - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-3 w-full h-[50px]">
          <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
            <ArrowBackIosNew />
          </Button>
        </div>

        {/* Profile */}
        <div className="flex flex-col gap-4 items-center mt-5">
          <Image
            alt="Chat profile"
            className="object-center object-cover rounded-full w-20"
            height={"auto"}
            src="https://www.civictheatre.ie/wp-content/uploads/2016/05/blank-profile-picture-973460_960_720.png"
          />
          <div className="flex gap-2 items-center">
            <p className="text-xl font-bold">
              นายABC DEF
            </p>
            <Verified className="text-cozy-green-light" />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex gap-8">
          <Button as={Link} href={`/messages/${id}/info/details`} className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <Person style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <Search style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <NotificationsNone style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <MoreHoriz style={{ fontSize: 30 }} />
          </Button>
        </div>

        {/* Long Buttons column */}
        <div className="flex flex-col items-center gap-4 w-[90%]">
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            สื่อ, ไฟล์และลิงค์
          </Button>
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            ความเป็นส่วนตัวและความปลอดภัย
          </Button>
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            รายงานปัญหาทางเทคนิค
          </Button>
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}