'use client'

import { Tooltip } from "@nextui-org/react";

interface Props {
    text?: string;
    date?: string;
}

export default function MyChatBox(props: Props) {
    return (
        <Tooltip content={props.date} placement="left" delay={400} closeDelay={0} className="px-3 py-[6px]">
            <div className="self-end w-auto max-w-[600px] h-max px-3 py-[6px] bg-blue-500 text-white rounded-3xl">
                {props.text}
            </div>
        </Tooltip>
    );
}