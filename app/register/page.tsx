'use client'

import { Form, Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Google } from '@mui/icons-material';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";


export default function Register() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Register - Cozy Care";
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  // checkAuth(router);
  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src="/favicon.ico" width={80} height={80} alt="Logo" style={{width: "auto" , height: "auto"}} priority />
          <div className="font-bold text-2xl text-cozy-blue-light dark:text-cozy-blue-dark mt-2">
            COZY CARE
          </div>
        </div>

        <Form
          className="w-full max-w-xs flex flex-col gap-2"
          validationBehavior="native"
        // onSubmit={handleLogin}
        >
          {/* Username */}
          <Input
            isRequired
            id="user_name"
            errorMessage="กรุณาใส่ชื่อผู้ใช้"
            label="ชื่อผู้ใช้"
            labelPlacement="outside"
            name="username"
            placeholder="Username"
            type="text"
          />

          {/* Email */}
          <Input
            isRequired
            id="email"
            errorMessage="กรุณาใส่ email ให้ถูกต้อง"
            label="อีเมล"
            labelPlacement="outside"
            name="email"
            placeholder="Email"
            type="text"
          />

          {/* Password */}
          <Input
            isRequired
            id="password"
            errorMessage="กรุณาใส่รหัสผ่าน"
            label="รหัสผ่าน"
            labelPlacement="outside"
            name="email"
            placeholder="Password"
            type="password"
          />

          {/* Confirm Password */}
          <Input
            isRequired
            id="confirmPassword"
            errorMessage="รหัสผ่านไม่ตรงกัน"
            label="ยืนยันรหัสผ่าน"
            labelPlacement="outside"
            name="Password"
            placeholder="Confirm password"
            type="password"
          />

          <Button className="px-16 font-bold self-center mt-8" color="primary" type="submit" radius="full">
            สมัคร
          </Button>
        </Form>
      </div>

      <div className="flex flex-col items-center justify-evenly bottom-0 w-screen h-[25vh] bg-cozy-lightblue-light dark:bg-cozy-green-light">
        <Button onClick={handleGoogleLogin} className="font-bold" radius="full" color="secondary" startContent={<Google />}>ลงทะเบียนด้วย Google</Button>
        <Link href={'/login'} className="text-cozy-gray-light dark:text-black hover:underline">มีบัญชีแล้ว ? [เข้าสู่ระบบ]</Link>
      </div>

    </main>
  )
}