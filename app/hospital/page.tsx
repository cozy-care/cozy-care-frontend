"use client";

import { Image, Input } from "@nextui-org/react";
import { Search } from "@mui/icons-material";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import InformationCard from "./hospitalCard";
import { informationMock } from "./hospitalMock";
import axios from "axios";

interface CaregiverInfo {
  title: string;
  imgUrl: string;
  mapUrl: string;
  type: string;
  expertise: string;
  phoneNumber: string;
}

const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

export default function Information() {
  const [searchTerm, setSearchTerm] = useState("");
  const [caregiverData, setCaregiverData] = useState<CaregiverInfo[]>([]);

  useEffect(() => {
    document.title = "Information - Cozy Care";

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sheetbest.com/sheets/275dd793-b5af-46d0-8c9e-2450cdbe35ba"
        );
        const data: CaregiverInfo[] = response.data;

        // เช็กว่ารูปใช้ได้ก่อน แล้วค่อย set
        const validData = await Promise.all(
          data.map(async (item) => {
            const isImageValid = await checkImageExists(item.imgUrl);
            return isImageValid ? item : null;
          })
        );

        // กรอง null ออก
        setCaregiverData(validData.filter((item) => item !== null) as CaregiverInfo[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCaregivers = caregiverData.filter((data) =>
    data.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className=" w-full h-max">
        <Image
          alt="Information background image"
          src="https://mpics.mgronline.com/pics/Images/566000009044501.JPEG"
          width="100%"
          height={150}
          radius="none"
          className="object-cover object-center"
        />
      </div>

      <div className="flex justify-center sticky top-[111px] w-full z-[99] transition bg-white dark:bg-cozy-background-dark mt-4 mb-4">
        <Input
          placeholder="ค้นหาโรงพยาบาล"
          size="sm"
          value={searchTerm}
          onValueChange={setSearchTerm}
          isClearable
          startContent={
            <Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          className="w-full max-w-[600px] px-4"
        />
      </div>

      <div className="flex flex-col w-full items-center gap-2">
        {filteredCaregivers.map((data, index) => (
          <InformationCard
            key={index}
            title={data.title}
            imgUrl={data.imgUrl}
            mapUrl={data.mapUrl}
            type={data.type}
            expertise={data.expertise}
            phoneNumber={data.phoneNumber}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}