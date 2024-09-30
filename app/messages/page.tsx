'use client'

import ChatCard from "@/components/ChatCard";
import { MoreHoriz, Info, AddCircle, Image as ImageIcon, Send } from "@mui/icons-material";
import { Input, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

// อย่าลืมเปลี่ยนชื่อ Function
export default function Messages() {
    const [searchTerm, setSearchTerm] = useState('')
    const [isVisible, setIsVisible] = useState(true);

    const toggleInfo = () => {
        setIsVisible(!isVisible);
    };

    // อย่าลืมเปลี่ยน Title
    useEffect(() => {
        document.title = "Messages - Cozy Care";
    }, []);

    return (
        <main className="flex min-h-[calc(100svh-3.5rem)]">
            <div className="flex flex-col w-[360px] max-h-[calc(100svh-3.5rem)] border-r-1 border-gray-300">
                <div className="flex justify-between px-4 py-2 border-b-1 border-gray-300">
                    <h2 className="text-2xl font-semibold">แชท</h2>
                    <button type="button" className="hover:!text-blue-500"><MoreHoriz sx={{ fontSize: 30 }} /></button>
                </div>


                <div className="grow overflow-y-auto px-2">
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

            </div>

            <div className="flex flex-col grow  border-r-1 border-gray-300">
                <div className="flex h-[64px] px-4 items-center justify-between  border-b-1 border-gray-300">
                    <div className="flex gap-4 items-center">
                        <Image
                            alt="Chat profile"
                            className="object-center object-cover rounded-full"
                            width={45}
                            height={'auto'}
                            src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                        />
                        <p className="text-2xl font-semibold">นายโรคภัย ไข้เจ็บ</p>
                    </div>
                    <button type="button" className="hover:!text-blue-500" onClick={toggleInfo} ><Info sx={{ fontSize: 30 }} /></button>
                </div>
                <div className="grow overflow-y-scroll">
                    Chat section
                </div>
                <div className="flex h-[64px] items-center justify-between px-4 gap-4  border-t-1 border-gray-300">
                    <button type="button" className="hover:!text-blue-500"><AddCircle sx={{ fontSize: 30 }} /></button>
                    <button type="button" className="hover:!text-blue-500"><ImageIcon sx={{ fontSize: 30 }} /></button>
                    <Input type="text" placeholder="messages" onChange={(e) => setSearchTerm(e.target.value)} className="grow" />
                    <button type="button" className="hover:!text-blue-500"><Send sx={{ fontSize: 30 }} /></button>
                </div>
            </div>


            {isVisible && (
                <div className="w-[362px] flex flex-col px-6 pt-6 gap-3">
                    <div className="flex flex-col items-center gap-3">
                        <Image
                            alt="Chat profile"
                            className="object-center object-cover rounded-full"
                            width={130}
                            height={'auto'}
                            src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                        />
                        <p className="text-2xl font-semibold mb-2">นายโรคภัย ไข้เจ็บ</p>
                    </div>
                        <p className="text-lg font-medium">ชื่อ-สกุล : dd</p>
                        <p className="text-lg font-medium">สถานะ : dd</p>
                        <p className="text-lg font-medium">อายุ : 10</p>
                        <p className="text-lg font-medium">โรคภัยประจำตัว : </p>
                        <p className="text-lg font-medium">ประวัติการแย้พา : </p>
                        <p className="text-lg font-medium">ความเชี่ยวชาญ : </p>
                </div>
            )}
        </main>
    )
}