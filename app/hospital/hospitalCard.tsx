import { Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  title?: string;
  imgUrl?: string;
  mapUrl?: string;
  type?: string;
  expertise?: string;
  phoneNumber?: string;
}

export default function InformationCard({
  title = "No title",
  imgUrl = "",
  mapUrl = "#", // 🟡 default fallback
  type = "No type",
  expertise = "No expertise",
  phoneNumber = "No phone number",
}: Props) {
  return (
    <Card
      shadow="sm"
      className="w-[calc(100dvw-24px)] h-max dark:bg-cozy-background-dark lg:w-[1000px] lg:mx-auto"
    >
      <CardBody className="flex flex-row gap-3">
        <div className="">
          <Image
            src={imgUrl}
            alt={title}
            width={130}
            height={130}
            radius="sm"
            className="object-cover object-center flex-shrink-0"
          />
        </div>

        <div className="relative flex flex-col grow">
          <p className="font-bold text-base">{title}</p>
          <p className="text-xs">ประเภท : {type}</p>
          <p className="text-xs">ความเชี่ยวชาญ : {expertise}</p>
          <p className="text-xs">เบอร์โทรโรงพยาบาล : {phoneNumber}</p>

          <Button
            as={Link}
            href={mapUrl}
            target="_blank"
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
