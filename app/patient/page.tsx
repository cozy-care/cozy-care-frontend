'use client'

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import PatientCard from "./PatientCard";
import { patientMock } from "./patientMock";

export default function Patient() {
  useEffect(() => {
    document.title = "Patient - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center">
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

        <div className="flex flex-col w-full items-center gap-4 my-4">
          {patientMock.map((data, index) => (
            <PatientCard
              key={index}
              name={data.name}
              imgUrl={data.imgUrl}
              serviceNeed={data.serviceNeed}
              skillNeed={data.skillNeed}
              dateReady={data.dateReady}
              distance={data.distance}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
