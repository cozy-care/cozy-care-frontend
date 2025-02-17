'use client'

import { useEffect } from "react";

export default function Privacy() {

    useEffect(() => {
        document.title = "Privacy - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
                Privacy page
            </div>
        </main>
    )
}