'use client'

import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
    type?: string;
    name?: string;
    imageUrl: string;
}

export default function NotiCard(props: Props) {
    return (
        <Card shadow="none" radius="sm" isPressable className="w-full hover:bg-gray-200">
            <CardBody>
                <div className="flex gap-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full"
                        width={60}
                        height={60}
                        src={props.imageUrl}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-xl font-semibold">ใครสักคนกำลังจ้องจะเล่นคุณ</p>
                        <p className="text-blue-400">10 นาทีที่ผ่านมา</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}