'use client'

import { useEffect } from "react";

export default function Caregiver() {
    useEffect(() => {
        document.title = "Caregiver - Cozy Care";
    }, []);

    return (
        <div>Caregiver page</div>
    )
}
