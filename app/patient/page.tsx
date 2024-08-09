'use client'

import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Patient() {

    useEffect(() => {
        document.title = "Patient - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-svh">
            <div className="grow">
                Patient page
            </div>

            <Footer />
        </main>
    )
}
