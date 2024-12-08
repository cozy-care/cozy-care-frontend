"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselInterface {
  title: string;
  text: string;
  image_link: string;
}

export const carouselDetails: CarouselInterface[] = [
  {
    title: "ร่วมเป็นผู้ดูแลกับเรา",
    text: "ร่วมเป็นผู้ดูแลกับเราเพื่อมอบการดูแลที่อบอุ่นและปลอดภัย จองงานที่ง่ายและรวดเร็ว พร้อมระบบชำระเงินที่ปลอดภัย และการสนับสนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน ระบบของเรา ช่วยให้คุณติดต่อกับครอบครัวผู้ป่วยได้อย่างสะดวก มั่นใจในความปลอดภัย มาร่วมสร้างสังคมการดูแลที่อบอุ่นและปลอดภัยไปด้วยกัน",
    image_link: "https://dazzlinginsights.com/wp-content/uploads/2020/09/Caring-for-your-ageing-parents-and-other-family-members-1024x683.jpg",
  },
  {
    title: "เริ่มต้นการดูแลครอบครัวของคุณ",
    text: "เริ่มต้นการดูแลครอบครัวของคุณกับเรา ค้นหาและจองผู้ดูแลสุขภาพ ที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแล และมั่นใจได้ในความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถ ดูรีวิวและ คะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด มอบการดูแลที่ดีที่สุดให้กับครอบครัว ของคุณวันนี้!",
    image_link: "https://www.synphaet.co.th/wp-content/uploads/2021/01/20196963_xxl-scaled.jpg",
  },
  {
    title: "เริ่มต้นการดูแลครอบครัวของคุณ",
    text: "เริ่มต้นการดูแลครอบครัวของคุณกับเรา ค้นหาและจองผู้ดูแลสุขภาพ ที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแล และมั่นใจได้ในความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถ ดูรีวิวและ คะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด มอบการดูแลที่ดีที่สุดให้กับครอบครัว ของคุณวันนี้!",
    image_link: "https://s.isanook.com/he/0/ud/2/10817/nutritionist.jpg",
  },
]

export default function Welcome() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselDetails.length;

  useEffect(() => {
    document.title = "Welcome - Cozy Care";
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <main className="w-screen h-screen flex content-center mt-[-56px] ">
      <Carousel className="flex flex-wrap items-center justify-center gap-x-10 mx-auto overflow-auto  ">
        <CarouselContent className="lg:w-full lg:h-full ">
          {carouselDetails.map((car) => (
            <CarouselItem className="flex flex-wrap items-center justify-center gap-x-10 mx-auto">
            <div
              className="rounded-[50%] w-[270px] h-[250px] lg:w-[700px] lg:h-[550px] md:mt-16 "
              style={{
                backgroundImage: `url(${car.image_link})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="lg:w-[700px] lg:h-[400px] flex-col content-center  gap-9  mt-[30px] lg:mt-[48px]">
              <h1 className="mx-auto w-max py-2 text-xl lg:text-4xl bg-gradient-to-r from-primary-dark to-accent-dark text-transparent bg-clip-text">
                {car.title}
              </h1>
              <p className="w-[250px] lg:w-[600px] mx-auto lg:text-xl  my-5">
                &emsp; {car.text}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="transform transition hover:-translate-y-1 dark:bg-primary-dark bg-primary-light dark:text-text-dark text-text-light font-bold py-4 px-8 rounded-xl">
                  เริ่มต้นใช้งาน
                </button>
              </div>
              {/* <div className="flex justify-center gap-5 mx-auto mt-12">
                <button className="w-[15px] h-[15px] bg-slate-800 rounded-[50%] my-auto" />
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
              </div> */}
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-full sm:w-[60px] lg:w-[80px]  rounded-none opacity-50 dark:bg-background-dark dark:hover:bg-neutral-700 bg-background-light">
          <button onClick={handleNextSlide}></button>
        </CarouselNext>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-full sm:w-[60px] lg:w-[80px] rounded-none opacity-50 dark:bg-background-dark dark:hover:bg-neutral-700 bg-background-light">
          <button onClick={handlePreviousSlide}></button>
        </CarouselPrevious>
      </Carousel>
    </main>
  );
}
