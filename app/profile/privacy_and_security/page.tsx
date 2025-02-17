'use client'

import { useEffect } from "react";

export default function PrivacyAndSecurity() {

    useEffect(() => {
        document.title = "Privacy and security - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <div className="grow flex flex-col items-center">
                Privacy and security page
            </div>
        </main>
    )
}