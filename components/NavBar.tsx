"use client";

import { useEffect, useState } from "react";
import {
  Chat,
  Notifications,
  Person,
  MoreHoriz,
  ZoomOutMap,
  Menu,
} from "@mui/icons-material";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import NotiCard from "./NotiCard";
import ChatCard from "./ChatCard";
import { useRouter } from "next/navigation";

// import SelectRole from "@/app/home/edit/role/page";
// import PatientIDProfile from "@/app/patient/[patientID]/edit/page";
// import CaregiverIDProfile from "@/app/caregiver/[caregiverID]/edit/page";

export default function NavBar() {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // const SelectRole = () => {
  //   router.push("/home/edit/role/page"); // ไปที่หน้า SelectRole.tsx
  // };

  // const PatientIDProfile = () => {
  //   router.push("/patient/[patientID]/edit/page");
  // };

  // const CaregiverIDProfile = () => {
  //   router.push("/caregiver/[caregiverID]/edit/page");
  // };

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target && !target.closest(".menu-button") && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="flex justify-between h-14 pl-4 w-full sticky top-0 bg-white border-b-[1px] border-b-slate-400 z-[99]">
      {/* Left side */}
      <Link href="/home" className="flex items-center space-x-3">
        <Image src="/favicon.ico" width={40} height={40} alt="Logo  " />
        <div className="font-bold text-lg">Cozy Care</div>
      </Link>

      {/* Right side */}
      {pageTitle == "Welcome - Cozy Care" ? (
        <div className="flex items-center pr-4">
          <Link
            href="/login"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {/* Hamburger menu items for mobile */}
          {menuOpen && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
              <Link
                type="button"
                href="/home"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                หน้าหลัก
              </Link>
              <Link
                type="button"
                href="/caregiver"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ค้นหาผู้ดูแล
              </Link>
              <Link
                type="button"
                href="/patient"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ค้นหาผู้รับการดูแล
              </Link>
              <Link
                type="button"
                href="/announcement"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ประชาสัมพันธ์
              </Link>
            </div>
          )}

          {/* Menu items for larger screens (md and above) */}
          <div className="hidden md:flex justify-center items-center">
            <Link
              type="button"
              href="/home"
              className="px-5 py-2 hover:text-blue-500"
            >
              หน้าหลัก
            </Link>
            <Link
              type="button"
              href="/caregiver"
              className="px-5 py-2 hover:text-blue-500"
            >
              ค้นหาผู้ดูแล
            </Link>
            <Link
              type="button"
              href="/patient"
              className="px-5 py-2 hover:text-blue-500"
            >
              ค้นหาผู้รับการดูแล
            </Link>
            <Link
              type="button"
              href="/announcement"
              className="px-5 py-2 hover:text-blue-500"
            >
              ประชาสัมพันธ์
            </Link>
          </div>
          {/* CHAT */}
          <Dropdown disableAnimation={true}>
            <DropdownTrigger>
              <button type="button" className="px-5 py-2 hover:text-blue-500">
                <Chat sx={{ fontSize: 30 }} />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              closeOnSelect={false}
              className="h-[90svh]"
            >
              <DropdownItem
                isReadOnly
                key="header"
                className="opacity-100 cursor-default"
              >
                <div className="flex justify-between w-[400px]">
                  <h2 className=" text-2xl font-semibold">แชท</h2>
                  <div className="flex gap-4">
                    <button type="button" className="hover:text-blue-500">
                      <MoreHoriz sx={{ fontSize: 30 }} />
                    </button>
                    <button
                      onClick={() => router.push("/messages")}
                      type="button"
                      className="hover:text-blue-500"
                    >
                      <ZoomOutMap sx={{ fontSize: 30 }} />
                    </button>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="sub"
                className="opacity-100 cursor-default"
              >
                <div className="h-[82vh] overflow-y-auto">
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                  <ChatCard imageUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* NOTIFICATION */}
          <Dropdown disableAnimation={true}>
            <DropdownTrigger>
              <button type="button" className="px-5 py-2 hover:text-blue-500">
                <Notifications sx={{ fontSize: 30 }} />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              closeOnSelect={false}
              className="h-[90svh]"
            >
              <DropdownItem
                isReadOnly
                key="header"
                className="opacity-100 cursor-default"
              >
                <div className="flex justify-between w-[400px]">
                  <h2 className=" text-2xl font-semibold">การแจ้งเตือน</h2>
                  <button type="button" className="hover:text-blue-500">
                    <MoreHoriz sx={{ fontSize: 30 }} />
                  </button>
                </div>
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="sub"
                className="opacity-100 cursor-default"
              >
                <div className="h-[82vh] overflow-y-auto">
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* PROFILE */}
          <Link
            type="button"
            href="/home/edit/role"
            className="px-4 py-2 hover:text-blue-500"
          >
            <Person sx={{ fontSize: 35 }} />
          </Link>

          {/* Hamburger menu icon for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-5 py-2"
          >
            <Menu className="text-3xl" />
          </button>
        </div>
      )}
    </nav>
  );
}
