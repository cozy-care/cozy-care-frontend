import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome - Cozy Care",
};

export default function Welcome() {
  return (
    <div>
      <div className="h-screen flex-col content-center">
        <div className="flex items-center justify-center mt-[40px]">
          {/* Image */}
          <div
            className="rounded-[50%] w-[800px] h-[650px] border-black border-2"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi/ycHVUvvOwzY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPb9rVqciqbcfB_84cWwneKTP31Q')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Text */}
          <div className="bg-gray-500 w-[700px] h-[400px] flex-col justify-center content-center gap-4">
            <div className="font-extrabold mx-auto w-max text-2xl ">
              ร่วมเป็นผู้ดูแลกับเรา
            </div>
            <div className="w-[600px] mx-auto mt-5 text-xl ">
              &emsp;ร่วมเป็นผู้ดูแลกับเรา
              เพื่อมอบการดูแลสุขภาพที่ดีให้กับผู้ที่ต้องการ
              คุณจะพบกับการจองงานที่ง่ายและรวดเร็ว
              พร้อมระบบการชำระเงินที่ปลอดภัย
              และการสนับสนุนจากทีมงานที่พร้อมช่วยเหลือทุกขั้นตอน
              ระบบของเราช่วยให้
              คุณสามารถติดต่อกับครอบครัวผู้ป่วยได้อย่างสะดวกและมั่นใจในความปลอดภัย
              มาร่วมสร้างสังคมการดูแลที่อบอุ่นและปลอดภัยไปด้วยกัน
            </div>
            <div className="flex justify-center ">
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl mt-5">
                เริ่มต้นใช้งาน
              </button>
            </div>
          </div>
        </div>

        <div className="py-4 w-max mx-auto">O&emsp;&emsp;O</div>
      </div>
    </div>
  );
}
