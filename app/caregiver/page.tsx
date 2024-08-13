'use client'

import Footer from "@/components/Footer";
import { AddCircleOutline, FilterList } from "@mui/icons-material";
import { Input } from "@nextui-org/react";
import { FormEvent, useEffect, useState } from "react";
import CaregiverCard from "./CaregiverCard";

export default function Caregiver() {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        document.title = "Caregiver - Cozy Care";
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchTerm)
            // Send Axios request here
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

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
                <div className="flex gap-4 py-6 w-full h-max items-center">
                    <button className="flex justify-end w-1/4 gap-1 hover:text-blue-500">
                        เพิ่มข้อมูลผู้ดูแล
                        <AddCircleOutline sx={{ marginTop: '2px' }} />
                    </button>

                    <Input type="text" placeholder="ค้นหาผู้รับการดูแล" onChange={(e) => setSearchTerm(e.target.value)} className="w-1/2"/>

                    <button className="flex justify-start w-1/4 hover:text-blue-500">
                        <FilterList />
                    </button>
                </div>

                <CaregiverCard />
                <CaregiverCard />
                <CaregiverCard />
            </div>

            <Footer />
        </main>
    )
}