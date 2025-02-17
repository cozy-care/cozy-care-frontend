'use client'

import { useEffect } from "react";

export default function History() {

    useEffect(() => {
        document.title = "History - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
                History page
            </div>
        </main>
    )
}