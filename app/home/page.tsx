'use client'

import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        document.title = "Home - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
            <div className="grow">
                Home page
            </div>

            <Footer />
        </main>
    )
}
