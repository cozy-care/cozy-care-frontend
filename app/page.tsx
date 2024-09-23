"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Welcome() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide
  const totalSlides = 3; // Total number of slides

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
          <CarouselItem className="flex flex-wrap items-center justify-center gap-x-10 mx-auto">
            {/* Image 1*/}
            <div
              className="rounded-[50%] w-[270px] h-[250px] lg:w-[700px] lg:h-[550px] border-slate-900 border-2 md:mt-16 "
              style={{
                backgroundImage:
                  "url('https://www.westerncape.gov.za/sites/www.westerncape.gov.za/files/taking_care_of_older_people.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Text 1*/}
            <div className="lg:w-[700px] lg:h-[400px] flex-col content-center  gap-9 mt-[48px]">
              <h1 className="mx-auto w-max text-xl lg:text-2xl ">
                ร่วมเป็นผู้ดูแลกับเรา
              </h1>
              <p className="w-[250px] lg:w-[600px] mx-auto text-medium lg:text-xl  my-5">
                &emsp;ร่วมเป็นผู้ดูแลกับเรา
                เพื่อมอบการดูแลสุขภาพที่ดีให้กับผู้ที่ต้องการ
                คุณจะพบกับการจองงานที่ง่ายและรวดเร็ว
                พร้อมระบบการชำระเงินที่ปลอดภัย
                และการสนับสนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน...
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl"
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>

              <div className="flex justify-center gap-2 sm:gap-5 mx-auto mt-6 sm:mt-12">
                <button className="w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] bg-slate-800 rounded-full my-auto" />
                <button className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-slate-500 rounded-full my-auto" />
                <button className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-slate-500 rounded-full my-auto" />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-wrap items-center justify-center gap-x-10 mx-auto">
            {/* Image 2*/}
            <div
              className="rounded-[50%] w-[270px] h-[250px] lg:w-[700px] lg:h-[550px] border-slate-900 border-2 md:mt-16"
              style={{
                backgroundImage:
                  "url('https://www.synphaet.co.th/wp-content/uploads/2021/01/20196963_xxl-scaled.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Text 2*/}
            <div className="lg:w-[700px] lg:h-[400px] flex-col content-center  gap-9 mt-[48px] ">
              <h1 className="mx-auto w-max text-xl lg:text-2xl ">
                เริ่มต้นการดูแลครอบครัวของคุณ
              </h1>
              <p className="w-[250px] lg:w-[600px] mx-auto text-medium lg:text-xl  my-5 ">
                &emsp; เริ่มต้นการดูแลครอบครัวของคุณกับเรา
                ค้นหาและจองผู้ดูแลสุขภาพ
                ที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ
                ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแล
                และมั่นใจได้ในความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถ
                ดูรีวิวและ คะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด
                มอบการดูแลที่ดีที่สุดให้กับครอบครัว ของคุณวันนี้!
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl "
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>

              <div className="flex justify-center gap-5 mx-auto mt-12 ">
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
                <button className="w-[15px] h-[15px] bg-slate-800 rounded-[50%] my-auto" />
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-wrap items-center justify-center gap-x-10 mx-auto">
            {/* Image 3*/}
            <div
              className="rounded-[50%] w-[270px] h-[250px] lg:w-[700px] lg:h-[550px] border-slate-900 border-2 md:mt-16"
              style={{
                backgroundImage:
                  "url('https://s.isanook.com/he/0/ud/2/10817/nutritionist.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Text 3*/}
            <div className="lg:w-[700px] lg:h-[400px] flex-col content-center  gap-9 mt-[48px] ">
              <h1 className="mx-auto w-max text-xl lg:text-2xl ">
                เริ่มต้นการดูแลครอบครัวของคุณ
              </h1>
              <p className="w-[250px] lg:w-[600px] mx-auto text-medium lg:text-xl  my-5">
                &emsp; เริ่มต้นการดูแลครอบครัวของคุณกับเรา
                ค้นหาและจองผู้ดูแลสุขภาพ
                ที่มีประสบการณ์และได้รับการรับรองได้ง่ายๆ
                ใช้ระบบแชทเพื่อติดต่อกับผู้ดูแล
                และมั่นใจได้ในความปลอดภัยด้วยการตรวจสอบประวัติ ผู้ใช้สามารถ
                ดูรีวิวและ คะแนนเพื่อเลือกผู้ดูแลที่เหมาะสมที่สุด
                มอบการดูแลที่ดีที่สุดให้กับครอบครัว ของคุณวันนี้!
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl"
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>

              <div className="flex justify-center gap-5 mx-auto mt-12 sm:mt-12">
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
                <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
                <button className="w-[15px] h-[15px] bg-slate-800 rounded-[50%] my-auto" />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-full sm:w-[60px] lg:w-[80px]  rounded-none hover:bg-slate-200">
          <button onClick={handleNextSlide} className="">
            Next
          </button>
        </CarouselNext>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-full sm:w-[60px] lg:w-[80px] rounded-none hover:bg-slate-200">
          <button onClick={handlePreviousSlide}>Previous</button>
        </CarouselPrevious>
      </Carousel>
      {/* <button className="w-[80px] h-100% from-slate-300 bg-gradient-to-l">
        <ArrowForwardIos />
      </button> */}
    </main>
  );
}
