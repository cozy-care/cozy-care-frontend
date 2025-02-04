import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Image, Button, Link } from "@nextui-org/react";
import axios from "axios";
import { Star, Verified } from "@mui/icons-material";

interface Props {
  user_id: string;
  name?: string;
  imgUrl?: string;
  service?: string;
  skill?: string;
  dateReady?: string;
  distance?: number;
}

export default function CaregiverCard({
  user_id,
  name = "Default Name",
  imgUrl = "/default-profile.png",
  service = "Default Service",
  skill = "Default Skill",
  dateReady = "Not Ready",
  distance = 0,
}: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
      const chatId = response.data.chat_id; // Get `chat_id` from the API response
      console.log("Chat initiated successfully:", response.data);
      router.push(`/messages/${chatId}`);
    } catch (error) {
      console.error("Error initiating chat:", error);
    }
  };

  const expandToggle = () => {
    setIsVisible(!isVisible);
  };
  
  const readReview = () => {
    console.log("read review");
  };

  return (
    <Card shadow="sm" className="w-[calc(100dvw-24px)] h-max dark:bg-cozy-background-dark lg:w-[1000px] lg:mx-auto">
      <CardBody className="flex flex-col relative gap-4">
        <div className="flex gap-3">
          <div className="w-[130px] h-[130px]">
            <Image
              alt="Caregiver image"
              src={imgUrl}
              width={130}
              height={130}
              radius="sm"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-base">{name}</p>
            <p className="text-xs">บริการ: {service}</p>
            <p className="text-xs">ความสามารถ: {skill}</p>
            <p className="text-xs">วันเวลาที่ว่าง: {dateReady}</p>
            <p className="text-xs">ระยะทาง: {distance} กิโลเมตร</p>
            <Button
              onPress={handleInitiateChat}
              className="font-bold w-max h-6 px-4 mt-auto"
              size="sm"
              radius="full"
              color="primary"
            >
              เริ่มการสนทนา
            </Button>
          </div>
        </div>

        {isVisible && (
          <div className="flex flex-col items-center gap-3">
            <hr className="w-[95%] h-[3px] bg-cozy-green-light" />
            <div className="flex flex-col w-[95%] h-max gap-1 text-sm">
              <div className="flex w-full gap-1">
                <p className="w-[35%]">ส่วนสูง : 185 ซม.</p>
                <p className="w-[65%]">การศึกษา/ฝึกอบรม : ปริญญาตรีพยาบาลศาสตร์</p>
              </div>
              <div className="flex w-full gap-1">
                <p className="w-[35%]">น้ำหนัก : 75 กก. </p>
                <p className="w-[65%]">ราคา : 800-1600บาท/วัน , 9000-15000บาท/เดือน</p>
              </div>
              <div className="flex w-full gap-1">
                <p className="w-[35%]">ภาษาที่สื่อสารได้ :<br />ไทย, อังกฤษ</p>
                <p className="w-[65%]">คะแนนรีวิว : <Star /> 4.5 <Link onPress={readReview} size="sm" underline="always" className="ml-1 font-bold hover:cursor-pointer">อ่านรีวิว</Link></p>
              </div>
              <div className="flex w-full gap-1">
                <p className="w-full">ประสบการณ์ : 5 ปี</p>
              </div>
            </div>
            <p className="text-cozy-blue-light self-start"><Verified className="mr-1" />บุคคลนี้ได้รับการยืนยันตัวตนแล้ว</p>
          </div>
        )}

        <Link onPress={expandToggle} size="sm" className="absolute right-3 bottom-[14px] hover:cursor-pointer">กดเพื่อดู</Link>
      </CardBody>
    </Card>
  );
}
