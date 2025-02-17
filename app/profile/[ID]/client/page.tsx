"use client";

import {
  Button,
  DatePicker,
  Input,
  Link,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { services, employments } from "@/app/caregiver/add/addMock";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ClientBotton from "./ClientBotton";

import { Delete } from "@mui/icons-material";
import { clientMock } from "./ClientMock";
interface ClientData {
  user_id: string;
  firstname: string;
  lastname: string;
}

export default function UserClient() {
  const [client, setClient] = useState<ClientData[]>([]);
  const router = useRouter();
  useEffect(() => {
    document.title = "Client - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <Button
            as={Link}
            onPress={() => router.back()}
            className="text-cozy-green-light"
            isIconOnly
            radius="full"
            variant="light"
          >
            <ArrowBackIosNew />
          </Button>
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            ผู้รับการดูแล
          </h1>
        </div>
        <hr className="w-full  border-t-8 " />
        <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%] rounded-full gap-y-5">
          {clientMock.map((data, index) => (
            <ClientBotton
              key={index}
              firstname={data.firstname}
              lastname={data.lastname}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
