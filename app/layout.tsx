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
  return (
    //เอาไว้เปลี่ยนพี้นหลังทั้งหน้าจอ <body>
    <html lang="en" className="dark">
      <body className={`${inter.className} transform transition dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
