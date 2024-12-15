'use client'

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import CaregiverCard from "./CaregiverCard";

interface CaregiverCard {
  name?: string;
  profileURL?: string;
  service?: string;
  skill?: string;
  dateReady?: string;
  distance?: number;
}

export const caregiverMock: CaregiverCard[] = [
  {
    name: "Alice Johnson",
    profileURL: "/alice-johnson-profile.png",
    service: "Elderly Care",
    skill: "Companionship",
    dateReady: "2024-12-20",
    distance: 5,
  },
  {
    name: "Bob Smith",
    profileURL: "/bob-smith-profile.png",
    service: "Child Care",
    skill: "Teaching Assistance",
    dateReady: "2024-12-18",
    distance: 10,
  },
  {
    name: "Charlie Brown",
    profileURL: "/charlie-brown-profile.png",
    service: "Disability Support",
    skill: "Sign Language",
    dateReady: "2024-12-15",
    distance: 3,
  },
  {
    name: "Daisy Green",
    profileURL: "/daisy-green-profile.png",
    service: "Nursing Care",
    skill: "Medication Management",
    dateReady: "2024-12-22",
    distance: 7,
  },
  {
    name: "Ethan Wright",
    profileURL: "/ethan-wright-profile.png",
    service: "Mental Health Support",
    skill: "Counseling",
    dateReady: "2024-12-17",
    distance: 8,
  },
];

export default function Caregiver() {

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

        <div className="flex justify-center sticky top-[111px] w-full z-[99] bg-white dark:bg-cozy-background-dark">
          Search bar here
        </div>

        <div className="flex flex-col w-full items-center gap-4 my-4">
          {caregiverMock.map((data, index) => (
            <CaregiverCard
              key={index}
              name={data.name}
              profileURL = {data.profileURL}
              service = {data.service}
              skill = {data.skill}
              dateReady = {data.dateReady}
              distance = {data.distance}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}