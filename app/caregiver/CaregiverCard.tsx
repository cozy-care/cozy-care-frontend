
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  name?: string;
  imgUrl?: string;
  service?: string;
  skill?: string;
  dateReady?: string;
  distance?: number;
}


export default function CaregiverCard({
  name = "Default Name",
  imgUrl = "/default-profile.png",
  service = "Default Service",
  skill = "Default Skill",
  dateReady = "Not Ready",
  distance = 0,
}: Props) {
  return (
    <Card shadow="sm" className="w-[calc(100dvw-24px)] h-max dark:bg-cozy-background-dark">
      <CardBody className="flex flex-row gap-3">
        <div className="">
          <Image
            shadow="sm"
            alt="Caregiver image"
            src={imgUrl}
            width={130}
            height={130}
            radius="sm"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative flex flex-col grow gap-0.5">
          <p className="font-bold text-base">{name}</p>
          <p className="text-xs">บริการ: {service}</p>
          <p className="text-xs">ความสามารถ: {skill}</p>
          <p className="text-xs">วันเวลาที่ว่าง: {dateReady}</p>
          <p className="text-xs">ระยะทาง: {distance} กิโลเมตร</p>
          <Button as={Link} href="" className="absolute font-bold justify-self-center self-center bottom-0 h-6 px-4" size="sm" radius="full" color="primary">
            เริ่มการสนทนา
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
