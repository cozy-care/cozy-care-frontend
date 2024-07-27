import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between px-28 py-4 absolute w-full">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src='/favicon.ico'
            width={40}
            height={40}
            alt="Ricardo"
          />
          <div>Cozy Care</div>
        </div>

        {/* Register */}
        <div className="flex items-center">
          <a href="">
            <div className="bg-black text-white px-3 py-2 rounded-xl">
              เข้าสู่ระบบ
            </div>
          </a>
        </div>
      </div>

      <div className="h-screen flex-col content-center">
        <div className="flex items-center justify-center">
          {/* Image */}
          <div className="bg-gray-500 rounded-[50%] w-[800px] h-[650px]"></div>

          {/* Text */}
          <div className="bg-gray-500 rounded-[50%] w-[800px] h-[650px]"></div>
        </div>

        <div className="py-4 w-max mx-auto">O&emsp;&emsp;O</div>
      </div>
    </div>
  );
}
