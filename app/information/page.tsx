"use client";

import Footer from "@/components/Footer";
import { AddCircleOutline, FilterList } from "@mui/icons-material";

import { FormEvent, useEffect, useState } from "react";

import { Input } from "@nextui-org/react";
export default function Caregiver() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Information - Cozy Care";
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  async function searchHandle(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData,
    // })
    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex flex-col items-center">
        <h1>ประชาสัมพันธ์</h1>
        <img
          src="https://www.azay.co.th/th_TH/life/senior/Soongwai/_jcr_content/root/parsys/stage_copy_copy/stageimage.img.82.3360.jpeg/1688548061915/soongwai-1520x510-26012021.jpeg"
          alt="news"
        />
      </div>
      <div className="flex gap-4 py-6 w-full h-max items-center justify-center">
        <Input
          type="text"
          placeholder="ค้นหาคำสำคัญ"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2"
        />

        <button className="flex  hover:text-blue-500">
          <FilterList />
        </button>
      </div>
      <Footer />
    </main>
  );
}
