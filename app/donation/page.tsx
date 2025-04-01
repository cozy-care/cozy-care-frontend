"use client";

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

// ✅ กำหนด type ข้อมูลผู้บริจาค
interface Donation {
  name: string;
  amount: number;
}

export default function Donation() {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    document.title = "Donation - Cozy Care";

    fetch("https://api.sheetbest.com/sheets/6340dc49-d62f-4335-ba4a-716704258a4c")
      .then((res) => res.json())
      .then((data: any[]) => {
        const sorted: Donation[] = data
          .filter((item) => item.Amount) // ✅ กรองเฉพาะแถวที่มี Amount
          .map((item) => {
            const firstName = item["Name"]?.trim() || "";
            const lastName = item["Surname"]?.trim() || "";
            const name = `${firstName} ${lastName}`.trim() || "ไม่ระบุชื่อ";

            const amount = parseInt(item["Amount"]?.replace(/[^0-9]/g, "") || "0");

            return { name, amount };
          })
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 5);

        setDonations(sorted);
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
      });
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

          {donations.length === 0 ? (
            <p className="text-center text-[#999]">กำลังโหลดข้อมูล...</p>
          ) : (
            donations.map((donor, index) => (
              <div key={index} className="flex justify-between text-[#808080]">
                <p>{donor.name}</p>
                <p>{donor.amount.toLocaleString()} บาท</p>
              </div>
            ))
          )}
        </div>

        <h1 className="text-lg">ร่วมสนับสนุนพวกเรา</h1>

        <a
          href="https://forms.gle/25UEikzaXYMiwoJK8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="QR สำหรับบริจาคเงิน"
            src="/cozyQR.png"
            width={300}
            height={300}
            className="object-contain aspect-square rounded-xl cursor-pointer hover:opacity-90 transition"
          />
        </a>

        <p className="list-decimal space-y-2 ml-5">
          การสนับสนุนที่ท่านมอบให้ผ่านการบริจาคนี้ ช่วยให้เราสามารถดำเนินการ
          และพัฒนาเว็บไซต์ให้ดียิ่งขึ้น
        </p>

        <p>เงินบริจาคของท่านถูกนำไปใช้ในด้านต่างๆ เช่น:</p>

        <ol className="list-decimal space-y-2 ml-5">
          <li>
            การพัฒนาเว็บไซต์
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>เพิ่มประสิทธิภาพการใช้งาน</li>
              <li>พัฒนาฟีเจอร์ใหม่ๆ เพื่อให้ผู้ใช้งานได้รับประสบการณ์ที่ดียิ่งขึ้น</li>
            </ul>
          </li>
          <li>
            ค่าเซิร์ฟเวอร์และโครงสร้างพื้นฐาน
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>ค่าใช้จ่ายในการเช่าเซิร์ฟเวอร์ที่มีประสิทธิภาพและปลอดภัย</li>
              <li>บำรุงรักษาระบบให้พร้อมใช้งานตลอดเวลา</li>
            </ul>
          </li>
          <li>
            การสนับสนุนด้านเทคนิค
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>การจ้างทีมพัฒนาและผู้ดูแลระบบ เพื่อช่วยให้เว็บไซต์ทำงานได้อย่างราบรื่น</li>
            </ul>
          </li>
        </ol>

        <p className="list-decimal space-y-2 ml-5">
          เราให้ความสำคัญกับความโปร่งใส ท่านสามารถตรวจสอบรายงานการใช้
          เงินบริจาคได้ที่
        </p>
      </div>

      <Footer />
    </main>
  );
}
