"use client";

import NavBar from "@/components/NavBar";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { gender } from "./caregiverIDMock";

// ฟังก์ชันดึงข้อมูล User ID
async function checkAuth(setUserId: (id: string) => void): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      { withCredentials: true }
    );
    setUserId(response.data.user_id);
  } catch (error) {
    console.log("User not logged in or authentication failed.");
  }
}

export default function CaregiverDetail() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    birth_date: dayjs().format("YYYY-MM-DD"),
    weight: "",
    height: "",
    used_language: "",
    experience: "",
    study_experience: "",
    certification_image: null,
    is_term: true,
  });

  useEffect(() => {
    document.title = "CaregiverDetail - Cozy Care";
    checkAuth(setUserId);
  }, []);

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!userId) {
      Swal.fire("ข้อผิดพลาด", "กรุณาเข้าสู่ระบบก่อนสมัครเป็นผู้ดูแล", "error");
      return;
    }

    try {
      let filePath = null;

      // If a file is selected, upload it first
      if (formData.certification_image) {
        const uploadData = new FormData();
        uploadData.append("file", formData.certification_image);
  
        const uploadResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
          uploadData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
  
        filePath = uploadResponse.data.filePath;
      }
  
      // Prepare the payload without the raw file object
      const payload = {
        user_id: userId,
        firstname: formData.firstname,
        middlename: formData.middlename,
        lastname: formData.lastname,
        sex: formData.sex,
        birth_date: formData.birth_date,
        weight: formData.weight,
        height: formData.height,
        used_language: formData.used_language,
        experience: formData.experience,
        study_experience: formData.study_experience,
        certification_image: filePath, // Use the uploaded file path
        is_term: formData.is_term,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/caregiver/create-caregiver`,
        payload
      );

      Swal.fire({
        title: "สมัครเป็นผู้ดูแลสำเร็จแล้ว",
        text: "ข้อมูลของคุณถูกบันทึกเรียบร้อย",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => {
        router.push(`/profile/${userId}`);
      });
    } catch (error) {
      console.error("Error submitting caregiver form:", error);
      Swal.fire(
        "ข้อผิดพลาด",
        "เกิดข้อผิดพลาดในการสมัครเป็นผู้ดูแล โปรดลองใหม่อีกครั้ง",
        "error"
      );
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col justify-center items-center gap-3 ">
        <h1 className="font-bold">กรอกข้อมูลผู้ดูแล</h1>
        <Form className="flex flex-col items-center gap-3 w-[350px] md:w-[400px] lg:w-[450px]">
          <Input
            isRequired
            label="ชื่อจริง"
            labelPlacement="outside"
            name="firstname"
            placeholder="ชื่อจริง"
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
          <Input
            label="ชื่อกลาง"
            labelPlacement="outside"
            name="middlename"
            placeholder="ชื่อกลาง (ถ้ามี)"
            onChange={(e) => handleInputChange("middlename", e.target.value)}
          />
          <Input
            isRequired
            label="นามสกุล"
            labelPlacement="outside"
            name="lastname"
            placeholder="นามสกุล"
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
          <Select
            isRequired
            items={gender}
            label="เพศสภาพ"
            labelPlacement="outside"
            placeholder="เพศ"
            selectionMode="single" // Ensure only one item is selected
            onSelectionChange={(key) => {
              const selectedKey = Array.from(key as Set<string>)[0]; // Extract the string value
              handleInputChange("sex", selectedKey);
            }}
          >
            {(genderItem) => (
              <SelectItem key={genderItem.key} value={genderItem.key}>
                {genderItem.label}
              </SelectItem>
            )}
          </Select>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="วัน/เดือน/ปี ที่เกิด"
              value={dayjs(formData.birth_date)}
              onChange={(date) => handleInputChange("birth_date", date?.format("YYYY-MM-DD"))}
            />
          </LocalizationProvider>

          <div className="flex gap-3 w-full">
            <Input
              isRequired
              label="น้ำหนัก"
              labelPlacement="outside"
              name="weight"
              placeholder="(เช่น 55.50)"
              type="number"
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
            <Input
              isRequired
              label="ส่วนสูง"
              labelPlacement="outside"
              name="height"
              placeholder="(เช่น 165.75)"
              type="number"
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </div>
        </Form>

        <Form>
          <h2 className="font-bold mt-5">รายละเอียดเพิ่มเติมของผู้ดูแล</h2>
          <div className="bg-[#C1E2F2] flex flex-col gap-3 p-5 rounded-lg">
            <Input
              label="ภาษาที่สื่อสารได้"
              labelPlacement="outside"
              name="used_language"
              placeholder="(เช่น ไทย, อังกฤษ, จีน)"
              onChange={(e) => handleInputChange("used_language", e.target.value)}
            />
            <Input
              label="ประสบการณ์"
              labelPlacement="outside"
              name="experience"
              placeholder="(เช่น 5 ปี, เคยดูแลผู้ป่วยติดเตียง 3 ปี)"
              onChange={(e) => handleInputChange("experience", e.target.value)}
            />
            <Input
              label="การศึกษาและการฝึกอบรม"
              labelPlacement="outside"
              name="study_experience"
              placeholder="(เช่น หลักสูตรอบรมการดูแลผู้สูงอายุ)"
              onChange={(e) => handleInputChange("study_experience", e.target.value)}
            />
            <Input
              label="อัปโหลดใบรับรอง (PDF, JPG) *ชื่อไฟล์ต้องเป็นภาษาอังกฤษเท่านั้น"
              labelPlacement="outside"
              name="certification_image"
              type="file"
              onChange={(e) =>
                handleInputChange("certification_image", e.target.files?.[0] || null)
              }
            />
          </div>
        </Form>

        <Checkbox
          onChange={(e) => {
            const checked = e.target.checked;
            setIsChecked(checked); // Update button state
            handleInputChange("is_term", checked);
          }}
        >
          <span>
            ยอมรับเงื่อนไข และ
            <Link href="/profile/privacy_and_security/privacy" className="text-blue-500 underline">
              นโยบายส่วนตัว
            </Link>
          </span>
        </Checkbox>

        <div className="flex gap-5 mt-3 mb-5">
          <Button radius="full" onClick={() => router.back()}>
            ยกเลิก
          </Button>
          <Button radius="full" color="primary" onClick={handleSubmit} disabled={!isChecked}>
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}
