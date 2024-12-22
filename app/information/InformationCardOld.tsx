"use client";

import { Chat } from "@mui/icons-material";
import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";

interface Props {
  title: string;
  detail: string;
  imgUrl: string;
}

export default function InformationCardOld(props: Props) {
  return (
    <Card
      className="flex flex-col justify-center p-2 mb-6 w-1/3 lg:w-full h-full bg-slate-300"
      shadow="sm"
    >
      <CardBody>
        <div className="flex lg:flex-row flex-col  w-full h-full gap-4 text-large">
          <div className="flex items-center">
            <Image
              alt="Information picture"
              className="object-cover  w-[500px] h-[200px] shadow-sm bg-white"
              // width={500}
              // height={200}
              // shadow="sm"
              src={props.imgUrl}
            />
          </div>

          <div className="grow flex flex-col gap-5">
            <div className="flex gap-4 lg:h-3/4 ">
              <div className="flex flex-col gap-3 w-[1000px] ">
                <strong className=" text-lg lg:text-2xl font-bold">
                  {props.title}
                </strong>
                <p className="text-medium lg:text-lg">{props.detail}</p>
              </div>
            </div>

            <div className="flex justify-end items-center h-1/4">
              <a href="#" className="hover:text-blue-800">
                คลิกเพื่ออ่าน
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
