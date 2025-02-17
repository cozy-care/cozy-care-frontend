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
import { useEffect } from "react";
import { services, employments } from "@/app/caregiver/add/addMock";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { Delete } from "@mui/icons-material";

export default function UserClient() {
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
          <Button className="justify-between">
            นาย ริดเดช <Delete style={{ width: "25px", height: "auto" }} />
          </Button>
          <Button>ผู้รับการดูแล 2</Button>
        </div>
      </div>
    </main>
  );
}
