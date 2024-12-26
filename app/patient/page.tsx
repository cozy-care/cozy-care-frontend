'use client';

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import { patientMock } from "./PatientMock";

interface PatientData {
  firstname: string;
  lastname: string;
  profile_image: string;
  type: string;
  con_disease: string;
  available_time: string;
}

export default function Patient() {
  const [patients, setPatients] = useState<PatientData[]>([]);

  useEffect(() => {
    document.title = "Patient - Cozy Care";

    // Fetch patient data from API
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/patient/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center mb-4">
        <div className="w-full h-max">
          <Image
            alt="Patient background image"
            src="https://modernformhealthcare.co.th/wp-content/uploads/2023/05/%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%84%E0%B8%99%E0%B9%84%E0%B8%82%E0%B9%89-3-%E0%B9%84%E0%B8%81%E0%B8%A3%E0%B9%8C-%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A.png"
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
          {patients.map((data, index) => (
            <PatientCard
              key={index}
              name={`${data.firstname} ${data.lastname}`} // Combine firstname and lastname
              imgUrl={data.profile_image} // Patient profile image
              serviceNeed={data.type} // Type of service needed
              skillNeed="ทำอาหาร" // Condition or default message
              dateReady={data.available_time} // Available time
              distance={5} // Fixed distance
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
