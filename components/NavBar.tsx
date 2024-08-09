'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter()
    
    return (
        <div className="flex justify-between h-14 px-4 w-full sticky top-0 bg-white border-[1px] border-b-slate-400">
            {/* Logo */}
            <button onClick={() => router.push('/home')} className="flex items-center space-x-3">
                <Image src="/favicon.ico" width={40} height={40} alt="Ricardo" />
                <div className="font-bold text-lg">Cozy Care</div>
            </button>

            {/* Register */}
            <div className="flex items-center">
                <button onClick={() => router.push('/login')} className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl">
                    เข้าสู่ระบบ
                </button>
            </div>
        </div>
    )
}