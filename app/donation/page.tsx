'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";

// อย่าลืมเปลี่ยนชื่อ Function
export default function Donation() {

    useEffect(() => {
        document.title = "Donation - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <NavBar />
            
            <div className="grow flex flex-col items-center">
                Test
            </div>

            <Footer />
        </main>
    )
}