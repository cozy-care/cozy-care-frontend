'use client'

import { useEffect } from "react";

export default function Support() {

    useEffect(() => {
        document.title = "Support - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
                Support page
            </div>
        </main>
    )
}