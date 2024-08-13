'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Chat, Notifications, Person } from '@mui/icons-material';
import Link from "next/link";

export default function NavBar() {
    const router = useRouter()
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

    return (
        <nav className="flex justify-between h-14 pl-4 w-full sticky top-0 bg-white border-b-[1px] border-b-slate-400 z-[99]">

            {/* Left side */}
            <Link href="/home" className="flex items-center space-x-3">
                <Image src="/favicon.ico" width={40} height={40} alt="Ricardo" />
                <div className="font-bold text-lg">Cozy Care</div>
            </Link>

            {/* Right side */}
            {pageTitle == "Welcome - Cozy Care" ? (
                <div className="flex items-center pr-4">
                    <Link href="/login" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl">
                        เข้าสู่ระบบ
                    </Link>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <Link type="button" href="/home" className="px-5 hover:text-blue-500">หน้าหลัก</Link>
                    <Link type="button" href="/caregiver" className="px-5 hover:text-blue-500">ค้นหาผู้ดูแล</Link>
                    <Link type="button" href="/patient" className="px-5 hover:text-blue-500">ค้นหาผู้รับการดูแล</Link>
                    <Link type="button" href="/announcement" className="px-5 hover:text-blue-500">ประชาสัมพันธ์</Link>
                    <Link type="button" href="/message" className="px-5 hover:text-blue-500"><Chat sx={{ fontSize: 30 }} /></Link>
                    <Link type="button" href="/notification" className="px-5 hover:text-blue-500"><Notifications sx={{ fontSize: 30 }} /></Link>
                    <Link type="button" href="/profile" className="px-5 hover:text-blue-500"><Person sx={{ fontSize: 35 }} /></Link>
                </div>
            )}
        </nav>
    )
}