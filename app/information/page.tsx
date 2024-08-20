"use client";

import Footer from "@/components/Footer";
import { AddCircleOutline, FilterList } from "@mui/icons-material";

import { FormEvent, useEffect, useState } from "react";

import { Input } from "@nextui-org/react";
import InformationCard from "./InformationCard";
export default function Caregiver() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Information - Cozy Care";
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
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex flex-col items-center h-full w-full">
        <h1 className="text-5xl font-bold p-10">ประชาสัมพันธ์</h1>
        <img
          src="https://www.azay.co.th/th_TH/life/senior/Soongwai/_jcr_content/root/parsys/stage_copy_copy/stageimage.img.82.3360.jpeg/1688548061915/soongwai-1520x510-26012021.jpeg"
          alt="news"
          className="w-full h-full"
        />

        <div className="flex gap-4 py-6 w-full h-full items-center justify-center ">
          <Input
            type="text"
            placeholder="ค้นหาคำสำคัญ"
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" flex flex-col justify-center p-2 mb-6 w-[1500px] h-full"
          />
          <button className="flex  hover:text-blue-500">
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
