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
import { useCallback, useEffect, useRef, useState } from "react";

// Gender options
export const genderOptions = [
  { key: "man", label: "ผู้ชาย" },
  { key: "woman", label: "ผู้หญิง" },
];

// Define the type for formData
interface FormData {
  firstName: string;
  middleName: string;
  password: string;
  gender: string;
  birthDate: string;
  weight: string;
  height: string;
  language: string;
  experience: string;
  educationAndTraining: string;
  certificate: File | null;
  agreed: boolean;
}

// Main Component
export default function CaregiverDetail() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
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

  useEffect(() => {
    document.title = "CaregiverDetail - Cozy Care";
  }, []);

  const handleProfileImageUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setProfileImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleInputChange = useCallback((key: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSave = useCallback(() => {
    if (!formData.agreed) {
      alert("กรุณายอมรับเงื่อนไขก่อนบันทึกข้อมูล");
      return;
    }

    const dataToSave = {
      ...formData,
      profileImage,
    };

    console.log("บันทึกข้อมูล:", dataToSave);
    alert("ข้อมูลถูกบันทึกเรียบร้อย!");
  }, [formData, profileImage]);

  return (
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
              id="firstName"
              errorMessage="กรุณาใส่ชื่อจริง"
              label="ชื่อจริง"
              labelPlacement="outside"
              placeholder="ชื่อจริง"
              type="text"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
            <Input
              id="middleName"
              label="ชื่อกลาง"
              labelPlacement="outside"
              placeholder="ชื่อกลาง (ถ้ามี)"
              type="text"
              onChange={(e) => handleInputChange("middleName", e.target.value)}
            />
            <Input
              isRequired
              id="password"
              errorMessage="กรุณาใส่รหัสผ่าน"
              label="รหัสผ่าน"
              labelPlacement="outside"
              placeholder="Password"
              type="password"
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-3">
            <Select
              className="w-[190px]"
              isRequired
              items={genderOptions}
              label="เพศสภาพ"
              labelPlacement="outside"
              placeholder="เพศ"
              onChange={(key) => handleInputChange("gender", key)}
            >
              {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>
            <DatePicker
              isRequired
              labelPlacement="outside"
              className="w-[200px]"
              label="วัน/เดือน/ปี ที่เกิด"
              onChange={(date) => handleInputChange("birthDate", date)}
            />
            <Input
              isRequired
              id="weight"
              label="น้ำหนัก (กก.)"
              labelPlacement="outside"
              placeholder="xxx"
              type="number"
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
            <Input
              isRequired
              id="height"
              label="ส่วนสูง (ซม.)"
              labelPlacement="outside"
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
              placeholder="ภาษา"
              type="text"
              onChange={(e) => handleInputChange("language", e.target.value)}
            />
            <Input
              id="experience"
              label="ประสบการณ์"
              labelPlacement="outside"
              placeholder="เขียนประสบการณ์ของคุณ (ถ้ามี)"
              type="text"
              onChange={(e) => handleInputChange("experience", e.target.value)}
            />
            <Input
              id="educationAndTraining"
              label="การศึกษาและการฝึกอบรม"
              labelPlacement="outside"
              placeholder="การศึกษาและการฝึกอบรม (ถ้ามี)"
              type="text"
              onChange={(e) =>
                handleInputChange("educationAndTraining", e.target.value)
              }
            />
            <Input
              id="certificate"
              label="อัปโหลดใบรับรอง (PDF)"
              labelPlacement="outside"
              type="file"
              onChange={(e) =>
                handleInputChange("certificate", e.target.files?.[0] || null)
              }
            />
          </div>
        </Form>
        <div className="mt-5">
          <Checkbox
            defaultSelected={formData.agreed}
            radius="sm"
            onChange={(checked) => handleInputChange("agreed", checked)}
          >
            ยอมรับเงื่อนไขและนโยบายส่วนตัว
          </Checkbox>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <Button className="font-bold">ยกเลิก</Button>
          <Button
            className="bg-cozy-green-light text-cozy-lightblue-light font-bold"
            onClick={handleSave}
          >
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}
