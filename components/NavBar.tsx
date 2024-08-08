'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter()
    
    return (
        <div className="flex justify-between px-28 py-6 w-full fixed top-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <Image src="/favicon.ico" width={40} height={40} alt="Ricardo" />
                <div className="font-bold text-lg">Cozy Care</div>
            </div>

            {/* Register */}
            <div className="flex items-center">
                <button onClick={() => router.push('/login')} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-2xl">
                    เข้าสู่ระบบ
                </button>
            </div>
        </div>
    )
}