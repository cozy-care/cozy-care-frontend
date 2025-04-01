'use client';

import { Button, Link, Image, Spinner } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowBackIosNew, Verified } from '@mui/icons-material';
import axios from "axios";

// Define types
interface Caregiver {
  caregiverId: string;
  userId: string;
  fullname: string;
  sex: string;
  birthDate: string;
  weight: number;
  height: number;
  usedLanguage: string;
  experience: string;
  studyExperience: string;
  profileImage: string;
}

export default function Details() {
  const router = useRouter();
  const { id: chatId } = useParams() as { id: string };
  const [caregiver, setCaregiver] = useState<Caregiver | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate age from birth date
  const calculateAge = (birthDate: string) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  useEffect(() => {
    document.title = "Details - Cozy Care";

    const fetchCaregiverDetails = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getOtherBychatId/${chatId}`, {
          withCredentials: true,
        });

        setCaregiver({
          caregiverId: response.data.caregiver_id,
          userId: response.data.user_id,
          fullname: response.data.alias || "ไม่ทราบชื่อ",
          sex: response.data.sex || "ไม่ระบุ",
          birthDate: response.data.birth_date,
          weight: response.data.weight || 0,
          height: response.data.height || 0,
          usedLanguage: response.data.used_language || "ไม่ระบุ",
          experience: response.data.experience || "ไม่มีข้อมูล",
          studyExperience: response.data.study_experience || "ไม่มีข้อมูล",
          profileImage: response.data.profile_image || "https://www.civictheatre.ie/wp-content/uploads/2016/05/blank-profile-picture-973460_960_720.png",
        });
      } catch (err) {
        console.error("Error fetching caregiver details:", err);
        setError("ไม่สามารถโหลดข้อมูลผู้ดูแล");
      } finally {
        setLoading(false);
      }
    };

    fetchCaregiverDetails();
  }, [chatId]);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-3 w-full h-[50px]">
          <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
            <ArrowBackIosNew />
          </Button>
        </div>

        {/* Profile Section */}
        {loading ? (
          <Spinner className="mt-10" color="primary" />
        ) : error ? (
          <p className="text-red-500 mt-5">{error}</p>
        ) : (
          <div className="flex flex-col gap-4 items-center mt-5">
            <Image
              alt="Caregiver profile"
              className="w-[150px] aspect-square rounded-full overflow-hidden h-full object-cover object-center"
              src={caregiver?.profileImage}
            />
            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">{caregiver?.fullname}</p>
              <Verified className="text-cozy-green-light" />
            </div>
          </div>
        )}

        {/* Caregiver Details */}
        {!loading && !error && caregiver && (
          <div className="flex flex-col items-center gap-4 w-[90%] text-sm">
            <div className="flex flex-col w-full h-max p-3 gap-1 shadow-md rounded-xl">
              <div className="flex w-full">
                <p className="w-1/2">ชื่อ-สกุล : {caregiver.fullname}</p>
                <p className="w-1/2">ส่วนสูง : {caregiver.height.toFixed(1)} ซม.</p>
              </div>
              <div className="flex w-full">
                <p className="w-1/2">อายุ : {calculateAge(caregiver.birthDate)} ปี</p>
                <p className="w-1/2">น้ำหนัก : {caregiver.weight.toFixed(1)} กก.</p>
              </div>
              <div className="flex w-full">
                <p className="w-1/2">เพศ : {caregiver.sex}</p>
                <p className="w-1/2">ภาษาที่สื่อสารได้ : {caregiver.usedLanguage}</p>
              </div>
            </div>

            <div className="flex flex-col w-full h-max p-3 gap-1 shadow-md rounded-xl">
              <div className="flex w-full">
                <p className="w-[30%]">ประสบการณ์ :</p>
                <p className="w-[70%] text-pretty">{caregiver.experience}</p>
              </div>
              <div className="flex w-full">
                <p className="w-[30%]">การศึกษา :</p>
                <p className="w-[70%] text-pretty">{caregiver.studyExperience}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  );
}
