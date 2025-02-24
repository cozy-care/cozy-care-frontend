"use client";
import dayjs from "dayjs";

import NavBar from "@/components/NavBar";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gender, typesPatient, physicalCondition } from "./patientIDMock";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// อย่าลืมเปลี่ยนชื่อ Function
export default function PatientDetail() {
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
    document.title = "PatientDetail - Cozy Care";
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
      <div className="grow flex flex-col justify-center items-center gap-3 ">
        <h1 className="font-bold">กรอกข้อมูลผู้รับการดูแล</h1>
        <div
          className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] bg-cozy-green-light rounded-2xl flex items-center justify-center cursor-pointer"
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

        <Form className="flex flex-col items-center gap-3 w-[350px]  md:w-[400px] lg:w-[450px]">
          <Input
            className=""
            isRequired
            id="fistName"
            errorMessage="กรุณาใส่ชื่อจริง"
            label="ชื่อจริง"
            labelPlacement="outside"
            name="fistName"
            placeholder="ชื่อจริง"
            type="text"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <Input
            className=""
            id="middleName"
            label="ชื่อกลาง"
            labelPlacement="outside"
            name="middleName"
            placeholder="ชื่อกลาง(ถ้ามี)"
            type="text"
            onChange={(e) => handleInputChange("middleName", e.target.value)}
          />

          <Input
            className=""
            isRequired
            id="lastname"
            errorMessage="กรุณาใส่นามสกุล"
            label="นามสกุล"
            labelPlacement="outside"
            name="lastname"
            placeholder="นามสกุล"
            type="text"
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
          <Select
            className=""
            isRequired
            items={gender}
            label="เพศสภาพ"
            labelPlacement="outside"
            placeholder="เพศ"
            onChange={(key) => handleInputChange("gender", key)}
          >
            {(gender) => <SelectItem>{gender.label}</SelectItem>}
          </Select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem label="วัน/เดือน/ปี ที่เกิด">
                <DatePicker defaultValue={dayjs()} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          {/* <DatePicker
            className=""
            isRequired
            labelPlacement="outside"
            label="วัน/เดือน/ปี ที่เกิด"
            onChange={(date) => handleInputChange("birthDate", date)}
          ></DatePicker> */}
          <div className="justify-center items-center flex gap-3 w-full">
            <Input
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">กก.</span>
                </div>
              }
              className=""
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
              className=""
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

        <Form>
          <h2 className="font-bold mt-5">
            รายละเอียดเพิ่มเติมของผู้รับการดูแล
          </h2>
          <div className="h-max w-[350px] md:w-[400px] lg:w-[450px] bg-[#C1E2F2] flex flex-col gap-3 items-center p-5 rounded-lg">
            <Select
              isRequired
              items={typesPatient}
              label="ประเภทของผู้ได้รับการดูแล"
              labelPlacement="outside"
              name="typeOfPatient"
              placeholder="ประเภทของผู้ได้รับการดูแล"
            >
              {(typesPatient) => <SelectItem>{typesPatient.label}</SelectItem>}
            </Select>

            <Select
              isRequired
              items={physicalCondition}
              label="สถาวะทางร่างกาย"
              labelPlacement="outside"
              name="physicalCondition"
              placeholder="สถาวะทางร่างกาย"
            >
              {(physicalCondition) => (
                <SelectItem>{physicalCondition.label}</SelectItem>
              )}
            </Select>

            <Input
              id="chronicDiseases"
              label="โรคประจำตัว"
              labelPlacement="outside"
              name="chronicDiseases"
              placeholder="โรคประจำตัว (ถ้ามี)"
              type="text"
            />
            <Input
              id="drugAllergyHistory"
              label="ประวัติการแพ้ยา"
              labelPlacement="outside"
              name="drugAllergyHistory"
              placeholder="ประวัติการแพ้ยา (ถ้ามี)"
              type="text"
            />
            <Input
              id="listOfRegularMedications"
              label="รายการยาที่ต้องใช้ประจำ"
              labelPlacement="outside"
              name="listOfRegularMedications"
              placeholder="รายการยาที่ต้องใช้ประจำ (ถ้ามี)"
              type="text"
            />
          </div>
        </Form>
        <div className="">
          <Checkbox
            defaultSelected
            radius="sm"
            onChange={(checked) => handleInputChange("agreed", checked)}
          >
            <span>
              ยอมรับเงื่อนไข และ
              <strong>
                <a href="#" className="font-bold">
                  นโยบายส่วนตัว(กดเพื่ออ่าน)
                </a>
              </strong>
            </span>
          </Checkbox>
        </div>
        <div className="flex flew-row gap-5 mt-3 mb-5">
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
