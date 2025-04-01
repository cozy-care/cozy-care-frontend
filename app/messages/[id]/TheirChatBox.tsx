'use client'

import { Tooltip } from "@nextui-org/react";

interface Props {
    text?: string;
    date?: string;
}

export default function TheirChatBox(props: Props) {
    return (
        <Tooltip content={props.date} placement="right" delay={400} closeDelay={0} className="px-3 py-[6px]">
            <div className="self-start w-auto max-w-[600px] h-max break-words px-3 py-[6px] bg-gray-200 shadow-md rounded-3xl">
                {props.text}
            </div>
        </Tooltip>
    );
}