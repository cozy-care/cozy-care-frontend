"use client";

import NavBar from "@/components/NavBar";
import { Button, Form, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { Person, Email, Phone } from "@mui/icons-material";
// อย่าลืมเปลี่ยนชื่อ Function
export default function ProfileEdit() {
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
    document.title = "ProfileEdit - Cozy Care";
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
        <h1 className="font-bold">แก้ไขโปรไฟล์</h1>
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
        <Form className="flex  items-center gap-3 w-[350px] md:w-[400px] lg:w-[450px] ">
          <Input
            className=""
            isRequired
            id="name"
            errorMessage="กรุณาใส่ชื่อ"
            label="นามแผง"
            labelPlacement="outside"
            name="name"
            placeholder="กรุณาใส่นามแฝง"
            type="text"
            onChange={(e) => handleInputChange("name", e.target.value)}
            endContent={<Person />}
          />
          <Input
            className=""
            isRequired
            id="username"
            errorMessage="กรุณาใส่ UserName"
            label="ชื่อผู้ใช้"
            labelPlacement="outside"
            name="username"
            placeholder="กรุณาใส่ชื่อผู้ใช้"
            type="text"
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <Input
            className=""
            isRequired
            id="email"
            errorMessage="กรุณาใส่อีเมล"
            label="อีเมล"
            labelPlacement="outside"
            name="email"
            placeholder="xxxxxx@gmail.com"
            type="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            endContent={<Email />}
          />
          <Input
            className=""
            isRequired
            id="phone_number"
            errorMessage="กรุณาใส่เบอร์โทรศัพท์"
            label="เบอร์โทรศัพท์"
            labelPlacement="outside"
            name="fistName"
            placeholder="กรุณาใส่เบอร์โทรศัพท์"
            type="text"
            onChange={(e) => handleInputChange("phone_number", e.target.value)}
            endContent={<Phone />}
          />
        </Form>
        <div className="flex flew-row gap-5 md:gap-6 lg:gap-7 mt-3 mb-5 ">
          <Button
            radius="full"
            className="font-bold md:w-[100px] lg:w-[120px] "
            // onPress={handleSave}
          >
            ยกเลิก
          </Button>
          <Button
            radius="full"
            color="primary"
            className="font-bold md:w-[100px] lg:w-[120px]"
            onPress={handleSave}
          >
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}
