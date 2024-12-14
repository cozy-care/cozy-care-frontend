import { Call, Facebook, Send } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full h-[180px] bg-cozy-lightblue-light transition dark:bg-cozy-darkblue-dark dark:text-white mt-auto pt-5">
      <div className="flex flex-col items-center pr-6 w-1/2 h-full font-black text-xl lg:text-3xl">
        COZY CARE
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col gap-1 w-1/2 lg:pl-80 h-full text-sm">
        <p className="font-extrabold lg:text-xl">เกี่ยวกับ</p>
        <p>ผู้ดูแล</p>
        <p>ช่วยเหลือ/การติดต่อ</p>
        <p>นโยบายความเป็นส่วนตัว</p>
        <div className="flex gap-4 mt-2">
          <Button as={Link} href="" className="font-bold w-auto bg-cozy-blue-light text-white" radius="full" isIconOnly>
            <Facebook />
          </Button>
          <Button as={Link} href="" className="font-bold w-auto bg-cozy-blue-light text-white" radius="full" isIconOnly>
            <Send />
          </Button>
          <Button as={Link} href="" className="font-bold w-auto bg-cozy-blue-light text-white" radius="full" isIconOnly>
            <Call />
          </Button>
        </div>
      </div>
    </footer>
  );
}
