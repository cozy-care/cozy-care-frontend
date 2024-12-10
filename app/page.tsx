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
  const [step, setStep] = useState(0); // Current image index
  const [nextStep, setNextStep] = useState(1); // Next image index
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
        "&emsp;เริ่มต้นการดูแลครอบครัวของคุณกับเรา ค้นหา และจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแลและมั่นใจได้ ใน ความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถดู รีวิวและคะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด ให้กับครอบครัวของคุณวันนี้!",
    },
    {
      image:
        "https://www.carenlove.co.uk/wp-content/uploads/2020/07/Live-in-24-hour-Care-and-Support.jpg",
      title: "ร่วมเป็นผู้ดูแลกับเรา",
      description:
        "&emsp;ร่วมเป็นผู้ดูแลกับเรา เพื่อมอบการดูแลสุขภาพที่ดี ให้กับผู้ที่ต้องการ คุณจะพบกับการจองงานที่ง่ายและ รวดเร็ว พร้อมระบบการชำระเงินที่ปลอดภัยและการสนับ สนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน ระบบของ เราช่วยให้คุณสามารถติดต่อกับครอบครัวผู้ป่วยได้อย่างสะดวกและมั่นใจในความปลอดภัย มาร่วมสร้างสังคมการ ดูแลที่อบอุ่นและปลอดภัยไปด้วยกัน",
    },
  ];
  return (
    <main className="min-h-screen max-h-screen overflow-hidden">
      <div className="flex flex-col items-center gap-y-4 pt-4">
        <div className="self-start flex items-center space-x-3 pl-3">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          <div className="font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">
            COZY CARE
          </div>
        </div>

        <div className="relative w-[130vw] h-[40vh] rounded-t-full overflow-hidden">
          <img
            className="absolute w-full h-full object-cover object-center"
            src={content[nextStep].image}
            alt={`Image ${nextStep}`}
          />
          <img
            className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${
              fadeOut ? "opacity-100" : "opacity-0"
            }`}
            src={content[step].image}
            alt={`Image ${step}`}
          />
        </div>

        <h1 className="font-bold text-2xl drop-shadow-xl px-8">
          {content[step].title}
        </h1>

        <p className="px-8">{content[step].description}</p>

        <Button
          radius="full"
          color="primary"
          variant="bordered"
          endContent={<NavigateNext />}
          onClick={handleNextImage}
        >
          ถัดไป
        </Button>

        <Link href={`/login`}>
          <Button radius="full" color="primary">
            เริ่มต้นการใช้งาน
          </Button>
        </Link>
      </div>
    </main>
  );
}
