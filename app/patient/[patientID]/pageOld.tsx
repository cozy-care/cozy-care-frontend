"use client";

import {
  Avatar,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";

export default function PatientID() {
  useEffect(() => {
    document.title = "*Patient Name* - Cozy Care";
  }, []);

  const placements = ["outside"];

  const gender = ["ชาย", "หญิง"];

  const province = ["กรุงเทพมหานคร", "นนทบุรี", "สงขลา"];

  const district = ["1", "2", "3"];

  const subdistrict = ["4", "5", "6"];

  const [selectedOption1, setSelectedOption1] = useState("");

  const [selectedOption2, setSelectedOption2] = useState("");

  const handleYesChange1 = () => {
    setSelectedOption1("yes");
  };

  const handleNoChange1 = () => {
    setSelectedOption1("no");
  };

  const handleYesChange2 = () => {
    setSelectedOption2("yes");
  };

  const handleNoChange2 = () => {
    setSelectedOption2("no");
  };

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
          <h1 className="self-end">เริ่มต้นการดูแลครอบครัวของคุณ</h1>

          <div className="flex gap-8 w-full h-[80vh]">
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-[150px] h-auto justify-center items-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-[130px] h-[130px] object-cover object-center border-2 border-blue-400  rounded-full mt-4"
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

              <div className="flex flex-col w-full h-5/6 justify-between mt-4">
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
                    รีวิว
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

            <Card className="w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <section>
                <h2 className="flex flex-col justify-center items-center text-2xl font-bold	">
                  กรอกข้อมูลผู้รับการดูแล
                </h2>
                <form>
                  <fieldset className="flex gap-4  mb-2">
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

                    <div className="h-auto w-full ">
                      <div id="row-1" className="flex justify-around mb-4 mt-4">
                        <div className="w-[300px]">
                          {placements.map((placement) => (
                            <Input
                              key={placement}
                              type="ชื่อจริง"
                              label="ชื่อจริง"
                              labelPlacement="outside"
                              placeholder="ชื่อจริง"
                            />
                          ))}
                        </div>
                        <div className="w-[300px]">
                          {placements.map((placement) => (
                            <Input
                              key={placement}
                              type="ชื่อกลาง"
                              label="ชื่อกลาง"
                              labelPlacement="outside"
                              placeholder="ชื่อกลาง(ถ้ามี)"
                            />
                          ))}
                        </div>
                        <div className="w-[300px]">
                          {placements.map((placement) => (
                            <Input
                              key={placement}
                              type="นามสกุล"
                              label="นามสกุล"
                              labelPlacement="outside"
                              placeholder="นามสกุล"
                            />
                          ))}
                        </div>
                      </div>

                      <div id="row-2" className="flex justify-around">
                        <div className="w-[300px]">
                          {placements.map((placement) => (
                            <Select
                              label="เพศสภาพ"
                              placeholder="เพศสภาพ"
                              labelPlacement="outside"
                              className="max-w-xs"
                            >
                              {gender.map((gender) => (
                                <SelectItem key={gender}>{gender}</SelectItem>
                              ))}
                            </Select>
                          ))}
                        </div>
                        <div className="w-[300px]">
                          {placements.map((placement) => (
                            <DatePicker
                              label={"Birth date"}
                              className="max-w-xs"
                              labelPlacement="outside"
                            />
                          ))}
                        </div>

                        <div className="flex w-[300px] justify-between">
                          <div className="w-[140px] ">
                            <Input
                              type="text"
                              label="น้ำหนัก"
                              placeholder="0.00"
                              labelPlacement="outside"
                              endContent={
                                <div className="pointer-events-none flex items-center">
                                  <span className="text-default-400 text-small">
                                    กิโลกรัม
                                  </span>
                                </div>
                              }
                            />
                          </div>
                          <div className="w-[140px]">
                            <Input
                              type="text"
                              label="ส่วนสูง"
                              placeholder="0.00"
                              labelPlacement="outside"
                              endContent={
                                <div className="pointer-events-none flex items-center">
                                  <span className="text-default-400 text-small">
                                    เซนติเมตร
                                  </span>
                                </div>
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <h3 className="flex flex-col justify-start items-strat text-xl font-bold	">
                      สถานที่ที่ต้องการดูแล *
                    </h3>

                    <div className="w-full h-[80px] bg-sky-300 flex  justify-center items-center">
                      <div className=" w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 ">
                        {placements.map((placement) => (
                          <Select
                            label="จังหวัด"
                            placeholder="จังหวัด"
                            labelPlacement="outside"
                            className="max-w-xs"
                          >
                            {province.map((province) => (
                              <SelectItem key={province}>{province}</SelectItem>
                            ))}
                          </Select>
                        ))}
                      </div>
                      <div className=" w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 ">
                        {placements.map((placement) => (
                          <Select
                            label="เขต/อำเภอ"
                            placeholder="เขต/อำเภอ"
                            labelPlacement="outside"
                            className="max-w-xs"
                          >
                            {district.map((district) => (
                              <SelectItem key={district}>{district}</SelectItem>
                            ))}
                          </Select>
                        ))}
                      </div>
                      <div className="w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 ">
                        {placements.map((placement) => (
                          <Select
                            label="แขวง/ตำบล"
                            placeholder="แขวง/ตำบล"
                            labelPlacement="outside"
                            className="max-w-xs"
                          >
                            {subdistrict.map((subdistrict) => (
                              <SelectItem key={subdistrict}>
                                {subdistrict}
                              </SelectItem>
                            ))}
                          </Select>
                        ))}
                      </div>
                    </div>

                    <fieldset>
                      <h3 className="flex flex-col justify-start items-strat text-xl font-bold	">
                        รายละเอียดเพิ่มเติมของของผู้รับการดูแล
                      </h3>
                      <div>
                        <div className="bg-sky-300 w-full h-[150px]">
                          <div id="row-4" className="flex gap-10">
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                ประเภทผู้ได้รับการดูแล
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="เด็ก|ผู้สูงอายุ|ผู้ป่วย"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                โรคประจำตัว
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="โรคประจำตัว(ถ้ามี)"
                                required
                              />
                            </div>
                          </div>
                          <div id="row-5" className="flex gap-10">
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                ประวัติการแพ้ยา
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ประวัติการแพ้ยา(ถ้ามี)"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                รายการยาที่ต้องใช้ประจำ
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="รายการยาที่ใช้(ถ้ามี)"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <div className="flex items-start justify-start mt-5">
                      <p>ผู้รับการดูแลมีภาวะติดเตียง * :</p>
                      <div className="flex  ml-8 gap-4">
                        <Checkbox
                          isSelected={selectedOption1 === "yes"}
                          onChange={handleYesChange1}
                          disabled={selectedOption1 === "no"}
                        >
                          ใช่
                        </Checkbox>
                        <Checkbox
                          isSelected={selectedOption1 === "no"}
                          onChange={handleNoChange1}
                          disabled={selectedOption1 === "yes"}
                        >
                          ไม่
                        </Checkbox>
                      </div>
                    </div>
                    <div className="flex items-start justify-start mt-5">
                      <p>ผู้รับการดูแลต้องได้รับการฟีดอาหาร หรือดูเสมหะ :</p>
                      <div className="flex  ml-8 gap-4">
                        <Checkbox
                          isSelected={selectedOption2 === "yes"}
                          onChange={handleYesChange2}
                          disabled={selectedOption2 === "no"}
                        >
                          ใช่
                        </Checkbox>
                        <Checkbox
                          isSelected={selectedOption2 === "no"}
                          onChange={handleNoChange2}
                          disabled={selectedOption2 === "yes"}
                        >
                          ไม่
                        </Checkbox>
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <Checkbox>
                        ยอมรับเงื่อนไข
                        และนโยบายส่วนตัว.........................................
                      </Checkbox>
                    </div>

                    <div className="flex justify-center items-center gap-10 mt-5">
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
