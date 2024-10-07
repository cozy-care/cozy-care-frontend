"use client";

import { Chat } from "@mui/icons-material";
import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";

interface Props {
  name: string;
  profileURL: string;
}

export default function PatientCard(props: Props) {
  return (
    <Card className="p-2 mb-6 w-5/6 lg:w-1/2 bg-slate-300" shadow="sm">
      <CardBody>
        <div className="flex flex-col lg:flex-row w-full h-full gap-6 lg:gap-4 text-large">
          <div className="flex justify-center items-center lg:relative">
            <Image
              alt="Patient profile"
              className="object-cover w-[200px] h-[200px] bg-white"
              //   width={200}
              //   height={200}
              shadow="sm"
              src={props.profileURL}
            />
          </div>

          <div className="grow flex flex-col gap-4">
            <div className="flex gap-4 h-3/4">
              <div className="flex flex-col gap-2 w-1/2">
                <p className="text-md lg:text-xl">ชื่อ : {props.name}</p>
                <p className="text-md lg:text-xl">
                  บริการที่ต้องการ: ..........................
                </p>
              </div>

              <div className="flex flex-col gap-4 w-1/2">
                <p className="text-md lg:text-xl">
                  ระยะทาง : .................................
                </p>
                <p className="text-md lg:text-xl">
                  วันเวลาที่ต้องการ: .................................
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center h-1/4">
              <Link href="">
                <Button
                  className="px-10 text-large"
                  color="success"
                  endContent={<Chat />}
                >
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
