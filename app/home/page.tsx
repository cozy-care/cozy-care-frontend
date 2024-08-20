"use client";

import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)] items-center justify-center  ">
      <div className="grow">
        <section>
          <header className="flex items-center bg-gray-300 rounded-2xl shadow-xl w-full ">
            <div className="ml-6 p-20 flex flex-col justify-center items-center w-full ">
              <h1 className="text-black font-bold text-5xl mb-4">COZY CARE</h1>
              <p className="text-2xl">เพื่อการดูแลที่อบอุ่นและปลอดภัย</p>
            </div>
            <img
              src="https://www.muangthai.co.th/assets/070a9ff0-521d-4cfb-b015-02c44a02ec1a/Content-Desktop-1440X390_5-.webp?format=webp"
              alt="การดูแลผู้สูงอายุ"
              className="rounded-lg p-3 w-full h-[300px] flex justify-center "
            />
          </header>
        </section>

        <nav className="flex  justify-center items-center gap-12 mt-10  ">
          <button className="bg-gray-400 text-center p-5 rounded-2xl shadow-xl transform hover:scale-105 hover:bg-gray-500  transition-transform duration-500">
            <a href="#" className="text-black font-bold mx-44 text-5xl ">
              ค้นหาผู้ดูแลสุขภาพ
            </a>
          </button>
          <button className="bg-gray-400 text-center p-5 rounded-2xl shadow-xl transform hover:scale-105 hover:bg-gray-500   transition-transform duration-500">
            <a href="#" className="text-black font-bold mx-64 text-5xl">
              สมัครผู้ดูแล
            </a>
          </button>
        </nav>

        <section>
          <article className="flex flex-col justify-center items-center text-center mt-32">
            <h2 className="text-black font-bold text-5xl mb-7  ">
              บริการดูแลเพื่อผู้ดูแลและคนที่คุณรัก
            </h2>
            <p className=" w-[700px] h-auto text-2xl  ">
              "เราตอบสนองความต้องการของทั้งผู้ดูแลและผู้รับบริการด้วยการจัดลำดับความสำคัญของแผนสุขภาพที่เป็นเอกลักษณ์
              การดูแลของเรามุ่งเน้นไปที่การปรับปรุงผลลัพธ์ด้านสุขภาพ
              ลดต้นทุนการดูแล และเพิ่มความพึงพอใจของสมาชิกผ่านการดูแลที่บ้าน”
            </p>
          </article>
        </section>

        <section className="flex flex-col justify-center items-center">
          <button className="flex w-[1000px] h-[300px]  mt-10 transform hover:scale-105 transition-transform duration-500">
            <article className="w-1/2 h-full bg-blue-900 rounded-l-2xl flex flex-col justify-center items-center text-left ">
              <h3 className="text-white font-bold text-3xl mb-7 ">
                ผู้รับการดูแล
              </h3>
              <ul className="text-white w-[400px] h-auto text-xl ">
                <li>ค้นหาผู้ดูแลและโปรไฟล์</li>
                <li>ดูรีวิวและคะแนนของผู้ดูแล</li>
                <li>การติดต่อผู้ดูแลผ่านระบบแชทในแอป</li>
                <li>การจองบริการเบื้องต้น (จำกัดจำนวนครั้งต่อเดือน)</li>
              </ul>
            </article>
            <article className="w-1/2 h-full bg-blue-300 rounded-r-2xl flex flex-col justify-center items-center text-left">
              <h3 className="text-black font-bold text-3xl mb-7 ">ผู้ดูแล</h3>
              <ul className="text-black w-[400px] h-auto text-xl text-left">
                <li>สร้างและแก้ไขโปรไฟล์</li>
                <li>รับการติดต่อจากผู้ป่วย</li>
                <li>การแสดงรีวิวและคะแนนจากผู้ป่วย</li>
                <li>การรับงานเบื้องต้น (จำกัดจำนวนครั้งต่อเดือน)</li>
              </ul>
            </article>
          </button>
          <h3 className="text-black font-bold text-xl mt-7 text-center ">
            แพ็คเกจฟรี
          </h3>
        </section>

        <section className="flex justify-center items-center p-10 text-center  gap-10">
          <img
            src="https://baanlalisa.com/wp-content/uploads/2020/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A5%E0%B8%A5%E0%B8%B4%E0%B8%AA%E0%B8%B2.jpg"
            alt="การบริการผู้สูงอายุ"
            className="w-[900px] h-[500px] rounded-2xl mt-20 border-4 border-blue-300"
          />
          <article className="flex-col ">
            <h2 className="text-black font-bold text-5xl mb-7 ">
              บริการที่ครอบคลุมทุกขั้นตอน
            </h2>
            <p className="w-[590px] h-auto text-2xl">
              บริการที่บ้านที่สนับสนุนการดูแลทั้งหมดในทุกขั้นตอน
              ตั้งแต่การดูแลเบื้องต้น การฟื้นฟู จนถึงการดูแลในระยะยาว
              ทีมงานของเราพร้อมให้การดูแลที่บ้านที่ครอบคลุม
              และมีประสิทธิภาพสูงสุด
              เพื่อให้คุณและครอบครัวได้รับการดูแลที่ดีที่สุดตลอดเวลา"
            </p>
          </article>
        </section>

        <section className="flex justify-center items-center p-10  gap-10">
          <article className="flex-col ">
            <h2 className="text-black font-bold text-5xl mb-7 ">
              ทำไมต้องเลือกเรา?
            </h2>
            <ul className="w-[750px] h-auto text-2xl">
              <li>
                ผู้ดูแลที่เชื่อถือได้:
                ทีมผู้ดูแลที่มีประสบการณ์และได้รับการรับรอง
              </li>
              <li>
                การจองงานง่ายดาย:
                ระบบของเราช่วยให้การค้นหาและจองผู้ดูแลเป็นเรื่องง่าย
              </li>
              <li>
                การชำระเงินที่ปลอดภัย: รับและจ่ายเงินผ่านระบบที่มั่นคงและปลอดภัย
              </li>
              <li>
                การติดต่อสะดวก:
                ระบบแชทในแอปช่วยให้ครอบครัวผู้รับบริการและผู้ดูแลสามารถสื่อสารกันได้อย่างรวดเร็ว
              </li>
              <li>
                รีวิวและคะแนน:
                ผู้ใช้สามารถดูรีวิวและคะแนนจากผู้ใช้อื่นเพื่อช่วยในการตัดสินใจเลือกผู้ดูแลที่เหมาะสมที่สุด
              </li>
              <li>
                การสนับสนุนจากทีมงาน:
                ทีมงานของเราพร้อมให้ความช่วยเหลือและคำปรึกษาตลอดการใช้งาน
              </li>
              <li>
                สร้างโอกาสและชื่อเสียง: สำหรับผู้ดูแล
                สามารถสร้างโปรไฟล์และรับรีวิวดีๆ
                จากครอบครัวผู้รับบริการเพื่อเพิ่มโอกาสในการรับงานมากขึ้น
              </li>
            </ul>
          </article>
          <img
            src="https://www.familyresourcehomecare.com/wp-content/uploads/2022/01/Top-10-Secrets-About-Being-a-Happy-Caregiver.png"
            alt="ขั้นตอนการดูแลผู้สูงอายุ"
            className="w-[800px] h-[500px] rounded-2xl mt-20 shadow-xl"
          />
        </section>

        <section className="flex justify-center items-center p-10 text-center  gap-10 mb-20">
          <img
            src="https://www.isavta.co.il/content/migrated-a779904c62a810bcaef859555e16fdc2-592.jpg"
            alt="ขั้นตอนการดูแลผู้สูงอายุ"
            className="w-[900px] h-[500px] rounded-2xl mt-20 shadow-xl"
          />
          <article className="flex-col ">
            <h2 className="text-black font-bold text-5xl mb-7 ">
              ร่วมเป็นส่วนหนึ่งของเรา
            </h2>
            <p className="w-[500px] h-auto text-2xl">
              "มาร่วมเป็นส่วนหนึ่งของชุมชนการดูแลสุขภาพที่บ้านที่มุ่งมั่นให้บริการที่มีคุณภาพและเชื่อถือได้
              ไม่ว่าคุณจะเป็นผู้ดูแลหรือครอบครัวที่ต้องการการดูแล
              เราพร้อมให้การสนับสนุนและบริการที่ดีที่สุดเพื่อให้คุณมั่นใจได้ว่าคนที่คุณรักจะได้รับการดูแลที่ดีที่สุด"
            </p>
          </article>
        </section>
        {/* <section>
        <h2 className="text-black font-bold text-5xl">ทำไมต้องเลือกเรา?</h2>
      </section>

      <section>
        <h2 className="text-black font-bold text-5xl">
          ร่วมเป็นส่วนหนึ่งของเรา
        </h2>
        <ul>
          <li>
            ผู้ดูแลที่เชื่อถือได้: ทีมผู้ดูแลที่มีประสบการณ์และได้รับการรับรอง
          </li>
        </ul>
      </section> */}
      </div>

      <Footer />
    </main>
  );
}
