import { Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  title?: string;
  imgUrl?: string;
  type?: string;
  expertise?: string;
  emergencyNumbers?: string;
  phoneNumber?: string;
  distance?: string;
}

export default function InformationCard({
  title = "No title",
  imgUrl = "",
  type = "No type",
  expertise = "No expertise",
  emergencyNumbers = "No emergency number",
  phoneNumber = "No phone number",
  distance = "No distance",
}: Props) {
  return (
    <Card
      shadow="sm"
      className="w-[calc(100dvw-24px)] h-max dark:bg-cozy-background-dark lg:w-[1000px] lg:mx-auto"
    >
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

        <div className="relative flex flex-col grow gap-0.5 ">
          <p className="font-bold text-base">{title}</p>
          <p className="text-xs">ประเภท : {type}</p>
          <p className="text-xs">ความเชี่ยวชาญ : {expertise}</p>
          <p className="text-xs">เบอร์โทรฉุกเฉิน : {emergencyNumbers}</p>
          <p className="text-xs">เบอร์โทรโรงพยาบาล : {phoneNumber}</p>
          <p className="text-xs">ระยะทาง : {distance}</p>

          <Button
            as={Link}
            href=""
            className="absolute font-bold justify-self-center self-center bottom-0 h-6 px-4"
            size="sm"
            radius="full"
            color="primary"
          >
            กดเพื่อค้นหาที่ตั้งบนแผนที่
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
