'use client'

import { useEffect } from "react";

export default function UserClient() {

    useEffect(() => {
        document.title = "Client - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
                Client page
            </div>
        </main>
    )
}