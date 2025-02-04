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

export default function Add() {
  const router = useRouter();
  useEffect(() => {
    document.title = "Add - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6">
        <div className="flex relative items-center gap-3 w-full h-[50px]">
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
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            เพิ่มข้อมูลผู้ดูแล
          </h1>
        </div>
        <div className="flex flex-col w-full gap-1">
          <h2>เลือกบริการที่ต้องการรับการดูแล</h2>
          <Select
            className="w-full"
            placeholder="สามารถเลือกได้มากกว่า 1 รายการ"
            selectionMode="multiple"
          >
            {services.map((service) => (
              <SelectItem key={service.key}>{service.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full">
          <p className="w-max text-nowrap">เริ่มต้น</p>
          <DatePicker radius="full" size="sm" className="grow"></DatePicker>
          <TimeInput
            radius="full"
            size="sm"
            hourCycle={24}
            isRequired
            className="w-max"
          ></TimeInput>
        </div>
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full">
          <p className="w-max text-nowrap">สิ้นสุด</p>
          <DatePicker radius="full" size="sm" className="grow"></DatePicker>
          <TimeInput
            radius="full"
            size="sm"
            hourCycle={24}
            isRequired
            className="w-max"
          ></TimeInput>
        </div>

        <div className="w-full flex flex-col justify-center items-center  rounded-full">
          <p className="w-full flex bg-cozy-blue-light rounded-t-xl rounded-b-none p-1 justify-center items-center">
            เลือกตำแหน่งที่ต้องการจ้างงาน
          </p>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpafExmMIMHseDouY8V3pEJqjV0mr8VsR1dMo5ib9rm4uaCz5LiP8i0EEzo08H5Kr5xG0&usqp=CAU"
            alt="map"
            className="w-full h-40 object-cover"
          />
          <p className="w-full flex text-black text-wrap bg-white rounded-t-none rounded-b-xl p-1 ">
            99/1 ซอย8 หมู่4 ถนนเสนา บางนา บางนา กรุงเทพมหานคร 10200
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-bold gap-2">ความต้องการเพิ่มเติม</h3>
          <div className="text-black flex flex-col w-full h-full gap-2 bg-cozy-lightblue-light rounded-3xl p-2">
            <p>การจ้างงาน</p>
            <Select
              className="w-full"
              placeholder="สามารถเลือกได้มากกว่า 1 รายการ"
              selectionMode="multiple"
            >
              {employments.map((employment) => (
                <SelectItem key={employment.key}>{employment.label}</SelectItem>
              ))}
            </Select>
            <p className="w-full">ราคา</p>
            <Input
              className="w-full"
              placeholder="เช่น 800-1600บาท/วัน , 9000-15000บาท/เดือน, ไม่ระบุ"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-2 bg-[#1F5670] rounded-3xl p-2">
          <h4>ความสามารถเพิ่มเติม</h4>
          <Input className="" placeholder="เช่น ขับรถ(มีรถ) ทำอาหาร"></Input>
        </div>
      </div>
    </main>
  );
}
