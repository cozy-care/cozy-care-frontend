'use client'

import { Form, Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Google } from '@mui/icons-material';
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [action, setAction] = useState("");

  useEffect(() => {
    document.title = "Login - Cozy Care";
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          <div className="font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">
            COZY CARE
          </div>
        </div>

        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <Input
            isRequired
            errorMessage="กรุณาใส่ชื่อผู้ใช้"
            label="ชื่อผู้ใช้"
            labelPlacement="outside"
            name="username"
            placeholder="Username"
            type="text"
          />

          <Input
            isRequired
            errorMessage="กรุณาใส่รหัสผ่าน"
            label="รหัสผ่าน"
            labelPlacement="outside"
            name="email"
            placeholder="Password"
            type="password"
          />
          <Button className="px-16 font-bold self-center mt-8" color="primary" type="submit" radius="full">
            เข้าสู่ระบบ
          </Button>
        </Form>
      </div>

      <div className="flex flex-col items-center justify-evenly bottom-0 w-screen h-[25vh] bg-cozy-lightblue-light dark:bg-cozy-green-light">
        <Button onClick={handleGoogleLogin} className="font-bold" radius="full" color="secondary" startContent={<Google />}>เข้าสู่ระบบด้วย Google</Button>
        <Link href={'/register'} className="text-cozy-gray-light dark:text-black">ยังไม่มีบัญชี? [ลงทะเบียน]</Link>
      </div>

    </main>
  )
}