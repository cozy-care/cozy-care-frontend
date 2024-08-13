'use client'

import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";

export default function CaregiverCard() {
    return (
        <Card
            className="p-2 mb-6 w-1/2 bg-slate-100"
            shadow="sm"
        >
            <CardBody>
                <div className="flex w-full h-full gap-4 text-large">
                    <div className="relative">
                        <Image
                            alt="Patient profile"
                            className="object-cover"
                            width="100%"
                            height={200}
                            shadow="sm"
                            src="https://thumbs.dreamstime.com/b/healthcare-nurse-icon-outline-style-vector-web-design-isolated-white-background-178855215.jpg"
                        />
                    </div>

                    <div className="grow flex flex-col gap-4">
                        <div className="flex gap-4 h-3/4">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p>ชื่อ : .................................</p>
                                <p>บริการที่ต้องการ: ..........................</p>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2">
                                <p>ระยะทาง : .................................</p>
                                <p>วันเวลาที่ต้องการ: .................................</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center h-1/4">
                            <Link href="">
                                <Button className="px-10 text-large">
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