"use client";

import Footer from "@/components/Footer";
import { useEffect } from "react";

// อย่าลืมเปลี่ยนชื่อ Function
export default function add() {
  // อย่าลืมเปลี่ยน Title
  useEffect(() => {
    document.title = "add - Cozy Care";
  }, []);

  return (
    //<main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center">Test</div>
    </main>
  );
}
