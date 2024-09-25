'use client'

import ChatCard from "@/components/ChatCard";
import { MoreHoriz, Info, ControlPoint, Image as ImageIcon, Send } from "@mui/icons-material";
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

            <div className="flex w-[80%]">
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
                            <p className="text-2xl">นายโรคภัย ไข้เจ็บ</p>
                        </div>
                        <button type="button" className="hover:!text-blue-500" onClick={toggleInfo} ><Info sx={{ fontSize: 30 }} /></button>
                    </div>
                    <div className="grow">
                        Chat section
                    </div>
                    <div className="flex h-[64px] items-center justify-between px-4 gap-4  border-t-1 border-gray-300">
                        <button type="button" className="hover:!text-blue-500"><ControlPoint sx={{ fontSize: 30 }} /></button>
                        <button type="button" className="hover:!text-blue-500"><ImageIcon sx={{ fontSize: 30 }} /></button>
                        <Input type="text" placeholder="messages" onChange={(e) => setSearchTerm(e.target.value)} className="grow" />
                        <button type="button" className="hover:!text-blue-500"><Send sx={{ fontSize: 30 }} /></button>
                    </div>
                </div>

                {isVisible && (
                    <div className="w-[24%]">
                        <div className="flex flex-col px-2 pt-6">
                            <Image
                                alt="Chat profile"
                                className="object-center object-cover rounded-full"
                                width={130}
                                height={'auto'}
                                src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                                style={{ margin: '0 auto' }}
                            />


                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}