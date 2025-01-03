'use client';

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import CaregiverCard from "./CaregiverCard";
import { caregiverMock } from "./caregiverMock";

interface CaregiverData {
  user_id: string;
  firstname: string;
  lastname: string;
  expert: string;
  available_time: string;
  profile_image: string;
}

export default function Caregiver() {
  const [caregivers, setCaregivers] = useState<CaregiverData[]>([]);

  useEffect(() => {
    document.title = "Caregiver - Cozy Care";

    // Fetch caregiver data
    const fetchCaregivers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caregiver/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch caregivers");
        }
        const data = await response.json();
        setCaregivers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCaregivers();
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center mb-4">
        <div className="w-full h-max">
          <Image
            alt="Caregiver background image"
            src="https://bloximages.chicago2.vip.townnews.com/goskagit.com/content/tncms/assets/v3/editorial/1/7c/17c723ea-60fd-11ef-b85b-7b4fc4959607/66c7fd703b8c5.image.jpg?resize=1035%2C691"
            width="100%"
            height={150}
            radius="none"
            className="object-cover object-center"
          />
        </div>

        <div className="flex justify-center sticky top-[111px] w-full z-[99] transition bg-white dark:bg-cozy-background-dark">
          Search bar here
        </div>

        <div className="flex flex-col w-full items-center gap-4">
          {caregivers.map((data, index) => (
            <CaregiverCard
              key={index}
              user_id={data.user_id}
              name={`${data.firstname} ${data.lastname}`} // Full name
              imgUrl={data.profile_image} // Certification image as the profile image
              service={data.expert} // Service is the "expert" field
              skill="ขับรถ" // Fixed skill
              dateReady={data.available_time} // Available time
              distance={10} // Fixed distance
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
