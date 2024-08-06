import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Register - Cozy Care",
};

export default function Register() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-5/12 h-full bg-red-400 ">
        <div className="bg-slate-200 p-4 rounded-l-xl w-3/4 ">
          <div className="flex flex-col place-items-center">เริ่มต้นใช้งาน</div>
          <div className="">ทำไมต้องเลือกเรา?</div>
          <ul>
            <li>
              <p>ผู้ดูแลที่เชื่อถือได้ : </p>
              <p>ค้นหาและจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรอง</p>
            </li>
            <li>
              <p>ใช้งานง่าย : </p>
              <p>จองผู้ดูแลในไม่กี่ขั้นตอนผ่านแอปพลิเคชันของเรา</p>
            </li>
            <li>
              <p>การติดต่อที่สะดวก : </p>
              <p>ระบบแชทภายในแอปช่วยให้คุณติดต่อกับผู้ดูแลได้ตลอดเวลา</p>
            </li>
            <li>
              <p>รีวิวและคะแนน : </p>
              <p>ดูรีวิวจากผู้ใช้อื่นเพื่อเลือกผู้ดูแลที่เหมาะสม</p>
            </li>
            <li>
              <p>การสนับสนุนจากทีมงาน : </p>
              <p>
                พร้อมให้ความช่วยเหลือและคำปรึกษาตลอดการใช้งาน
                เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-7/12 h-auto bg-slate-300">
        <div className="bg-slate-100 p-4 rounded-r-xl">
          <div>ลงทะเบียน</div>
          <form>
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ชื่อผู้ใช้"
                required
              />
            </div>
            <div>
              <label
                htmlFor="e_mail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                อีเมลล์
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ชื่อผู้ใช้"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                รหัสผ่าน
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ชื่อผู้ใช้"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ชื่อผู้ใช้"
                required
              />
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
