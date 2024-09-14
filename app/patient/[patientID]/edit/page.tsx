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
} from "@nextui-org/react";

import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    document.title = "Edit Profile Patient - Cozy Care";
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
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-full h-full border-2 border-blue-400 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-end gap-2 w-2/4 h-full">
                  <div className="content-center font-extrabold text-2xl">
                    DisplayName
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
                    ผู้รับการดูแล
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
                <h2 className="flex flex-col justify-center items-center text-2xl font-bold	">
                  แก้ไขโปรไฟล์
                </h2>
                <form>
                  <fieldset className="flex flex-col justify-center items-center mt-4">
                    <div className="w-[150px] h-[150px] rounded-full border-red-200 border-2">
                      <label htmlFor="imageUpload">
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt="Uploaded"
                            className="w-full h-full object-cover object-center cursor-pointer rounded-full"
                          />
                        ) : (
                          <img
                            src="https://www.shutterstock.com/image-vector/upload-icon-vector-web-computer-260nw-1924011959.jpg"
                            alt="download"
                            className="w-full h-full object-cover object-center cursor-pointer rounded-full"
                          />
                        )}
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                    </div>

                    <div className=" flex flex-col gap-2  ">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          นามแฝง
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="นามแฝง"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ชื่อผู้ใช้
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อผู้ใช้"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          อีเมล
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="อีเมล"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          รหัสผ่าน
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="รหัสผ่าน"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="เบอร์โทรศัพท์"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-10 mt-6">
                      <Button color="default" className="w-[130px]">
                        ยกเลิก
                      </Button>
                      <Button color="primary" className="w-[130px]">
                        บันทึก
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
