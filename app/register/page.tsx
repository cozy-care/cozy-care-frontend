'use client';

import { Form, Input, Button } from "@nextui-org/react";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Google } from '@mui/icons-material';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  alias: string;
  role: string;
}

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Register - Cozy Care";
  }, []);

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    alias: 'AJAY', // Default alias
    role: 'user',  // Default role
  });

  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          alias: formData.username,
          role: formData.role,
        }
      );

      if (response.status === 201 || response.status === 200) {
        router.push('/login'); // Redirect to login page upon success
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/favicon.ico"
            width={80}
            height={80}
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <div className="font-bold text-2xl text-cozy-blue-light dark:text-cozy-blue-dark mt-2">
            COZY CARE
          </div>
        </div>

        <Form
          className="w-full max-w-xs flex flex-col gap-2"
          validationBehavior="native"
          onSubmit={handleRegister}
        >
          <Input
            isRequired
            id="username"
            errorMessage="กรุณาใส่ชื่อผู้ใช้"
            label="ชื่อผู้ใช้"
            labelPlacement="outside"
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleInputChange}
          />

          <Input
            isRequired
            id="email"
            errorMessage="กรุณาใส่ email ให้ถูกต้อง"
            label="อีเมล"
            labelPlacement="outside"
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />

          <Input
            isRequired
            id="confirmPassword"
            errorMessage="รหัสผ่านไม่ตรงกัน"
            label="ยืนยันรหัสผ่าน"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            onChange={handleInputChange}
          />

          {error && <div className="text-red-500 text-center mt-2">{error}</div>}

          <Button
            className="px-16 font-bold self-center mt-8"
            color="primary"
            type="submit"
            radius="full"
          >
            สมัคร
          </Button>
        </Form>
      </div>

      <div className="flex flex-col items-center justify-evenly bottom-0 w-screen h-[25vh] bg-cozy-lightblue-light dark:bg-cozy-green-light">
        <Button
          onPress={handleGoogleLogin}
          className="font-bold bg-cozy-blue-light dark:bg-cozy-teal-dark text-white dark:text-black"
          radius="full"
          color="secondary"
          startContent={<Google />}
        >
          ลงทะเบียนด้วย Google
        </Button>
        <Link href={'/login'} className="text-cozy-gray-light dark:text-black hover:underline">
          มีบัญชีแล้ว ? [เข้าสู่ระบบ]
        </Link>
      </div>
    </main>
  );
}
