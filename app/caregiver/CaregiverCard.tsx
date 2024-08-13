'use client'

import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import { Chat, Star, StarBorder } from '@mui/icons-material';

interface Props {
    name: string;
    profileURL: string;
}

export default function CaregiverCard(props: Props) {
    return (
        <Card
            className="p-2 mb-6 w-1/2 bg-slate-300"
            shadow="sm"
        >
            <CardBody>
                <div className="flex w-full h-full gap-4 text-large">
                    <div className="relative">
                        <Image
                            alt="Patient profile"
                            className="object-cover bg-white"
                            width={200}
                            height={200}
                            shadow="sm"
                            src={props.profileURL}
                        />
                    </div>

                    <div className="grow flex flex-col gap-4">
                        <div className="flex gap-4 h-3/4">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p>ชื่อ : {props.name}</p>
                                <p>บริการที่เสนอ: ..........................</p>
                                <p className="flex">คะแนนที่รีวิว: <Star /><Star /><Star /><StarBorder /><StarBorder /></p>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2">
                                <p>ระยะทาง : .................................</p>
                                <p>วันเวลาที่ต้องการ: .................................</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center h-1/4">
                            <Link href="">
                                <Button className="px-10 text-large" color="success" endContent={<Chat/>}>
                                    เริ่มการสนทนา
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}