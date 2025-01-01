'use client'

import { useEffect } from "react";
import MyChatBox from "./MyChatBox";
import TheirChatBox from "./TheirChatBox";

export default function Messages() {

    useEffect(() => {
        document.title = "Someone name - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col h-[100dvh]">
            <div className="grow flex flex-col items-center">
                <div className="flex gap-3 w-full h-[50px] bg-blue-300">

                </div>

                <div className="grow w-full flex flex-col-reverse gap-1 px-3 pb-2 overflow-y-scroll">
                    <MyChatBox text="yo" date="1"/>
                    <TheirChatBox text="yo" date="1"/>
                </div>

                <div className="flex gap-3 w-full h-[50px] bg-green-300">
                    
                </div>
            </div>
        </main>
    )
}