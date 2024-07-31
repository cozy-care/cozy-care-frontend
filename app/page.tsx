import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome - Cozy Care",
};

export default function Home() {
  return (
    <div>
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
