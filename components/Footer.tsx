import { Call, Facebook, Send } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-center w-full h-[180px] bg-cozy-lightblue-light transition dark:bg-cozy-darkblue-dark dark:text-white mt-auto pt-3">
      <div className="flex justify-center flex-col items-center pr-6 w-1/2 h-full font-black text-xl lg:text-3xl gap-5">
        COZY CARE
        <Image
          src="/favicon.ico"
          width={40}
          height={40}
          alt="Logo"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      <div className="flex flex-col gap-[2px] w-1/2 lg:pl-80 h-full text-sm">
        <p className="font-extrabold lg:text-xl">เกี่ยวกับ</p>
        <p>ผู้ดูแล</p>
        <p>ช่วยเหลือ/การติดต่อ</p>
        <p>นโยบายความเป็นส่วนตัว</p>
        <p>ต้องการสนับสนุน</p>
        <div className="flex gap-4 mt-1">
          <Button as={Link} href="" className="font-bold w-auto bg-[#1F5670] dark:bg-white text-white dark:text-[#1F5670]" radius="full" isIconOnly>
            <Facebook />
          </Button>
          <Button as={Link} href="" className="font-bold w-auto bg-[#1F5670] dark:bg-white text-white dark:text-[#1F5670]" radius="full" isIconOnly>
            <Send />
          </Button>
          <Button as={Link} href="" className="font-bold w-auto bg-[#1F5670] dark:bg-white text-white dark:text-[#1F5670]" radius="full" isIconOnly>
            <Call />
          </Button>
        </div>
      </div>
    </footer>
  );
}
