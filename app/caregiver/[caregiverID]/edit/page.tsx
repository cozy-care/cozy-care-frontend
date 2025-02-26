"use client";

import NavBar from "@/components/NavBar";
import {
  Button,
  Form,
  Input,
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
import { gender } from "../caregiverIDMock";

// Fetch authenticated user ID
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
  });
  const [originalData, setOriginalData] = useState({});
  const [isChanged, setIsChanged] = useState(false); // Track if changes are made

  useEffect(() => {
    document.title = "CaregiverDetail - Cozy Care";
    checkAuth(setUserId);
  }, []);

  // Fetch caregiver details when userId is available
  useEffect(() => {
    if (userId) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/caregiver/get-caregiver-details`, { user_id: userId })
        .then((response) => {
          setFormData(response.data);
          setOriginalData(response.data); // Store original data for comparison
        })
        .catch((error) => {
          console.error("Error fetching caregiver details:", error);
          Swal.fire("Error", "Failed to load caregiver details", "error");
        });
    }
  }, [userId]);

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    // Enable button only if data has changed
    setIsChanged(JSON.stringify({ ...formData, [key]: value }) !== JSON.stringify(originalData));
  };

  const handleSubmit = async () => {
    if (!userId) {
      Swal.fire("ข้อผิดพลาด", "กรุณาเข้าสู่ระบบก่อนสมัครเป็นผู้ดูแล", "error");
      return;
    }
  
    try {
      let filePath = formData.certification_image;
  
      // Ensure filePath is a File before uploading
      if (filePath) {
        const uploadData = new FormData();
        uploadData.append("file", filePath);
  
        const uploadResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
          uploadData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
  
        filePath = uploadResponse.data.filePath;
      }
  
      // Prepare the payload
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
        certification_image: filePath, // Use updated file path
      };

      console.log(payload)
  
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/caregiver/update-caregiver-details`,
        payload
      );
  
      Swal.fire({
        title: "บันทึกสำเร็จ",
        text: "ข้อมูลของคุณถูกอัปเดตเรียบร้อยแล้ว",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => {
        setIsChanged(false);
        setOriginalData(payload);
      });
    } catch (error) {
      console.error("Error updating caregiver details:", error);
      Swal.fire("ข้อผิดพลาด", "เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง", "error");
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col justify-center items-center gap-3 ">
        <h1 className="font-bold">แก้ไขข้อมูลผู้ดูแล</h1>
        <Form className="flex flex-col items-center gap-3 w-[350px] md:w-[400px] lg:w-[450px]">
        <Input
            isRequired
            label="ชื่อจริง"
            labelPlacement="outside"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
          <Input
            label="ชื่อกลาง"
            labelPlacement="outside"
            name="middlename"
            value={formData.middlename}
            onChange={(e) => handleInputChange("middlename", e.target.value)}
          />
          <Input
            isRequired
            label="นามสกุล"
            labelPlacement="outside"
            name="lastname"
            value={formData.lastname}
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
          <Select
            isRequired
            items={gender}
            label="เพศสภาพ"
            labelPlacement="outside"
            placeholder="เพศ"
            selectionMode="single"
            selectedKeys={new Set([formData.sex])}
            onSelectionChange={(key) => {
              const selectedKey = Array.from(key as Set<string>)[0];
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
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
            <Input
              isRequired
              label="ส่วนสูง"
              labelPlacement="outside"
              name="height"
              placeholder="(เช่น 165.75)"
              type="number"
              value={formData.height}
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
              value={formData.used_language}
              onChange={(e) => handleInputChange("used_language", e.target.value)}
            />
            <Input
              label="ประสบการณ์"
              labelPlacement="outside"
              name="experience"
              placeholder="(เช่น 5 ปี, เคยดูแลผู้ป่วยติดเตียง 3 ปี)"
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
            />
            <Input
              label="การศึกษาและการฝึกอบรม"
              labelPlacement="outside"
              name="study_experience"
              placeholder="(เช่น หลักสูตรอบรมการดูแลผู้สูงอายุ)"
              value={formData.study_experience}
              onChange={(e) => handleInputChange("study_experience", e.target.value)}
            />
            <div className="w-full">
              <label className="block font-medium text-sm">
                อัปโหลดใบรับรอง (PDF, JPG) *ชื่อไฟล์ต้องเป็นภาษาอังกฤษเท่านั้น
              </label>

              {/* Show the saved file path with option to upload a new one */}
              {typeof formData.certification_image === "string" && formData.certification_image !== "" ? (
                <div className="mt-1 flex flex-col gap-2">
                  <p className="text-sm text-gray-500">
                    ไฟล์ที่บันทึกไว้:{" "}
                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}${formData.certification_image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {formData.certification_image}
                    </a>
                  </p>

                  <Button
                    radius="full"
                    size="sm"
                    color="warning"
                    onClick={() => handleInputChange("certification_image", null)}
                  >
                    เปลี่ยนไฟล์ใหม่
                  </Button>
                </div>
              ) : (
                <Input
                  labelPlacement="outside"
                  type="file"
                  accept=".pdf, .jpg, .png"
                  onChange={(e) =>
                    handleInputChange("certification_image", e.target.files?.[0] || null)
                  }
                />
              )}
            </div>
          </div>
        </Form>

        <div className="flex gap-5 mt-3 mb-5">
          <Button radius="full" onClick={() => router.back()}>
            ยกเลิก
          </Button>
          <Button radius="full" color="primary" onClick={handleSubmit} disabled={!isChanged}>
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}
