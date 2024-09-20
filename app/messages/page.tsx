'use client'

import ChatCard from "@/components/ChatCard";
import { MoreHoriz } from "@mui/icons-material";
import { useEffect } from "react";

// อย่าลืมเปลี่ยนชื่อ Function
export default function Messages() {

    // อย่าลืมเปลี่ยน Title
    useEffect(() => {
        document.title = "Messages - Cozy Care";
    }, []);

    return (
        <main className="flex min-h-[calc(100svh-3.5rem)]">
            <div className="flex flex-col w-[20%] max-h-[calc(100svh-3.5rem)] border-r-1 border-gray-300">
                <div className="flex justify-between px-4 py-2 border-b-1 border-gray-300">
                    <h2 className="text-2xl font-semibold">แชท</h2>
                    <button type="button" className="hover:!text-blue-500"><MoreHoriz sx={{ fontSize: 30 }} /></button>
                </div>


                <div className="grow overflow-y-auto px-2">
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                    <ChatCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sk1gZUWYPUZm5tPW_BNf0QdBWq_XQqAO5Q&s" />
                </div>

            </div>

            <div className="flex w-[80%]">
                <div className="grow bg-red-50">
                    chat
                </div>
                <div className="w-[24%] bg-blue-50">
                    info
                </div>
            </div>
        </main>
    )
}