'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';

export default function Welcome() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Welcome - Cozy Care";
  }, []);

  return (
    <div className="h-screen flex content-center">
      <button className="w-[80px] h-full from-slate-300 bg-gradient-to-r">
        <ArrowBackIos />
      </button>

      <div className="flex items-center justify-center gap-x-10 mt-[40px] mx-auto">

        {/* Image */}
        <div
          className="rounded-[50%] w-[600px] h-[450px] border-slate-800 border-2"
          style={{
            backgroundImage:
              "url('https://www.westerncape.gov.za/sites/www.westerncape.gov.za/files/taking_care_of_older_people.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Text */}
        <div className="w-[700px] h-[400px] flex-col content-center gap-9 mt-[48px]">
          <h1 className="mx-auto w-max text-2xl">
            ร่วมเป็นผู้ดูแลกับเรา
          </h1>
          <p className="w-[600px] mx-auto text-xl my-5">
            &emsp;ร่วมเป็นผู้ดูแลกับเรา
            เพื่อมอบการดูแลสุขภาพที่ดีให้กับผู้ที่ต้องการ
            คุณจะพบกับการจองงานที่ง่ายและรวดเร็ว
            พร้อมระบบการชำระเงินที่ปลอดภัย
            และการสนับสนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน
            ระบบของเราช่วยให้
            คุณสามารถติดต่อกับครอบครัวผู้ป่วยได้อย่างสะดวกและมั่นใจในความปลอดภัย
            มาร่วมสร้างสังคมการดูแลที่อบอุ่นและปลอดภัยไปด้วยกัน
          </p>
          <div className="flex justify-center">
            <button onClick={() => router.push('/login')} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-2xl">
              เริ่มต้นใช้งาน
            </button>
          </div>

          <div className="flex justify-center gap-5 mx-auto mt-12">
            <button className="w-[15px] h-[15px] bg-slate-800 rounded-[50%] my-auto" />
            <button className="w-[12px] h-[12px] bg-slate-500 rounded-[50%] my-auto" />
          </div>
        </div>
      </div>

      <button className="w-[80px] h-full from-slate-300 bg-gradient-to-l">
        <ArrowForwardIos />
      </button>

    </div>

  );
}
