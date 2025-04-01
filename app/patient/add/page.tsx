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
import { employments } from "@/app/caregiver/add/addMockCaregiver";
import { clientName } from "./addMockPatient";
import { AddCircle, ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { LocationOn, Edit } from "@mui/icons-material";

export default function Add() {
  const router = useRouter();
  useEffect(() => {
    document.title = "Patient Add - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
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
            เพิ่มข้อมูลผู้รับการดูแล
          </h1>
        </div>
        <div className="flex flex-col w-full md:w-[45%] lg:w-[50%] gap-1">
          <h2>เลือกบุคคลที่ต้องการรับการดูแล</h2>
          <Select className="w-full" placeholder="เลือกบุคคลที่คุณต้องการดูแล">
            {clientName.map((clientName) => (
              <SelectItem key={clientName.key}>
                {`${clientName.firstname} ${clientName.lastname}`}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Button endContent={<AddCircle />}>เพิ่มผู้รับการดูแล</Button>
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full md:w-[45%] lg:w-[50%]">
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
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full md:w-[45%] lg:w-[50%]">
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

        <div className="w-full flex flex-col justify-center items-center  rounded-full md:w-[45%] lg:w-[50%]">
          <p className="w-full flex bg-cozy-blue-light rounded-t-xl p-1 justify-between items-center px-4">
            <LocationOn style={{ width: "30px", height: "auto" }} />
            เลือกตำแหน่งที่ต้องการจ้างงาน
            <Edit style={{ width: "30px", height: "auto" }} />
          </p>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpafExmMIMHseDouY8V3pEJqjV0mr8VsR1dMo5ib9rm4uaCz5LiP8i0EEzo08H5Kr5xG0&usqp=CAU"
            alt="map"
            className="w-full h-40 object-cover"
          />
          <div className="w-full flex flex-wrap justify-center items-center text-black bg-white rounded-b-xl p-1 ">
            <p className="w-full flex-wrap px-4">
              99/1 ซอย8 หมู่4 ถนนเสนา บางนา บางนา กรุงเทพมหานคร 10200
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 md:w-[45%] lg:w-[50%]">
          <h3 className="font-bold gap-1">ความต้องการเพิ่มเติม</h3>
          <div className="text-black flex flex-col w-full  h-full gap-1 bg-cozy-lightblue-light rounded-2xl p-2">
            <p>ภาษาที่สื่อสารได้</p>
            <Input className="w-full" placeholder="เช่น ไทย อังกฤษ"></Input>
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
              placeholder="ระบุ (หรือไม่ระบุก็ได้)"
            ></Input>
            <h4>ความสามารถเพิ่มเติม</h4>
            <Input
              className=""
              placeholder="เช่น ขับรถ (มีรถ), ทำอาหาร"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-1 bg-[#1F5670] rounded-2xl p-2 md:w-[45%] lg:w-[50%]">
          <h4>สิ่งที่เพิ่มเติมให้</h4>
          <Input
            className=""
            placeholder="เช่น มีที่พักให้ มีมื้ออาหารให้"
          ></Input>
        </div>
        <Button
          radius="full"
          className="text-lg font-semibold bg-cozy-green-light px-16 lg:px-20"
        >
          ยืนยัน
        </Button>
      </div>
    </main>
  );
}
