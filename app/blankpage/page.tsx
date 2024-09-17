'use client'

import Footer from "@/components/Footer";
import { useEffect } from "react";

// อย่าลืมเปลี่ยนชื่อ Function
export default function CHANGENAMEHERE() {

    // อย่าลืมเปลี่ยน Title
    useEffect(() => {
        document.title = "CHANGEHERE - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
            <div className="grow flex flex-col items-center">
                Test
            </div>

            {/* ถ้าหน้านั้นไม่มี Footer ก็ลบ Components ออกไปได้เลย (ลบ Import ด้วย จะได้ไม่รก) */}
            <Footer />
        </main>
    )
}