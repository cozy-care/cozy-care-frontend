"use client";

import Footer from "@/components/Footer";
import { AddCircleOutline, FilterList } from "@mui/icons-material";

import { FormEvent, useEffect, useState } from "react";

import { Input } from "@nextui-org/react";
import InformationCard from "./InformationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Caregiver() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide
  const totalSlides = 5; // Total number of slides

  useEffect(() => {
    document.title = "Information - Cozy Care";
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // const goToSlide = (index: React.SetStateAction<number>) => {
  //   setCurrentSlide(index);
  // };

  // Set interval for auto-sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  async function searchHandle(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData,
    // })
    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)] overflow-hidden">
      <div className="grow flex flex-col items-center h-full w-full">
        <h1 className="text-3xl lg:text-5xl font-bold p-10">ประชาสัมพันธ์</h1>
        <Carousel className=" lg:max-w-8xl h-[300px] lg:h-[600px] bg-slate-400">
          <CarouselContent
            className="w-full h-full flex  ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <CarouselItem>
              <img
                src="https://blog.cheewid.com/wp-content/uploads/2024/04/Cheewid-MAR-3-02.jpg"
                alt="news"
                className="object-contain  w-full h-[300px] lg:h-[600px]"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full">
              <img
                src="https://www.nakornthon.com/Upload/Images/Content/637545036588642046/Image_AW_Website_7%20%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%20%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9D%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87-01.jpg"
                alt="news"
                className="object-contain  w-full h-[300px] lg:h-[600px] "
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://www.bfcdental.com/wp-content/uploads/2021/08/article-bfc-aug-3.png"
                alt="news"
                className="object-contain  w-full h-[300px] lg:h-[600px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://www.nakornthon.com/Upload/Images/Content/637595277210943124/Image_AW_Website_%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%20%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A1-01.jpg"
                alt="news"
                className="object-contain  w-full h-[300px] lg:h-[600px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://siph-space.sgp1.digitaloceanspaces.com/uploads/postHealths/2021/12/1639550019_151264_Take_care_elderly_in_cold_season.jpg"
                alt="news"
                className="object-contain  w-full h-[300px] lg:h-[600px]"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] lg:w-[100px] h-full rounded-none hover:bg-slate-200">
            <button onClick={handleNextSlide} className="">
              Next
            </button>
          </CarouselNext>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] lg:w-[100px] h-full rounded-none hover:bg-slate-200">
            <button onClick={handlePreviousSlide}>Previous</button>
          </CarouselPrevious>

          {/* <div className="flex mt-4 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)} // Set slide to the clicked dot
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-gray-900" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`} // Add aria-label for accessibility
              />
            ))}
          </div> */}
        </Carousel>
        <div className="flex gap-4 py-6 w-full h-full items-center justify-center ">
          <Input
            type="text"
            placeholder="ค้นหาคำสำคัญ"
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" flex flex-col justify-center p-2 mb-6 w-[1500px] h-full"
          />
          <button className="flex hover:text-blue-500 mb-6">
            <FilterList />
          </button>
        </div>
        <section className="flex flex-col justify-center items-center">
          <InformationCard
            title={"โรคอัลไซเมอร์ รู้ให้เร็ว ก่อนเสี่ยงภาวะเสื่อมรุนเเรง"}
            picURL={
              "https://www.bumrungrad.com/getattachment/4ef1ec4c-6009-48fa-8cae-61152b532fc1/Alzheimer_blog.jpg"
            }
            detail={
              "ซึ่งส่วนใหญ่จะพบในผู้สูงอายุที่มีอายุ 65 ปีขึ้นไป โดยจะสังเกตุจากพฤติกรรม และอารมณ์ที่เปลี่ยนไป มีอาการหลงลืม สับสนเรื่องเวลา ไม่สามารถรับรู้หรือเรียนรู้สิ่งใหม่ๆ และใช้ภาษาผิดปกติ ซึ่งหากผู้สูงอายุที่บ้านของคุณมีพฤติกรรมเหล่านี้ อาจเป็นสัญญาณเตือนสำคัญให้ระวังว่าอาจเสี่ยงเป็นโรคอัลไซเมอร์นั่นเอง"
            }
          ></InformationCard>
          <InformationCard
            title={"ภูมิแพ้ในเด็ก ที่พ่อแม่ต้องรู้"}
            picURL={
              "https://www.synphaet.co.th/children-ramintra/wp-content/uploads/sites/3/2019/12/21998522_xl-scaled.jpg"
            }
            detail={
              "อาการแพ้ในเด็กเกิดจากร่างกายมีปฏิกิริยาไวต่อสารก่อภูมิแพ้ หรือสารระคายเคือง ซึ่งอาการแพ้ในเด็กอาจมีตั้งแต่เล็กน้อยไปจนถึงรุนแรง รวมถึงอาจส่งผลต่อพัฒนาการของเด็กร่วมด้วย แม้โรคภูมิแพ้ ไม่สามารถรักษาให้หายขาดได้ แต่สามารถควบคุมจนไม่มีอาการได้ หากรีบตรวจรักษาให้เหมาะสม"
            }
          ></InformationCard>
          <InformationCard
            title={"ผู้สูงอายุกับอาการปวดหลัง"}
            picURL={
              "https://www.synphaet.co.th/wp-content/uploads/2020/06/49307507_xxl-scaled.jpg"
            }
            detail={
              "เมื่ออายุมากขึ้นร่างกายก็ค่อย ๆ เสื่อมถอยลง อาการไม่พึงประสงค์ต่าง ๆ ก็ตามมา ไม่ว่าจะเป็นปัญหาท้องผูก ภาวะกลืนลำบาก เจ็บปวดตามข้อ โดยเฉพาะอาการปวดหลัง หรือปวดก้นกบ ซึ่งเป็นภาวะที่พบได้บ่อยมากในผู้สูงอายุ สร้างความเจ็บปวดและความรำคาญใจให้ผู้สูงอายุไม่น้อย อีกทั้งยังทำให้ผู้สูงอายุทำกิจกรรมต่างๆ ได้น้อยลง ส่งผลกระทบไปถึงการใช้ชีวิตประจำวันของผู้สูงอายุ "
            }
          ></InformationCard>
          <InformationCard
            title={"โรคหลอดเลือดสมอง ภาวะอันตรายที่ต้องรีบรักษา"}
            picURL={
              "https://www.phyathai.com/_next/image?url=https%3A%2F%2Fpyt-storage.sgp1.digitaloceanspaces.com%2Fwp-content%2Fuploads%2F2023%2F09%2FPTS-00021-2023_Template-%25E0%25B8%25A0%25E0%25B8%25B2%25E0%25B8%259E%25E0%25B9%2580%25E0%25B8%259B%25E0%25B8%25B4%25E0%25B8%2594%25E0%25B8%259A%25E0%25B8%2597%25E0%25B8%2584%25E0%25B8%25A7%25E0%25B8%25B2%25E0%25B8%25A1-%25E0%25B8%259B%25E0%25B8%25A7%25E0%25B8%2594%25E0%25B8%25AB%25E0%25B8%25B1%25E0%25B8%25A7%25E0%25B9%2580%25E0%25B8%25A3%25E0%25B8%25B7%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%2587-%25E0%25B8%25AD%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%25A3%25E0%25B8%2599%25E0%25B8%25B5%25E0%25B9%2589.%25E0%25B8%2584%25E0%25B8%25B8%25E0%25B8%2593%25E0%25B8%25AB%25E0%25B8%25A1%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%25A7%25E0%25B9%2588%25E0%25B8%25B2-%25E0%25B9%2584%25E0%25B8%25A1%25E0%25B9%2588%25E0%25B9%2583%25E0%25B8%258A%25E0%25B9%2588%25E0%25B9%2580%25E0%25B8%25A3%25E0%25B8%25B7%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B8%2598%25E0%25B8%25A3%25E0%25B8%25A3%25E0%25B8%25A1%25E0%25B8%2594%25E0%25B8%25B2_1200x630.jpg&w=3840&q=75"
            }
            detail={
              "เป็นสาเหตุการเสียชีวิต และความพิการลำดับต้น ๆ ของประเทศไทย ซึ่งในอดีตโรคนี้มักเกิดในผู้สูงอายุ แต่ในปัจจุบันกลับพบในกลุ่มคนอายุน้อย หรือกลุ่มคนในวัยทำงานได้เพิ่มขึ้น ซึ่งความรุนแรงของโรคอาจก่อให้เกิดความพิการ หรือบางรายอาจรุนแรงถึงขั้นเสียชีวิต"
            }
          ></InformationCard>
        </section>
      </div>
      <Footer />
    </main>
  );
}
