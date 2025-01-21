'use client'

import NavBar from "@/components/NavBar";
import { useEffect } from "react";

export default function Profile() {

  useEffect(() => {
    document.title = "Profile - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col items-center w-full">
        <div className="flex flex-col gap-3 w-full border-2 mx-3">
          test
        </div>
      </div>
    </main>
  )
}