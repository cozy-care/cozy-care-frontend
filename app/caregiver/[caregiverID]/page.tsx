"use client";

import { Edit } from "@mui/icons-material";
import { Avatar, Button, Card, Input, ButtonGroup } from "@nextui-org/react";

import { useEffect } from "react";

export default function CaregiverID() {
  useEffect(() => {
    document.title = "*Caregiver Name* - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex justify-center items-center mt-[-40px]">
        <div className="flex flex-col gap-2 w-[95%]">
          <h1 className="self-end font-bold">ร่วมเป็นผู้ดูแลกับเรา</h1>

          <div className="flex gap-8 w-full h-[80vh]">
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-1/4 h-full justify-center items-center">
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFD5-UI3RkGwYxCx_0qHbtqSzjwr3PrLEuw&s"
                    className="w-full h-auto border-2 border-blue-400"
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
              <section className="flex flex-col m-10 rounded-none">
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                  ผู้ดูแล
                </button>
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                  สถานะ : แพคเกจฟรี
                </button>
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                  ตารางนัดหมาย
                </button>
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                  คะแนนรีวิว
                </button>
              </section>

              {/* <ButtonGroup size="lg" className="flex flex-col ">
                <Button className="rounded-none">One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
              </ButtonGroup> */}
              <section className="flex flex-col m-10 rounded-none">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  การตั้งค่าและความเป็นส่วนตัว
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ประวัติการใช้งาน
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ประวัติการซื้อ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ความช่วยเหลือและการสนับสนุน
                </button>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ออกจากระบบ
                </button>
              </section>
            </Card>

            <Card className="w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <section>
                <h2 className="flex flex-col justify-center items-center text-2xl font-bold	">
                  กรอกข้อมูลผู้ดูแล
                </h2>
                <form className="flex">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_640.png"
                    alt="dowload"
                    className="h-[200px] w-auto"
                  />
                  <fieldset>
                    <div id="row-1" className="flex">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ชื่อจริง
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ชื่อกลาง
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          นามสกุล
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                    </div>
                    <div id="row-2" className="flex">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          เพศสภาพ
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          วัน/เดือน/ปีเกิด
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          น้ำหนัก
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ส่วนสูง
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ชื่อจริง"
                          required
                        />
                      </div>
                    </div>
                  </fieldset>
                </form>
                <form>
                  <h3 className="flex flex-col justify-start items-strat text-xl font-bold	">
                    สถานที่ที่ต้องการดูแล *
                  </h3>
                  <div id="row-3" className="flex">
                    <div>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="จังหวัด"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="เขต/อำเภอ"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="แขวง/ตำบล"
                        required
                      />
                    </div>
                  </div>
                  <h3 className="flex flex-col justify-start items-strat text-xl font-bold	">
                    รายละเอียดเพิ่มเติมของผู้ดูแล
                  </h3>
                  <div id="row-4" className="flex gap-10">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ประสบการณ์
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ชื่อจริง"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ความเชี่ยวชาญ
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ชื่อจริง"
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
                        ใบรังรองการประกอบวิชาชีพพยาบาล พร้อมลงนาม *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ชื่อจริง"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ภาษาที่สื่อสารได้ *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ชื่อจริง"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ยอมรับเงื่อนไข
                      และนโยบายส่วนตัว.........................................
                    </label>
                  </div>
                </form>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
