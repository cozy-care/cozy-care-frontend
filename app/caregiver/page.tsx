'use client'

import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Caregiver() {

    useEffect(() => {
        document.title = "Caregiver - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-svh">
            <div className="grow">
                Caregiver page
            </div>

            <Footer />
        </main>
    )
}