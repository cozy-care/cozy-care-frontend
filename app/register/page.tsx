import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Register - Cozy Care",
};

export default function Register() {
  return (
    <div className="flex w-screen h-screen static">
      <div className="w-5/12 h-full bg-slate-400 static ">
        <div className="bg-slate-200 p-4 rounded-l-xl w-3/4 h-4/5 relative top-24 left-40 ">
          <h1 className="flex flex-col place-items-center text-indigo-700 mb-5">
            เริ่มต้นใช้งาน
          </h1>
          <h2 className="">ทำไมต้องเลือกเรา?</h2>
          <ul>
            <li>
              <strong>ผู้ดูแลที่เชื่อถือได้ : </strong>
              <p>ค้นหาและจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรอง</p>
            </li>
            <li>
              <strong>ใช้งานง่าย : </strong>
              <p>จองผู้ดูแลในไม่กี่ขั้นตอนผ่านแอปพลิเคชันของเรา</p>
            </li>
            <li>
              <strong>การติดต่อที่สะดวก : </strong>
              <p>ระบบแชทภายในแอปช่วยให้คุณติดต่อกับผู้ดูแลได้ตลอดเวลา</p>
            </li>
            <li>
              <strong>รีวิวและคะแนน : </strong>
              <p>ดูรีวิวจากผู้ใช้อื่นเพื่อเลือกผู้ดูแลที่เหมาะสม</p>
            </li>
            <li>
              <strong>การสนับสนุนจากทีมงาน : </strong>
              <p>
                พร้อมให้ความช่วยเหลือและคำปรึกษาตลอดการใช้งาน
                เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-7/12 h-auto bg-slate-300 static">
        <div className="bg-slate-100 p-4 rounded-r-xl relative top-32 w-4/5 h-2/3">
          <form>
            <fieldset>
              <legend className="text-center mb-5">
                <h2 className="flex flex-col place-items-center text-3xl font-bold text-indigo-700">
                  ลงทะเบียน
                </h2>
              </legend>
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="user_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="ชื่อผู้ใช้"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="e_mail"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  อีเมล
                </label>
                <input
                  type="email"
                  id="e_mail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="อีเมล"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="ชื่อผู้ใช้"
                  required
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  สมัคร
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
