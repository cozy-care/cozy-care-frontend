'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Chat, Notifications, Person } from '@mui/icons-material';

export default function NavBar() {
    const router = useRouter()
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

    return (
        <nav className="flex justify-between h-14 pl-4 w-full sticky top-0 bg-white border-b-[1px] border-b-slate-400">

            {/* Left side */}
            <button onClick={() => router.push('/home')} className="flex items-center space-x-3">
                <Image src="/favicon.ico" width={40} height={40} alt="Ricardo" />
                <div className="font-bold text-lg">Cozy Care</div>
            </button>

            {/* Right side */}
            {pageTitle == "Welcome - Cozy Care" ? (
                <div className="flex items-center">
                    <button onClick={() => router.push('/login')} className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl">
                        เข้าสู่ระบบ
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <button type="button" onClick={() => router.push('/home')}         className="h-full px-4 hover:text-blue-500">หน้าหลัก</button>
                    <button type="button" onClick={() => router.push('/caregiver')}    className="h-full px-4 hover:text-blue-500">ค้นหาผู้ดูแล</button>
                    <button type="button" onClick={() => router.push('/patient')}      className="h-full px-4 hover:text-blue-500">ค้นหาผู้รับการดูแล</button>
                    <button type="button" onClick={() => router.push('/announcement')} className="h-full px-4 hover:text-blue-500">ประชาสัมพันธ์</button>
                    <button type="button" onClick={() => router.push('/message')}      className="h-full px-4 hover:text-blue-500"><Chat sx={{ fontSize: 30}} /></button>
                    <button type="button" onClick={() => router.push('/notification')} className="h-full px-4 hover:text-blue-500"><Notifications sx={{ fontSize: 30}}/></button>
                    <button type="button" onClick={() => router.push('/profile')}      className="h-full px-4 hover:text-blue-500"><Person sx={{ fontSize: 35}}/></button>
                </div>
            )}
        </nav>
    )
}