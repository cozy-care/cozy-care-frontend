'use client'

import { Button, Link, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowBackIosNew, MoreHoriz, NotificationsNone, Person, Search, Verified } from '@mui/icons-material';

export default function Details() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Details - Cozy Care";
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
            className="object-center object-cover rounded-xl w-36"
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

        {/* Long Details column */}
        <div className="flex flex-col items-center gap-4 w-[90%] text-sm">
          <div className="flex flex-col w-full h-max p-3 gap-1 shadow-md rounded-xl">
            <div className="flex w-full">
              <p className="w-1/2">ชื่อ-สกุล : สมพงศ์ จริงจริง</p>
              <p className="w-1/2">ส่วนสูง : 185 ซม.</p>
            </div>
            <div className="flex w-full">
              <p className="w-1/2">อายุ : xx ปี</p>
              <p className="w-1/2">น้ำหนัก : 75 กก. </p>
            </div>
            <div className="flex w-full">
              <p className="w-1/2">เบอร์โทร : 000-000-0000</p>
              <p className="w-1/2">ภาษาที่สื่อสารได้ : ไทย อังกฤษ</p>
            </div>
          </div>

          <div className="flex flex-col w-full h-max p-3 gap-1 shadow-md rounded-xl">
            <div className="flex w-full">
              <p className="w-[30%]">ประสบการณ์ :</p>
              <p className="w-[70%] text-pretty">
                สวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆ
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[30%]">การศึกษา :</p>
              <p className="w-[70%] text-pretty">
                สวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆ
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[30%]">ความเชี่ยวชาญ :</p>
              <p className="w-[70%] text-pretty">
                สวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆสวัสดีครับเทสประโยคยาวๆ
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  )
}