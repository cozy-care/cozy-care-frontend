"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="">
      <button onClick={() => setTheme('light')} className="bg-yellow-400">Light Mode</button>
      <button onClick={() => setTheme('dark')} className="bg-blue-400">Dark Mode</button>
    </div>
  )
};