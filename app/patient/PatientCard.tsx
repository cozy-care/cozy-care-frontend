
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  user_id: string;
  name?: string;
  imgUrl?: string;
  serviceNeed?: string;
  skillNeed?: string;
  dateReady?: string;
  distance?: number;
}


export default function PatientCard({
  user_id,
  name = "Default Name",
  imgUrl = "/default-profile.png",
  serviceNeed = "Default Service",
  skillNeed = "Default Skill",
  dateReady = "Not Ready",
  distance = 0,
}: Props) {
  const [user1Id, setUser1Id] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
          { withCredentials: true }
        );
        setUser1Id(response.data.user_id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInitiateChat = async () => {
    if (!user1Id) {
      console.error("User1 ID is not available");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/initiate`,
        {
          user1_id: user1Id,
          user2_id: user_id,
        },
      );
      console.log(response);
      const chatId = response.data.chat_id; // Get `chat_id` from the API response
      console.log("Chat initiated successfully:", response.data);
      router.push(`/messages/${chatId}`);
    } catch (error) {
      console.error("Error initiating chat:", error);
    }
  };

  return (
    <Card shadow="sm" className="w-[calc(100dvw-24px)] h-max dark:bg-cozy-background-dark lg:w-[1000px] lg:mx-auto">
      <CardBody className="flex flex-row gap-3">
        <div className="">
          <Image
            shadow="sm"
            alt="Caregiver image"
            src={imgUrl}
            width={130}
            height={130}
            radius="sm"
            className="object-cover object-center"
          />
        </div>

        <div className="relative flex flex-col grow gap-0.5">
          <p className="font-bold text-base">{name}</p>
          <p className="text-xs">บริการที่ต้องการ: {serviceNeed}</p>
          <p className="text-xs">ความสามารถที่ต้องการ: {skillNeed}</p>
          <p className="text-xs">วันเวลาที่ว่าง: {dateReady}</p>
          <p className="text-xs">ระยะทาง: {distance} กิโลเมตร</p>
          <Button onPress={handleInitiateChat} className="absolute font-bold justify-self-center self-center bottom-0 h-6 px-4" size="sm" radius="full" color="primary">
            เริ่มการสนทนา
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
