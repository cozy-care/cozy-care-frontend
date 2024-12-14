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

async function loginUser(credentials: LoginCredentials): Promise<{ success: boolean; isOTP?: boolean; userID?: string; email?: string }> {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      credentials,
      { withCredentials: true }
    );

    // Extract isOTP, userID, and email from the response
    const { isOTP, userID, email } = response.data;

    return { success: true, isOTP, userID, email };
  } catch (error) {
    console.error("There was an error logging in!", error);
    return { success: false };
  }
}

async function checkAuth(router: any): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      { withCredentials: true }
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
  
    // Use the updated loginUser function that returns success, isOTP, email, and userID
    const { success, isOTP, email, userID } = await loginUser({ username, password });

    if (success) {
      if (isOTP) {
        router.push("/home");
      } else {
        // Call the additional POST request to send email and userID
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sendEmailOtp`,
            { email, user_id: userID }, // Send email and userID in the body
            { withCredentials: true }
          );
          console.log("POST request to /api/auth/sendEmailOtp successful!");
        } catch (error) {
          console.error("Error during POST request to /api/auth/sendEmailOtp:", error);
          return; // Optionally prevent navigation if the POST fails
        }
        localStorage.setItem("email", email as string);
        localStorage.setItem("userID", userID as string);
        router.push("/otp"); // Navigate to /otp after the POST request
      }
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
        <Button onPress={handleGoogleLogin} className="font-bold bg-cozy-blue-light dark:bg-cozy-teal-dark text-white dark:text-black" radius="full" color="secondary" startContent={<Google />}>เข้าสู่ระบบด้วย Google</Button>
        <Link href={'/register'} underline="hover" className="text-cozy-gray-light dark:text-black">ยังไม่มีบัญชี ? [ลงทะเบียน]</Link>
      </div>

    </main>
  )
}