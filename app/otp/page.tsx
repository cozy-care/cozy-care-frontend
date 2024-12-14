'use client';

import { Link, InputOtp, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NavigateBefore } from '@mui/icons-material';
import { useRouter } from "next/navigation";
import axios, { AxiosError } from 'axios';

interface ApiResponse {
  message?: string;
  error?: string;
  code?: string;
}

export default function Otp() {
  const [value, setValue] = useState<string>(""); // OTP input value
  const [email, setEmail] = useState<string>(""); // User's email
  const [userID, setUserID] = useState<string>(""); // User's ID
  const [errorMessage, setErrorMessage] = useState<string>(""); // Error message for OTP
  const router = useRouter();

  // Set the document title and fetch email and user ID from localStorage
  useEffect(() => {
    document.title = "Login Confirmation - Cozy Care";

    // Retrieve email and user_id from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedUserID = localStorage.getItem("userID");

    if (storedEmail) setEmail(storedEmail);
    if (storedUserID) setUserID(storedUserID);
  }, []);

  const resendHandle = async () => {
    setErrorMessage(""); // Clear any previous errors
    console.log("Resending OTP...");
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/sendEmailOtp`, {
        email,
        user_id: userID,
      });
      console.log("OTP resent successfully!");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setErrorMessage("ไม่สามารถส่งรหัส OTP ได้ กรุณาลองอีกครั้ง");
    }
  };

  const submitHandle = async () => {
    setErrorMessage(""); // Clear any previous errors
    console.log("Submitting OTP...");
    try {
      const response = await axios.post<ApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verifyOtp`,
        {
          user_id: userID,
          otp: value, // OTP value entered by the user
        },
        {
          withCredentials: true, // Include cookies in the request
        }
      );

      if (response.status === 200) {
        console.log("OTP verification successful!");
        router.push("/home");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data as ApiResponse;
        if (serverError?.code === "INVALID_OTP") {
          setErrorMessage("รหัส OTP ไม่ถูกต้อง");
        } else if (serverError?.code === "OTP_EXPIRED") {
          setErrorMessage("รหัส OTP หมดอายุ กรุณาขอรหัสใหม่");
        } else if (serverError?.code === "OTP_NOT_FOUND") {
          setErrorMessage("ไม่พบรหัส OTP กรุณาลองอีกครั้ง");
        } else {
          setErrorMessage("เกิดข้อผิดพลาด กรุณาลองอีกครั้ง");
        }
      } else {
        setErrorMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
      }
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col items-center gap-20">
        <div className="flex items-center justify-between mt-4 w-full">
          <Link href={'/login'}>
            <NavigateBefore sx={{ width: '60px', height: 'auto' }} />
          </Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 mb-1 w-max">ยืนยันตัวตน</h1>
        </div>

        <div className="flex flex-col items-center">
          <p>รหัสได้ถูกส่งไปยัง</p>
          <p className="font-bold">{email || "example@hotmail.com"}</p>
        </div>

        <div className="w-full flex flex-col items-center">
          <InputOtp
            color="primary"
            variant="bordered"
            radius="lg"
            errorMessage={errorMessage} // Display error message if OTP is incorrect
            length={6}
            size="lg"
            value={value}
            onValueChange={setValue}
          />
          {/* Error message below InputOtp */}
          {errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>

        <div className="flex flex-col items-center gap-1">
          <p>หากคุณยังไม่ได้รับรหัสยืนยันตัวตน</p>
          <Link
            onPress={resendHandle}
            className="font-bold text-xl"
            onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
          >
            ส่งอีกครั้ง
          </Link>
        </div>

        <Button
          onPress={submitHandle}
          className="px-16 font-bold"
          color="primary"
          radius="full"
        >
          ยืนยัน
        </Button>
      </div>
    </main>
  );
}
