"use client";

import NavBar from "@/components/NavBar";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gender } from "./caregiverIDMock";

// อย่าลืมเปลี่ยนชื่อ Function
export default function CaregiverDetail() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    password: "",
    gender: "",
    birthDate: "",
    weight: "",
    height: "",
    language: "",
    experience: "",
    educationAndTraining: "",
    certificate: null,
    agreed: false,
  });

  // อย่าลืมเปลี่ยน Title
  useEffect(() => {
    document.title = "CaregiverDetail - Cozy Care";
  }, []);

  const handleProfileImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // รวมข้อมูลทั้งหมดที่ต้องการบันทึก
    const dataToSave = {
      ...formData,
      profileImage, // รูปโปรไฟล์ที่อัปโหลด
    };

    console.log("บันทึกข้อมูล:", dataToSave);
  };
  return (
    //<main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col items-center gap-3 lg:w-[1025px] lg:mx-auto">
        <h1 className="font-bold">กรอกข้อมูลผู้ดูแล</h1>
        <div
          className="w-[150px] h-[150px] bg-cozy-green-light rounded-2xl flex items-center justify-center cursor-pointer"
          onClick={handleProfileImageUpload}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <span className="text-cozy-lightblue-light font-bold text-center">
              คลิกเพื่ออัปโหลดรูปภาพ
            </span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <Form className=" justify-center items-center">
          <div className="flex flex-row gap-3">
            <Input
              isRequired
              id="fistName"
              errorMessage="กรุณาใส่ชื่อจริง"
              label="ชื่อจริง"
              labelPlacement="outside"
              name="ชื่อจริง"
              placeholder="ชื่อจริง"
              type="text"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
            <Input
              id="middleName"
              label="ชื่อกลาง"
              labelPlacement="outside"
              name="middleName"
              placeholder="ชื่อกลาง(ถ้ามี)"
              type="text"
              onChange={(e) => handleInputChange("middleName", e.target.value)}
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
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-3">
            <Select
              className="w-[190px]"
              isRequired
              items={gender}
              label="เพศสภาพ"
              labelPlacement="outside"
              placeholder="เพศ"
              onChange={(key) => handleInputChange("gender", key)}
            >
              {(gender) => <SelectItem>{gender.label}</SelectItem>}
            </Select>
            <DatePicker
              isRequired
              labelPlacement="outside"
              className="w-[200px]"
              label="วัน/เดือน/ปี ที่เกิด"
              onChange={(date) => handleInputChange("birthDate", date)}
            ></DatePicker>
            <Input
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">กก.</span>
                </div>
              }
              className="w-[90px]"
              isRequired
              id="weight"
              label="น้ำหนัก"
              labelPlacement="outside"
              name="weight"
              placeholder="xxx"
              type="number"
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
            <Input
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">กก.</span>
                </div>
              }
              className="w-[90px]"
              isRequired
              id="height"
              label="ส่วนสูง"
              labelPlacement="outside"
              name="height"
              placeholder="xxx"
              type="number"
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </div>
        </Form>

        <Form className="justify-start">
          <h2 className="font-bold ml-5 mt-5">รายละเอียดเพิ่มเติมของผู้ดูแล</h2>
          <div className="h-[350px] w-[650px] bg-cozy-blue-dark flex flex-col gap-3 justify-center items-center p-5 rounded-lg">
            <Input
              id="language"
              label="ภาษาที่สื่อสารได้"
              labelPlacement="outside"
              name="language"
              placeholder="เขียนความเชี่ยวชาญของคุณ (ถ้ามี)"
              type="text"
              onChange={(e) => handleInputChange("language", e.target.value)}
            />
            <Input
              id="experience"
              label="ประสบการณ์"
              labelPlacement="outside"
              name="experience"
              placeholder="เขียนประสบการณ์ของคุณ (ถ้ามี)"
              type="text"
              onChange={(e) => handleInputChange("experience", e.target.value)}
            />
            <Input
              id="educationAndTraining"
              label="การศึกษาและการฝึกอบรม"
              labelPlacement="outside"
              name="educationAndTraining"
              placeholder="การศึกษาและการฝึกอบรม (ถ้ามี)"
              type="text"
              onChange={(e) =>
                handleInputChange("educationAndTraining", e.target.value)
              }
            />
            <Input
              id="Certificate"
              label="ใบรังรองการประกอบวิชาชีพพยาบาล พร้อมลงนาม *"
              labelPlacement="outside"
              name="Certificate"
              placeholder="อัพโหลดไฟล์ของคุณ (pdf)"
              type="file"
              onChange={(e) =>
                handleInputChange("certificate", e.target.files?.[0] || null)
              }
            />
          </div>
        </Form>
        <div className="mt-5">
          <Checkbox
            defaultSelected
            radius="sm"
            onChange={(checked) => handleInputChange("agreed", checked)}
          >
            ยอมรับเงื่อนไข
            และนโยบายส่วนตัว.........................................
          </Checkbox>
        </div>
        <div className="flex flew-row gap-5 mt-5 ">
          <Button
            radius="full"
            className="font-bold"
            // onPress={handleSave}
          >
            ยกเลิก
          </Button>
          <Button
            radius="full"
            color="primary"
            className="font-bold"
            onPress={handleSave}
          >
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}
