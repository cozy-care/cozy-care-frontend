'use client'

import Link from "next/link";
import { useEffect } from "react";
import {
  Button,
} from "@nextui-org/react";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { NavigateNext } from '@mui/icons-material';

export default function Welcome() {

  useEffect(() => {
    document.title = "Welcome - Cozy Care";
  }, []);

  return (
    <main className="min-h-screen max-h-screen overflow-hidden">
      <div className="flex flex-col items-center gap-y-4 pt-4">
        <div className="self-start flex items-center space-x-3 pl-3">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          <div className="font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">
            COZY CARE
          </div>
        </div>

        <div className="w-[130vw] h-[40vh] rounded-t-full overflow-hidden">
          <img className="w-full h-full object-cover object-center" src="https://www.compassus.com/wp-content/uploads/elementor/thumbs/iStock-1313391694-scaled-qhqdmti6l451cyr2ekiw4b05umres1lv8sab18ucug.jpg" alt="" />
        </div>

        <h1 className="font-bold text-2xl drop-shadow-xl px-8">
          เริ่มต้นการดูแลครอบครัวของคุณ
        </h1>

        <p className="px-8">
          &emsp;เริ่มต้นการดูแลครอบครัวของคุณกับเรา ค้นหา และจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแลและมั่นใจได้ ใน ความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถดู รีวิวและคะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด ให้กับครอบครัวของคุณวันนี้!
        </p>

        <Link href={`#`}>
          <Button radius="full" color="primary" variant="bordered" endContent={<NavigateNext />}>ถัดไป</Button>
        </Link>
        <Link href={`/login`}>
          <Button radius="full" color="primary">เริ่มต้นการใช้งาน</Button>
        </Link>
      </div>
    </main>
  )
}