"use client";

import {
  Button,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ArrowBackIosNew, AddCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import ClientBotton from "./ClientBotton";

interface ClientData {
  sub_client_id: string;
  firstname: string;
  lastname: string;
}

export default function UserClient() {
  const [client, setClient] = useState<ClientData[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    document.title = "Client - Cozy Care";

    // ฟังก์ชันตรวจสอบการล็อกอิน และดึง user_id
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
          { withCredentials: true }
        );
        const userId = response.data.user_id;
        setUserId(userId);
        
        // ดึงข้อมูล Client โดยใช้ user_id
        fetchClientData(userId);
      } catch (error) {
        console.log("User not logged in or authentication failed.");
      }
    };

    checkAuth();
  }, []);

  // ฟังก์ชันดึงข้อมูล SubClient จาก API
  const fetchClientData = async (userId: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/client/get-sub-client`,
        { user_id: userId },
        { withCredentials: true }
      );
      setClient(response.data.subClients); // ตั้งค่าข้อมูล subClients
    } catch (error) {
      console.error("Error fetching client data:", error);
    }
  };

  const handleDeleteClient = (sub_client_id: string) => {
    setClient((prev) => prev.filter((c) => c.sub_client_id !== sub_client_id));
  };

  const handleClick = () => {
    router.push(`/profile/${userId}`); // Navigate to the profile page of the user
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <div
            onClick={handleClick} // เมื่อคลิกที่ไอคอน จะไปที่หน้าของผู้ใช้
            className="text-cozy-green-light cursor-pointer p-3" // เพิ่ม padding และ cursor pointer
          >
            <ArrowBackIosNew style={{ fontSize: "30px" }} /> {/* ขนาดไอคอน */}
          </div>
          <h1 className="absolute w-full flex text-lg font-bold justify-center items-center">
            ผู้รับการดูแล
          </h1>
        </div>
        <hr className="w-full border-t-8" />

        <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%] rounded-full gap-y-5">
          {client.length > 0 ? (
            client.map((data, index) => (
              <ClientBotton
                key={data.sub_client_id}
                sub_client_id={data.sub_client_id}
                firstname={data.firstname}
                lastname={data.lastname}
                onDelete={handleDeleteClient}
              />
            ))
          ) : (
            <p>ไม่มีข้อมูลผู้รับการดูแล</p>
          )}
        </div>
        <div> 
          <Button 
            endContent={<AddCircle />} 
            onPress={() => {
              if (userId) {
                router.push(`/patient/${userId}`);
              } else {
                console.log("User ID not found");
              }
            }}
          >
            เพิ่มผู้รับการดูแล
          </Button>
        </div>
      </div>
    </main>
  );
}
