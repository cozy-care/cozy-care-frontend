"use client";
import React, { ChangeEvent, useState } from "react";
import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Input,
  ButtonGroup,
  DatePicker,
  Select,
  SelectItem,
  Checkbox,
  Image,
} from "@nextui-org/react";

import { useEffect } from "react";

export default function page({}) {
  useEffect(() => {
    document.title = "Edit Profile New User - Cozy Care";
  }, []);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex justify-center items-center mt-[-40px]">
        <div className="flex flex-col gap-2 w-[95%]">
          <div className="flex gap-8 w-full h-[80vh]">
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-[150px] h-auto justify-center items-center">
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp7SBv7iqt9a63k7ghTSJBMPKZF03MpmhDg&s"
                    className="w-full h-full border-2 border-blue-400 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-end gap-2 w-2/4 h-full">
                  <div className="content-center font-extrabold text-2xl">
                    ผู้ใช้งานใหม่
                  </div>
                  <p className="content-center">xxxxxx@gmail.com</p>
                </div>

                <div className="flex justify-end w-1/4 h-full">
                  <Button isIconOnly className="w-[50px] bg-blue-300">
                    <Edit />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col w-full h-5/6 justify-between">
                <section className="flex flex-col gap-2">
                  <button className="bg-slate-500 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    ยังไม่ได้เลือกสถานะผู้ใช้งาน
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    สถานะ : แพ็กเกจฟรี
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    ตารางนัดหมาย
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    คะแนนรีวิว
                  </button>
                </section>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col w-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4 rounded-t-2xl">
                      การตั้งค่าและความเป็นส่วนตัว
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4">
                      ประวัติการใช้งาน
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4">
                      ประวัติการซื้อ
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4 rounded-b-2xl">
                      ความช่วยเหลือและการสนับสนุน
                    </button>
                  </div>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full">
                    ออกจากระบบ
                  </button>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <section>
                <h2 className="flex flex-col justify-center items-center text-3xl font-bold	mt-10">
                  กรุณาเลือกสถานะผู้ใช้งาน
                </h2>
                <div className="flex justify-around items-center mt-20">
                  <div className="flex flex-col justify-center items-center gap-5">
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="caregiver role"
                      src="https://coahc.org/wp-content/uploads/hands.png"
                    />
                    <p className="text-2xl font-bold">ผู้ดูแล</p>
                  </div>
                  <div className="flex flex-col justify-center items-center  gap-5">
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="patient role"
                      src="https://freerangestock.com/sample/149048/hands-woman-patient-in-hospital-bed.jpg"
                    />
                    <p className="text-2xl font-bold">ผู้รับการดูแล</p>
                  </div>
                  <div className="flex flex-col justify-center items-center  gap-5">
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="nutritionist role"
                      src="https://www.bedee.com/wp-content/uploads/2023/12/consult-with-dietitian.png"
                    />
                    <p className="text-2xl font-bold">นักโภชนาการ</p>
                  </div>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
