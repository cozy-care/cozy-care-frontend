'use client'

import { useEffect, useState } from "react";
import { Chat, Notifications, Person, MoreHoriz } from '@mui/icons-material';
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Card, CardBody, Image } from "@nextui-org/react";
import NotiCard from "./NotiCard";

export default function NavBar() {
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

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
                    <Link href="/login" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl">
                        เข้าสู่ระบบ
                    </Link>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <Link type="button" href="/home" className="px-5 py-2 hover:text-blue-500">หน้าหลัก</Link>
                    <Link type="button" href="/caregiver" className="px-5 py-2 hover:text-blue-500">ค้นหาผู้ดูแล</Link>
                    <Link type="button" href="/patient" className="px-5 py-2 hover:text-blue-500">ค้นหาผู้รับการดูแล</Link>
                    <Link type="button" href="/announcement" className="px-5 py-2 hover:text-blue-500">ประชาสัมพันธ์</Link>

                    {/* CHAT */}
                    <Dropdown disableAnimation={true}>
                        <DropdownTrigger>
                            <button type="button" className="px-5 py-2 hover:text-blue-500"><Chat sx={{ fontSize: 30 }} /></button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" disableAnimation={true} closeOnSelect={false} className="h-[90svh]">
                            <DropdownItem isReadOnly key="header" className="opacity-100 cursor-default">
                                <div className="flex justify-between w-[400px]">
                                    <h2 className="text-black text-2xl font-semibold">แชท</h2>
                                    <button type="button" className="hover:text-blue-500"><MoreHoriz sx={{ fontSize: 30 }} /></button>
                                </div>
                            </DropdownItem>
                            <DropdownItem isReadOnly key="sub" className="opacity-100 cursor-default">
                                asd
                            </DropdownItem>
                            <DropdownItem key="edit">Chat</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/* NOTIFICATION */}
                    <Dropdown disableAnimation={true}>
                        <DropdownTrigger>
                            <button type="button" className="px-5 py-2 hover:text-blue-500"><Notifications sx={{ fontSize: 30 }} /></button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" closeOnSelect={false} className="h-[90svh]">
                            <DropdownItem isReadOnly key="header" className="opacity-100 cursor-default">
                                <div className="flex justify-between w-[400px]">
                                    <h2 className="text-black text-2xl font-semibold">การแจ้งเตือน</h2>
                                    <button type="button" className="hover:text-blue-500"><MoreHoriz sx={{ fontSize: 30 }} /></button>
                                </div>
                            </DropdownItem>
                            <DropdownItem isReadOnly key="sub" className="opacity-100 cursor-default">
                                <div className="h-[82vh] overflow-y-auto">
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                    <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"/>
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Link type="button" href="/profile" className="px-4 py-2 hover:text-blue-500"><Person sx={{ fontSize: 35 }} /></Link>
                </div>
            )}
        </nav>
    )
}