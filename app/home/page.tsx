'use client'

import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        document.title = "Home - Cozy Care";
    }, []);
    return (
        <main>
            Hello, home
        </main>
    );
}
