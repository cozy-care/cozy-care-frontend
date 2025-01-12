'use client'

import NavBar from "@/components/NavBar";
import { Button, Checkbox, DatePicker, Form, Input, Select, SelectItem } from "@nextui-org/react";
import { animate } from "framer-motion";
import { useEffect } from "react";


export const gender = [
    { key: "man", label: "ผู้ชาย" },
    { key: "woman", label: "ผู้หญิง" },

];

// อย่าลืมเปลี่ยนชื่อ Function
export default function CaregiverDetail() {

    // อย่าลืมเปลี่ยน Title
    useEffect(() => {
        document.title = "CaregiverDetail - Cozy Care";
    }, []);

    return (
        //<main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
        <main className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <div className="grow flex flex-col items-center gap-3 lg:w-[1025px] lg:mx-auto">
                <h1 className="font-bold">กรอกข้อมูลผู้ดูแล</h1>
                <a className="w-[150px] h-[150px] bg-cozy-green-light rounded-2xl">
                    <img src="" alt="" />
                </a>
                <Form className=" justify-center items-center">
                    <div className="flex flex-row gap-3">
                        <Input
                            isRequired
                            id="fistName"
                            errorMessage="กรุณาใส่ชื่อจริง"
                            label="ชื่อจริง"
                            labelPlacement="outside"
                            name="ชื่อจริง"
                            placeholder="ชื่อจริง"
                            type="text"

                        />
                        <Input
                            id="middleName"
                            label="ชื่อกลาง"
                            labelPlacement="outside"
                            name="password"
                            placeholder="ชื่อกลาง(ถ้ามี)"
                            type="text"

                        />
                        <Input
                            isRequired
                            id="password"
                            errorMessage="กรุณาใส่รหัสผ่าน"
                            label="รหัสผ่าน"
                            labelPlacement="outside"
                            name="password"
                            placeholder="Password"
                            type="password"

                        />
                    </div>
                    <div className="flex flex-row gap-3">
                        <Select className="w-[190px]"
                            isRequired
                            items={gender}
                            label="เพศสภาพ"
                            labelPlacement="outside"
                            placeholder="เพศ"
                        >{(gender) => <SelectItem>{gender.label}</SelectItem>}</Select>
                        <DatePicker isRequired labelPlacement="outside" className="w-[200px]" label="วัน/เดือน/ปี ที่เกิด"></DatePicker>
                        <Input
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">กก.</span>
                                </div>
                            }
                            className="w-[90px]"
                            isRequired
                            id="weight"
                            label="น้ำหนัก"
                            labelPlacement="outside"
                            name="weight"
                            placeholder="xxx"
                            type="number"
                        />
                        <Input
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">กก.</span>
                                </div>
                            }
                            className="w-[90px]"
                            isRequired
                            id="height"
                            label="ส่วนสูง"
                            labelPlacement="outside"
                            name="height"
                            placeholder="xxx"
                            type="number"
                        />
                    </div>
                </Form>

                <Form className="justify-start">
                    <h2 className="font-bold ml-5 mt-5">รายละเอียดเพิ่มเติมของผู้ดูแล</h2>
                    <div className="h-[350px] w-[650px] bg-cozy-blue-dark flex flex-col gap-3 justify-center items-center p-5 rounded-lg">
                        <Input
                            id="language"
                            label="ภาษาที่สื่อสารได้"
                            labelPlacement="outside"
                            name="language"
                            placeholder="เขียนความเชี่ยวชาญของคุณ (ถ้ามี)"
                            type="text"

                        />
                        <Input
                            id="experience"
                            label="ประสบการณ์"
                            labelPlacement="outside"
                            name="experience"
                            placeholder="เขียนประสบการณ์ของคุณ (ถ้ามี)"
                            type="text"

                        />
                        <Input
                            id="educationAndTraining"
                            label="การศึกษาและการฝึกอบรม"
                            labelPlacement="outside"
                            name="educationAndTraining"
                            placeholder="การศึกษาและการฝึกอบรม (ถ้ามี)"
                            type="text"

                        />
                        <Input
                            id="Certificate"
                            label="ใบรังรองการประกอบวิชาชีพพยาบาล พร้อมลงนาม *"
                            labelPlacement="outside"
                            name="Certificate"
                            placeholder="อัพโหลดไฟล์ของคุณ (pdf)"
                            type="text"

                        />
                    </div>
                </Form>
                <div className="mt-5">
                    <Checkbox defaultSelected radius="sm">
                        ยอมรับเงื่อนไข และนโยบายส่วนตัว.........................................
                    </Checkbox>
                </div>
                <div className="flex flew-row gap-5 mt-5 ">
                    <Button className="font-bold">ยกเลิก</Button>
                    <Button className="bg-cozy-green-light text-cozy-lightblue-light font-bold">บันทึก</Button>
                </div>
            </div>


        </main >
    )
}