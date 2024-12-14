import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Providers } from "./providers";

const inter = Kanit({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: {
    default: "Cozy care",
    template: "%s - Cozy care"
  },
  description: "Cozy Care by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // For fix flash light mode
  const setInitialTheme =
    `
      (function() {
          const userTheme = localStorage.getItem('theme');
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          const theme = userTheme || systemTheme;
          document.documentElement.classList.add(theme);
      })();
    `
  
  return (
    //เอาไว้เปลี่ยนพี้นหลังทั้งหน้าจอ <body>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition dark:bg-cozy-background-dark bg-white dark:text-white text-black`}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Providers>
          {/* <NavBar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
