"use client";

import Footer from "@/components/Footer";

import { useEffect } from "react";

export default function Caregiver() {
  useEffect(() => {
    document.title = "*Patient Name* - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow ">caregiverID Page</div>

      <Footer />
    </main>
  );
}
