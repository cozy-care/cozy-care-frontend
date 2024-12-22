"use client";

import Footer from "@/components/Footer";
import { FormEvent, useEffect, useState } from "react";
import { AddCircleOutline, FilterList } from "@mui/icons-material";
import { Input } from "@nextui-org/react";
import PatientCard from "./PatientCard";

export default function Patient() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Patient - Cozy Care";
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
        <div className="ml-10 lg:ml-0  flex gap-1 lg:gap-4 py-6 w-full h-max  items-center">
          <button className="text-sm lg:text-medium flex  lg:justify-end  w-2/5 lg:w-1/4 gap-1 hover:text-blue-500">
            เพิ่มข้อมูลผู้รับการดูแล
            <AddCircleOutline className="mt-[8px] lg:mt-[2px] " />
            {/* <AddCircleOutline sx={{ marginTop: "2px" }} /> */}
          </button>

          <Input
            type="text"
            placeholder="ค้นหาผู้รับการดูแล"
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" w-full lg:w-1/2"
          />

          <button className="flex justify-start   w-1/4 hover:text-blue-500">
            <FilterList />
          </button>
        </div>

        <PatientCard
          name="คนป่วย 1"
          imgUrl="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
        />
        <PatientCard
          name="คนป่วย 2"
          imgUrl="https://cdn-icons-png.flaticon.com/512/2621/2621786.png"
        />
        <PatientCard
          name="คนป่วย 3"
          imgUrl="https://cdn-icons-png.freepik.com/512/7031/7031048.png"
        />
      </div>

      <Footer />
    </main>
  );
}
