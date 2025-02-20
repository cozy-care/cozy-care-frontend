"use client";

import {
  Button,
  DatePicker,
  Input,
  Link,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import { useEffect } from "react";
import { services, employments } from "@/app/caregiver/add/addMock";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { LocationOn, Edit } from "@mui/icons-material";

export default function Support() {
  const router = useRouter();
  useEffect(() => {
    document.title = "Support - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            ความช่วยเหลือ
          </h1>
          <Button
            as={Link}
            onPress={() => router.back()}
            className="text-cozy-green-light"
            isIconOnly
            radius="full"
            variant="light"
          >
            <ArrowBackIosNew />
          </Button>
        </div>
        <hr className="w-full  border-t-8 " />
        <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%] rounded-full gap-y-5">
          <Button>สาธิตการใช้งานแอปพลิเคชั่น</Button>
          <Button as={Link} href="/profile/privacy_and_security">
            ความเป็นส่วนตัวและความปลอดภัย
          </Button>
          <Button>คำขอการสนับสนุน</Button>
        </div>
      </div>
    </main>
  );
}
