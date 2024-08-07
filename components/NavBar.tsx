import Image from "next/image";

export default function NavBar() {
    return (
        <div className="flex justify-between px-28 py-4 absolute w-full">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <Image src="/favicon.ico" width={40} height={40} alt="Ricardo" />
                <div>Cozy Care</div>
            </div>

            {/* Register */}
            <div className="flex items-center">
                <a href="">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl">
                        เข้าสู่ระบบ
                    </button>
                </a>
            </div>
        </div>
    )
}