'use client'

import { Link, InputOtp, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NavigateBefore } from '@mui/icons-material';

// อย่าลืมเปลี่ยนชื่อ Function
export default function Otp() {
  const [value, setValue] = useState("");

  // อย่าลืมเปลี่ยน Title
  useEffect(() => {
    document.title = "Login Confirmation - Cozy Care";
  }, []);

  const resendHandle = () => {
    console.log("OTP Resent");
  };
  
  const submitHandle = () => {
    console.log("Submit");
  };

  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col items-center gap-20">
        <div className="flex items-center justify-between mt-4 w-full">
          <Link href={'/login'}><NavigateBefore sx={{ width: '60px', height: 'auto' }} /></Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 mb-1 w-max">ยืนยันตัวตน</h1>
        </div>

        <div className="flex flex-col items-center">
          <p>รหัสได้ถูกส่งไปยัง</p>
          <p className="font-bold">example@hotmail.com</p>
        </div>

        <InputOtp
          color="primary"
          variant="bordered"
          radius="lg"
          errorMessage="รหัส OTP ไม่ถูกต้อง"
          length={6}
          size="lg"
          value={value}
          onValueChange={setValue}
        />

        <div className="flex flex-col items-center gap-1">
          <p>หากคุณยังไม่ได้รับรหัสยืนยันตัวตน</p>
          <Link onPress={resendHandle} className="font-bold text-xl">ส่งอีกครั้ง</Link>
        </div>

        <Button onPress={submitHandle} className="px-16 font-bold" color="primary" radius="full">ยืนยัน</Button>

      </div>
    </main>
  )
}