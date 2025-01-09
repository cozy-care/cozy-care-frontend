"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {
  Chat,
  HeadsetMic,
  ManageSearch,
  RateReview,
  TaskAlt,
} from "@mui/icons-material";
import { Button, Link } from "@nextui-org/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col gap-6 px-3 mb-4 lg:w-[1025px] lg:mx-auto">
        <div className="w-full h-[150px] lg:h-[250px] rounded-2xl overflow-hidden">
          <img
            alt="Caregiver background image"
            src="https://swancompanion.com/wp-content/uploads/2023/07/Depositphotos_91841702_DS.png"
            className="w-full h-full object-cover object-[50%_20%]"
          />
        </div>
        <div className="flex justify-between w-full gap-3 -mt-3">
          <Link href="" className="flex flex-col items-center w-1/2 gap-2">
            <div className="w-full h-[130px] lg:h-[150px] rounded-2xl overflow-hidden">
              <img
                alt="Caregiver background image"
                src="https://landmarkresearchjournals.org/wp-content/uploads/2021/04/shutterstock_1052428820-360x292.jpg"
                className="w-full h-full object-cover object-[50%_30%]"
              />
            </div>
            <p className="text-sm text-black dark:text-white font-semibold">
              เริ่มต้นเป็นผู้รับการดูแล
            </p>
          </Link>

          <Link href="" className="flex flex-col items-center w-1/2 gap-2">
            <div className="w-full h-[130px] lg:h-[150px] rounded-2xl overflow-hidden">
              <img
                alt="Caregiver background image"
                src="https://artistsinbuffalo.org/wp-content/uploads/2023/01/istockphoto-1374010907-612x612-1.jpg"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
            <p className="text-sm text-black dark:text-white font-semibold">
              เริ่มต้นเป็นผู้ดูแลสุขภาพ
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <h2 className="text-lg font-semibold">
            บริการดูแลเพื่อผู้ดูแลและคนที่คุณรัก
          </h2>
          <p className="text-sm px-5">
            &emsp;เราตอบสนองความต้องการของทั้งผู้ดูแลและผู้รับบริการด้วยการจัดลำดับความสำคัญของแผนสุขภาพที่เป็นเอกลักษณ์
            การดูแลของเรา มุ่งเน้นไปที่การปรับปรุงผลลัพธ์ด้านสุขภาพ
            ลดต้นทุนการดูแลและ เพิ่มความพึงพอใจของสมาชิกผ่านการดูแลที่บ้าน
          </p>
        </div>

        <div className="flex justify-between w-full h-max overflow-hidden">
          <div className="w-3/5 aspect-square rounded-full -ml-16 overflow-hidden">
            <img
              alt="Caregiver background image"
              src="https://entertainmentcommunity.org/sites/default/files/styles/wide/public/images/SeniorCare_0.jpg?itok=0h2Zsr7R"
              className="w-full h-full object-cover object-[20%_50%]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-4/5 rounded-full gap-2">
            <h2 className="text-lg font-semibold">
              บริการที่ครอบคลุมทุกขั้นตอน
            </h2>
            <p className="text-sm px-3">
              &emsp;ตั้งแต่การดูแลเบื้องต้น การฟื้นฟู จนถึงการดูแลในระยะยาว
              ทีมงานของเรา พร้อมให้การดูแลที่บ้านที่ครอบคลุม และมี
              ประสิทธิภาพสูงสุดเพื่อให้คุณ และครอบ
              ครัวได้รับการดูแลที่ดีที่สุดตลอดเวลา
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">ทำไมต้องเลือกเรา?</h2>
          <ul className="list-disc text-sm ml-5">
            <li>ทีมผู้ดูแลที่มีประสบการณ์และได้รับการรับรอง</li>
            <li>ระบบของเราช่วยให้การค้นหาและจองผู้ดูแลเป็นเรื่องง่าย</li>
            <li>
              ระบบแชทในแอปช่วยให้ครอบครัวผู้รับบริการและผู้ดูแลสามารถสื่อสารกันได้อย่างรวดเร็ว
            </li>
            <li>
              รีวิวและคะแนน เพื่อช่วยในการตัดสินใจเลือกผู้ดูแลที่เหมาะสมที่สุด
            </li>
            <li>ทีมงานของเราพร้อมให้ความช่วยเหลือและคำปรึกษาตลอดการใช้งาน</li>
          </ul>
        </div>

        <div className="flex justify-between">
          <Button
            as={Link}
            href=""
            className="font-bold w-14 h-auto aspect-square"
            color="primary"
            radius="full"
            isIconOnly
          >
            <TaskAlt />
          </Button>
          <Button
            as={Link}
            href=""
            className="font-bold w-14 h-auto aspect-square"
            color="primary"
            radius="full"
            isIconOnly
          >
            <Chat />
          </Button>
          <Button
            as={Link}
            href=""
            className="font-bold w-14 h-auto aspect-square"
            color="primary"
            radius="full"
            isIconOnly
          >
            <ManageSearch />
          </Button>
          <Button
            as={Link}
            href=""
            className="font-bold w-14 h-auto aspect-square"
            color="primary"
            radius="full"
            isIconOnly
          >
            <RateReview />
          </Button>
          <Button
            as={Link}
            href=""
            className="font-bold w-14 h-auto aspect-square"
            color="primary"
            radius="full"
            isIconOnly
          >
            <HeadsetMic />
          </Button>
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <h2 className="text-lg font-semibold">ร่วมเป็นส่วนหนึ่งของเรา</h2>
          <p className="text-sm px-5">
            &emsp;มาร่วมเป็นส่วนหนึ่งของชุมชนการดูแลสุขภาพที่บ้านที่มุ่งมั่นให้
            บริการที่มีคุณภาพและเชื่อถือได้ ไม่ว่าคุณจะเป็นผู้ดูแลหรือครอบครัว
            ที่ต้องการการดูแล เราพร้อมให้การสนับสนุนและบริการที่ดีที่สุดเพื่อ
            ให้คุณมั่นใจได้ว่าคนที่คุณรักจะได้รับการดูแลที่ดีที่สุด
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
