'use client'

import { useEffect } from "react";

export default function Info() {

    useEffect(() => {
        document.title = "Info - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
            </div>
        </main>
    )
}