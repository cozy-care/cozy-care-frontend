'use client'

import NavBar from "@/components/NavBar";
import { Button, Form, Input, Select } from "@nextui-org/react";
import { useEffect } from "react";

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
                <Form className="flex flex-row">
                    <Input
                        isRequired
                        id="fistName"
                        errorMessage="กรุณาใส่ชื่อจริง"
                        label="ชื่อจริง"
                        labelPlacement="outside"
                        name="ชื่อจริง"
                        placeholder="ชื่อจริง"
                        type="firstName"

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
                    {/* <Select></Select> */}
                </Form>
            </div>


        </main >
    )
}