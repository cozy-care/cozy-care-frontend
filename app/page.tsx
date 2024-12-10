"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavigateNext } from "@mui/icons-material";

export default function Welcome() {
  const [isFading, setIsFading] = useState(false); // Fading state
  const [fadeOut, setFadeOut] = useState(false); // Fading state

  const handleNextImage = () => {
    if (isFading) return; // Prevent overlapping clicks during transition

    setFadeOut(!fadeOut);
    setIsFading(true); // Start the fade-out effect
    setTimeout(() => {
      // setStep(nextStep); // Update to the next image
      setIsFading(false); // Reset fading state
    }, 1000); // Match the duration of the fade-out transition
  };

  useEffect(() => {
    document.title = "Welcome - Cozy Care";
  }, []);

  const content = [
    {
      image:
        "https://www.compassus.com/wp-content/uploads/elementor/thumbs/iStock-1313391694-scaled-qhqdmti6l451cyr2ekiw4b05umres1lv8sab18ucug.jpg",
      title: "เริ่มต้นการดูแลครอบครัวของคุณ",
      description:
        "เริ่มต้นการดูแลครอบครัวของคุณกับเรา ค้นหา และจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแลและมั่นใจได้ ใน ความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถดู รีวิวและคะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด ให้กับครอบครัวของคุณวันนี้!",
    },
    {
      image:
        "https://www.carenlove.co.uk/wp-content/uploads/2020/07/Live-in-24-hour-Care-and-Support.jpg",
      title: "ร่วมเป็นผู้ดูแลกับเรา",
      description:
        "ร่วมเป็นผู้ดูแลกับเรา เพื่อมอบการดูแลสุขภาพที่ดี ให้กับผู้ที่ต้องการ คุณจะพบกับการจองงานที่ง่ายและ รวดเร็ว พร้อมระบบการชำระเงินที่ปลอดภัยและการสนับ สนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน ระบบของ เราช่วยให้คุณสามารถติดต่อกับครอบครัวผู้ป่วยได้อย่างสะดวกและมั่นใจในความปลอดภัย มาร่วมสร้างสังคมการ ดูแลที่อบอุ่นและปลอดภัยไปด้วยกัน",
    },
  ];
  return (
    <main className="min-h-screen max-h-screen overflow-hidden">
      <div className="flex flex-col items-center gap-y-4 pt-4">
        <div className="self-start flex items-center space-x-3 pl-4">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          <div className="font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">
            COZY CARE
          </div>
        </div>

        <div className="relative w-[130vw] h-[40vh] rounded-t-full overflow-hidden">
          <img
            className="absolute w-full h-full object-cover object-center"
            src={content[1].image}
          />
          <img
            className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
            src={content[0].image}
          />
        </div>

        <div className="relative flex w-screen h-[3vh]">
          <h1 className={`absolute left-1/2 -translate-x-1/2 w-max font-bold text-2xl transition-opacity duration-1000 drop-shadow-xl ${fadeOut ? "opacity-100" : "opacity-0"}`}>{content[1].title}</h1>
          <h1 className={`absolute left-1/2 -translate-x-1/2 w-max font-bold text-2xl transition-opacity duration-1000 drop-shadow-xl ${fadeOut ? "opacity-0" : "opacity-100"}`}>{content[0].title}</h1>
        </div>

        <div className="relative w-screen h-[180px]">
          <p className={`absolute w-full h-full px-4 transition-opacity duration-1000 ${fadeOut ? "opacity-100" : "opacity-0"}`}>&emsp; {content[1].description}</p>
          <p className={`absolute w-full h-full px-4 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>&emsp; {content[0].description}</p>
        </div>

        {!fadeOut ? (
          <Button
            radius="full"
            color="primary"
            variant="bordered"
            endContent={<NavigateNext />}
            onClick={handleNextImage}
          >
            ถัดไป
          </Button>
        ) : (
          <Link href={`/login`}>
            <Button radius="full" color="primary">
              เริ่มต้นการใช้งาน
            </Button>
          </Link>
        )}

      </div>
    </main >
  );
}
