'use client';

import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
    type?: string;
    name: string;
    imageUrl: string;
    lastMessage: string;
    lastMessageTime: number;
    onClick?: () => void; // Optional onClick handler
}

export default function ChatCard(props: Props) {
    return (
        <Card
            shadow="none"
            radius="sm"
            isPressable
            className="w-full hover:bg-gray-200 py-[2px] cursor-pointer"
            onClick={props.onClick} // Attach the onClick handler
        >
            <CardBody>
                <div className="flex gap-2">
                    <Image
                        alt="Card background"
                        className="object-center object-cover rounded-full"
                        width={60}
                        height={60}
                        src={props.imageUrl}
                    />
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-xl font-semibold">{props.name}</p>
                        <div className="flex text-gray-500">
                            <p className="">{props.lastMessage}</p>
                            <p className="px-2 font-extrabold">·</p>
                            <p>{props.lastMessageTime} นาที</p>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
