'use client'

import { Form, Input, Button, Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Google } from '@mui/icons-material';
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

interface LoginCredentials {
  username: string;
  password: string;
}

async function loginUser(credentials: LoginCredentials): Promise<boolean> {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      credentials,
      { withCredentials: true }
    );
    return response.status === 200;
  } catch (error) {
    console.error("There was an error logging in!", error);
    return false;
  }
}

async function checkAuth(router: any): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      router.push("/home");
    }
  } catch (error) {
    console.log("User not logged in or authentication failed.");
  }
}

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - Cozy Care";
  }, []);

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem("user_name") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const success = await loginUser({ username, password });

    if (success) {
      console.log("Login successful!");
      router.push("/home");
    } else {
      console.log("Login failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  checkAuth(router);
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
          className="w-full max-w-xs flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handleLogin}
        >
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

          <div className="w-full flex flex-col">
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
            <Link href={'/recovery'} underline="hover" className="text-cozy-gray-light dark:text-black self-end">ลืมรหัสผ่าน ? </Link>
          </div>

          <Button className="px-16 font-bold self-center mt-8" color="primary" type="submit" radius="full">
            เข้าสู่ระบบ
          </Button>
        </Form>
      </div>

      <div className="flex flex-col items-center justify-evenly bottom-0 w-screen h-[25vh] bg-cozy-lightblue-light dark:bg-cozy-green-light">
        <Button onPress={handleGoogleLogin} className="font-bold" radius="full" color="secondary" startContent={<Google />}>เข้าสู่ระบบด้วย Google</Button>
        <Link href={'/register'} underline="hover" className="text-cozy-gray-light dark:text-black">ยังไม่มีบัญชี ? [ลงทะเบียน]</Link>
      </div>

    </main>
  )
}