"use client";
import dayjs from "dayjs";
import NavBar from "@/components/NavBar";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { gender, typesPatient, physicalCondition } from "../patientIDMock";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter, usePathname } from "next/navigation";

async function checkAuth(setUserId: (id: string) => void): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      { withCredentials: true }
    );
    setUserId(response.data.user_id); // Store the userID in state
  } catch (error) {
    console.log("User not logged in or authentication failed.");
  }
}

export default function PatientDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [subClientId, setSubClientId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<{ [key: string]: any }>({
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    birth_date: dayjs().format("YYYY-MM-DD"),
    weight: "",
    height: "",
    client_type: "",
    phy_con: "",
    con_dis: "",
    drug_all: "",
    drug_used: "",
    is_term: true,
    profile_image: "",
  });

  useEffect(() => {
    document.title = "PatientDetail - Cozy Care";

    // ดึง sub_client_id จาก URL
    const pathParts = pathname.split("/");
    const sub_client_id = pathParts[pathParts.length - 2]; // ดึงค่าจาก URL `/patient/{sub_client_id}/edit`

    if (sub_client_id) {
      setSubClientId(sub_client_id);
      fetchSubClientDetails(sub_client_id);
    }

    checkAuth(setUserId);
  }, []);

  // ฟังก์ชันดึงข้อมูล SubClient เพื่อนำมาเติมใน Form
  const fetchSubClientDetails = async (id: string) => {
    let profile_img = ""
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/client/get-sub-client-details`,
        { sub_client_id: id }
      );
      const data = response.data.subClient;

      setFormData({
        firstname: data.firstname,
        middlename: data.middlename || "",
        lastname: data.lastname,
        sex: data.sex,
        birth_date: data.birth_date,
        weight: data.weight,
        height: data.height,
        client_type: data.client_type,
        phy_con: data.phy_con,
        con_dis: data.con_dis || "",
        drug_all: data.drug_all || "",
        drug_used: data.drug_used || "",
        is_term: data.is_term,
        profile_image: data.profile_image || "",
      });

      profile_img = `${process.env.NEXT_PUBLIC_API_URL}${data.profile_image}`;
      setProfileImage(profile_img);
    } catch (error) {
      console.error("Error fetching SubClient details:", error);
    }
  };

  const handleProfileImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (key: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const handleSave = async () => {
    const requiredFields = ["firstname", "lastname", "sex", "client_type", "phy_con"];
    const newErrors: Record<string, boolean> = {};
    let firstErrorField: string | null = null;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        if (!firstErrorField) {
          firstErrorField = field;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }

    try {
      let imgPath = formData.profile_image;
      if (selectedFile) {
        const uploadForm = new FormData();
        uploadForm.append("file", selectedFile);

        const uploadRes = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
          uploadForm
        );

        imgPath = uploadRes.data.filePath;
      }

      const dataToSave = {
        ...formData,
        profile_image: imgPath,
        sub_client_id: subClientId,
      };
      console.log(dataToSave);

      // เรียก API สำหรับอัปเดตข้อมูล SubClient
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/client/update-sub-client-details`,
        dataToSave
      );

      Swal.fire({
        icon: "success",
        title: "อัปเดตข้อมูลสำเร็จ",
        text: "ข้อมูลของคุณถูกบันทึกเรียบร้อย",
        confirmButtonText: "ตกลง",
      }).then(() => {
        router.push(`/profile/${userId}/client`);
      });
    } catch (error) {
      console.error("❌ เกิดข้อผิดพลาด:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่",
        confirmButtonText: "ตกลง",
      });
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col justify-center items-center gap-3 ">
        <h1 className="font-bold">แก้ไขข้อมูลผู้รับการดูแล</h1>
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
              คลิกเพื่ออัปโหลดรูปภาพผู้รับการดูแล
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

        {/* ✅ ฟอร์มกรอกข้อมูล */}
        <div className="flex flex-col items-center gap-3 w-[350px] md:w-[400px] lg:w-[450px]">
          <Input
            isRequired
            labelPlacement="outside"
            label="ชื่อจริง"
            name="firstname"
            placeholder="ชื่อจริง"
            type="text"
            value={formData.firstname} 
            className={errors.firstname ? "border-red-500" : ""}
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
          <Input
            labelPlacement="outside"
            label="ชื่อกลาง"
            name="middlename"
            placeholder="ชื่อกลาง (ถ้ามี)"
            type="text"
            value={formData.middlename} 
            onChange={(e) => handleInputChange("middlename", e.target.value)}
          />
          <Input
            isRequired
            labelPlacement="outside"
            label="นามสกุล"
            name="lastname"
            placeholder="นามสกุล"
            type="text"
            value={formData.lastname} 
            className={errors.lastname ? "border-red-500" : ""}
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />

          {/* ✅ Select เพศ */}
          <Select
            isRequired
            labelPlacement="outside"
            items={gender}
            label="เพศ"
            placeholder="เลือกเพศ"
            className={errors.sex ? "border-red-500" : ""}
            selectedKeys={formData.sex ? new Set([formData.sex]) : new Set()} // 👈 กำหนดค่าที่เลือก
            onSelectionChange={(selectedKey) => {
              const key = Array.from(selectedKey as Set<string>)[0]; // ดึงค่า key ออกมา
              const selectedLabel = gender.find((g) => g.key === key)?.label || "";
              handleInputChange("sex", key); // 👈 เปลี่ยนจาก selectedLabel เป็น key เพื่อให้ทำงานได้ถูกต้อง
            }}
          >
            {(gender) => <SelectItem key={gender.key}>{gender.label}</SelectItem>}
          </Select>

          {/* ✅ Date Picker วันเกิด */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="วัน/เดือน/ปี ที่เกิด"
              value={dayjs(formData.birth_date)} 
              onChange={(date) =>
                handleInputChange("birth_date", dayjs(date).format("YYYY-MM-DD"))
              }
            />
          </LocalizationProvider>

          {/* ✅ Input น้ำหนักและส่วนสูง */}
          <div className="flex gap-3 w-full">
            <Input
              labelPlacement="outside"
              label="น้ำหนัก (kg)"
              type="number"
              placeholder="(เช่น 55.50)"
              value={formData.weight} 
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
            <Input
              labelPlacement="outside"
              label="ส่วนสูง (cm)"
              type="number"
              placeholder="(เช่น 165.75)"
              value={formData.height} 
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </div>
        </div>

        {/* ✅ รายละเอียดเพิ่มเติม */}
        <div className="w-[350px] md:w-[400px] lg:w-[450px] bg-[#C1E2F2] flex flex-col gap-3 items-center p-5 rounded-lg">
          <Select
            labelPlacement="outside"
            isRequired
            items={typesPatient}
            label="ประเภทของผู้ได้รับการดูแล"
            placeholder="เลือกประเภท"
            selectedKeys={formData.client_type ? new Set([formData.client_type]) : new Set()} // ✅ ใช้ selectedKeys แทน value
            className={errors.client_type ? "border-red-500" : ""}
            onSelectionChange={(selectedKey) => {
              const key = Array.from(selectedKey as Set<string>)[0];
              handleInputChange("client_type", key); // ✅ บันทึก key ไม่ใช่ label
            }}
          >
            {(typesPatient) => <SelectItem key={typesPatient.key}>{typesPatient.label}</SelectItem>}
          </Select>

          <Select
            labelPlacement="outside"
            isRequired
            items={physicalCondition}
            label="สภาวะทางร่างกาย"
            placeholder="เลือกสภาวะ"
            selectedKeys={formData.phy_con ? new Set([formData.phy_con]) : new Set()} // ✅ ใช้ selectedKeys แทน value
            className={errors.phy_con ? "border-red-500" : ""}
            onSelectionChange={(selectedKey) => {
              const key = Array.from(selectedKey as Set<string>)[0];
              handleInputChange("phy_con", key); // ✅ บันทึก key ไม่ใช่ label
            }}
          >
            {(physicalCondition) => <SelectItem key={physicalCondition.key}>{physicalCondition.label}</SelectItem>}
          </Select>

          <Input
            labelPlacement="outside"
            label="โรคประจำตัว"
            placeholder="โรคประจำตัว (ถ้ามี)"
            type="text"
            value={formData.con_dis} 
            onChange={(e) => handleInputChange("con_dis", e.target.value)}
          />
          <Input
            labelPlacement="outside"
            label="ประวัติการแพ้ยา"
            placeholder="ประวัติการแพ้ยา (ถ้ามี)"
            type="text"
            value={formData.drug_all} 
            onChange={(e) => handleInputChange("drug_all", e.target.value)}
          />
          <Input
            labelPlacement="outside"
            label="รายการยาที่ต้องใช้ประจำ"
            placeholder="รายการยา (ถ้ามี)"
            type="text"
            value={formData.drug_used} 
            onChange={(e) => handleInputChange("drug_used", e.target.value)}
          />
        </div>

        {/* ✅ ปุ่มบันทึก */}
        <div className="flex gap-5 mt-3 mb-5">
          <Button radius="full" onPress={() => router.back()}>ยกเลิก</Button>
          <Button radius="full" color="primary" onPress={handleSave}>
            บันทึก
          </Button>
        </div>
      </div>
    </main>
  );
}