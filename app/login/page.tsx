'use client'

import { useEffect } from "react";

export default function Login() {

    useEffect(() => {
        document.title = "Login - Cozy Care";
    }, []);
    return (
        <main>
            Hello, login
        </main>
    );
}