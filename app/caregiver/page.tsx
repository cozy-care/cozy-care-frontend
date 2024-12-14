'use client'

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import CaregiverCard from "./CaregiverCard";

// อย่าลืมเปลี่ยนชื่อ Function
export default function Caregiver() {

  // อย่าลืมเปลี่ยน Title
  useEffect(() => {
    document.title = "Caregiver - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center">
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
          Test
        </div>

        <div className="flex flex-col w-full items-center">
          <CaregiverCard name="John" profileURL="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/nurse.png" />
          <CaregiverCard name="John" profileURL="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/nurse.png" />
          <CaregiverCard name="John" profileURL="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/nurse.png" />
        </div>
      </div>

      <Footer />
    </main>
  )
}