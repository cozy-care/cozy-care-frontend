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
    <html lang="en" className="">
      <body className={`${inter.className} transform transition dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light`}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
