"use client";

import NavBar from "@/components/NavBar";
import { Button, Form, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { Person, Email, Phone } from "@mui/icons-material";
import { Edit } from "@mui/icons-material"; // Import the pen icon
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ProfileEdit() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    alias: "",
    username: "",
    email: "",
    phone: "",
    profile_image: "",
  });

  useEffect(() => {
    document.title = "ProfileEdit - Cozy Care";
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
        withCredentials: true,
      });
      const userData = response.data;
      setFormData({
        alias: userData.alias,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        profile_image: userData.profile_image,
      });
      if (userData.profile_image) {
        const imageURL = `${process.env.NEXT_PUBLIC_API_URL}${userData.profile_image}`;
        setProfileImage(imageURL);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
      setSelectedFile(file);
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    let updatedProfile = ''
    try {
      if (selectedFile) {
        const formDataImage = new FormData();
        formDataImage.append("file", selectedFile);

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
          formDataImage,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        updatedProfile = response.data.filePath;
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        {
          alias: formData.alias,
          phone: formData.phone,
          profile_image: updatedProfile,
        },
        {
          withCredentials: true,
        }
      );

      Swal.fire({
        icon: "success",
        title: "เปลี่ยนแปลงข้อมูลสำเร็จ",
        text: "ระบบกำลังรีเฟรชหน้า...",
        confirmButtonText: "ตกลง",
      }).then(() => {
        window.location.reload(); // รีเฟรชหน้า
      });
    } catch (error) {
      console.error("Failed to update profile:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถอัปเดตโปรไฟล์ได้ กรุณาลองใหม่",
        confirmButtonText: "ตกลง",
      });
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold">แก้ไขโปรไฟล์</h1>
        <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]">
          <div
            className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-cozy-green-light cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-cozy-lightblue-light font-bold text-center">
                คลิกเพื่ออัปโหลดรูปภาพโปรไฟล์
              </span>
            )}
          </div>
          {/* Pen Icon Button */}
          <button
            className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Edit fontSize="small" /> {/* Pen icon from MUI */}
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <Form className="flex flex-col items-center gap-3 w-[350px] md:w-[400px] lg:w-[450px]">
          <Input
            isRequired
            id="alias"
            errorMessage="กรุณาใส่ชื่อ"
            label="นามแฝง"
            labelPlacement="outside"
            name="alias"
            placeholder="กรุณาใส่นามแฝง"
            type="text"
            value={formData.alias}
            onChange={(e) => handleInputChange("alias", e.target.value)}
            endContent={<Person />}
          />
          <Input
            className="opacity-50 pointer-events-none"
            isRequired
            id="username"
            errorMessage="กรุณาใส่ UserName"
            label="ชื่อผู้ใช้"
            labelPlacement="outside"
            name="username"
            placeholder="กรุณาใส่ชื่อผู้ใช้"
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            disabled
          />
          <Input
            className="opacity-50 pointer-events-none"
            isRequired
            id="email"
            errorMessage="กรุณาใส่อีเมล"
            label="อีเมล"
            labelPlacement="outside"
            name="email"
            placeholder="xxxxxx@gmail.com"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            endContent={<Email />}
            disabled
          />
          <Input
            isRequired
            id="phone"
            errorMessage="กรุณาใส่เบอร์โทรศัพท์"
            label="เบอร์โทรศัพท์"
            labelPlacement="outside"
            name="phone"
            placeholder="กรุณาใส่เบอร์โทรศัพท์"
            type="text"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            endContent={<Phone />}
          />
        </Form>
        <div className="flex flex-row gap-5 md:gap-6 lg:gap-7 mt-3 mb-5">
          <Button radius="full" className="font-bold md:w-[100px] lg:w-[120px]" onPress={() => router.back()} >
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