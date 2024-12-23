"use client";

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";

export default function Donation() {
  useEffect(() => {
    document.title = "Donation - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center mb-4 gap-4 lg:w-[1000px] lg:mx-auto ">
        <div className="w-full h-max ">
          <Image
            alt="Donation background image"
            src="https://media.licdn.com/dms/image/v2/D5612AQHV6Uej3wo4GA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733383009272?e=2147483647&v=beta&t=ka9rLK8DMPp_nTmtzExQ2dpFwNMO3hbZ3PoCOR4IHRQ"
            width="100%"
            height={150}
            radius="none"
            className="object-cover object-center"
          />
        </div>

        <div className="flex justify-center rounded-2xl w-[95%] lg:w-[1000px] lg:mx-auto py-4 bg-cozy-blue-light dark:bg-cozy-teal-dark text-white dark:text-black font-bold text-lg">
          ขอบคุณทุกท่านที่สนับสนุนพวกเรา
        </div>

        <div className="flex flex-col gap-2 justify-center rounded-2xl shadow-md w-[95%] lg:w-[1000px] lg:mx-auto px-5 py-4">
          <h2 className="font-bold text-lg">5 รายชื่อที่บริจาคสูงสุด</h2>

          <div className="flex justify-between text-[#808080]">
            <p>นายเอ บีซี</p>
            <p>10,000 บาท</p>
          </div>

          <div className="flex justify-between text-[#808080]">
            <p>นายสมชาย ลำเนาได้</p>
            <p>8,000 บาท</p>
          </div>

          <div className="flex justify-between text-[#808080]">
            <p>นายสาวสมหญิง จริงจังมาก</p>
            <p>8,000 บาท</p>
          </div>

          <div className="flex justify-between text-[#808080]">
            <p>ไม่ประสงค์ออกนาม</p>
            <p>5,000 บาท</p>
          </div>

          <div className="flex justify-between text-[#808080]">
            <p>ไม่ประสงค์ออกนาม</p>
            <p>4,000 บาท</p>
          </div>
        </div>

        <h1 className="text-lg">ร่วมสนับสนุนพวกเรา</h1>

        <div className="border-2 aspect-square w-[150px] rounded-xl"></div>

        <p>
          การสนับสนุนที่ท่านมอบให้ผ่านการบริจาคนี้ ช่วยให้เราสามารถดำเนินการ
          และพัฒนาเว็บไซต์ให้ดียิ่งขึ้น
        </p>

        <p>เงินบริจาคของท่านถูกนำไปใช้ในด้านต่างๆ เช่น:</p>

        <ol className="list-decimal">
          <li>การพัฒนาเว็บไซต์</li>
          <ul className="mx-10">
            <li>เพิ่มประสิทธิภาพการใช้งาน</li>
            <li>
              พัฒนาฟีเจอร์ใหม่ๆ เพื่อให้ผู้ใช้งานได้รับประสบการณ์ที่ดียิ่งขึ้น
            </li>
          </ul>
          <li>ค่าเซิร์ฟเวอร์และโครงสร้างพื้นฐาน</li>
          <ul className="mx-10">
            <li>ค่าใช้จ่ายในการเช่าเซิร์ฟเวอร์ที่มีประสิทธิภาพและปลอดภัย</li>
            <li>บำรุงรักษาระบบให้พร้อมใช้งานตลอดเวลา</li>
          </ul>
          <li>การสนับสนุนด้านเทคนิค</li>
          <ul className="mx-10">
            <li>
              การจ้างทีมพัฒนาและผู้ดูแลระบบ
              เพื่อช่วยให้เว็บไซต์ทำงานได้อย่างราบรื่น
            </li>
          </ul>
        </ol>

        <p>
          เราให้ความสำคัญกับความโปร่งใส ท่านสามารถตรวจสอบรายงานการใช้
          เงินบริจาคได้ที่
          <a
            href=""
            className="text-cozy-darkblue-dark dark:text-cozy-blue-dark font-bold"
          >
            &nbsp;[ลิงก์ไปยังรายงานหรือรายละเอียดเพิ่มเติม]
          </a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
