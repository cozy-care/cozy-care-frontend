"use client";

import Footer from "@/components/Footer";
import { AddCircleOutline, FilterList } from "@mui/icons-material";
import { Input } from "@nextui-org/react";
import { FormEvent, useEffect, useState } from "react";
import CaregiverCard from "./CaregiverCardOld";

export default function Caregiver() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Caregiver - Cozy Care";
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
        <div className="ml-10 lg:ml-0 flex gap-1 lg:gap-4 py-6 w-full h-max  items-center">
          <button className="text-sm lg:text-medium flex  lg:justify-end  w-2/6 lg:w-1/4 gap-1 hover:text-blue-500">
            เพิ่มข้อมูลผู้ดูแล
            <AddCircleOutline className="mt-[8px] lg:mt-[2px] " />
            {/* <AddCircleOutline sx={{ marginTop: "2px" }} /> */}
          </button>

          <Input
            type="text"
            placeholder="ค้นหาผู้ดูแล"
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" w-full lg:w-1/2"
          />

          <button className="flex justify-start   w-1/4 hover:text-blue-500">
            <FilterList />
          </button>
        </div>

        <CaregiverCard
          name="หมอ 1"
          imgUrl="https://cdn-icons-png.flaticon.com/512/8496/8496122.png"
        />
        <CaregiverCard
          name="หมอ 2"
          imgUrl="https://cdn-icons-png.flaticon.com/512/2785/2785554.png"
        />
        <CaregiverCard
          name="หมอ 3"
          imgUrl="https://cdn-icons-png.flaticon.com/512/822/822111.png"
        />
      </div>

      <Footer />
    </main>
  );
}
