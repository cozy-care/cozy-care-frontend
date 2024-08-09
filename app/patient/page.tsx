'use client'

import { useEffect } from "react";

export default function Patient() {
    useEffect(() => {
        document.title = "Patient - Cozy Care";
    }, []);

    return (
        <div>Patient page</div>
    )
}
