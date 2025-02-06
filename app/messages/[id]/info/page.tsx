'use client';

import { Button, Link, Image, Spinner } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowBackIosNew, MoreHoriz, NotificationsNone, Person, Search, Verified } from '@mui/icons-material';
import axios from "axios";

// Define types
interface User {
  userId: string;
  alias: string;
  profileImage: string;
}

export default function Info() {
  const router = useRouter();
  const { id: chatId } = useParams() as { id: string };
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Info - Cozy Care";

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getOtherBychatId/${chatId}`, {
          withCredentials: true, // Ensure token is included
        });

        setUser({
          userId: response.data.user_id,
          alias: response.data.alias || "ไม่ทราบชื่อ",
          profileImage: response.data.profile_image || "https://www.civictheatre.ie/wp-content/uploads/2016/05/blank-profile-picture-973460_960_720.png",
        });
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError("ไม่สามารถโหลดข้อมูลผู้ใช้");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [chatId]);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center gap-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-3 w-full h-[50px]">
          <Button as={Link} onPress={() => router.back()} className="text-cozy-green-light" isIconOnly radius="full" variant="light">
            <ArrowBackIosNew />
          </Button>
        </div>

        {/* Profile Section */}
        {loading ? (
          <Spinner className="mt-10" color="primary" />
        ) : error ? (
          <p className="text-red-500 mt-5">{error}</p>
        ) : (
          <div className="flex flex-col gap-4 items-center mt-5">
            <Image
              alt="Chat profile"
              className="w-[150px] aspect-square rounded-full overflow-hidden h-full object-cover object-center"
              src={user?.profileImage}
            />
            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">{user?.alias}</p>
              <Verified className="text-cozy-green-light" />
            </div>
          </div>
        )}

        {/* Buttons row */}
        <div className="flex gap-8">
          <Button as={Link} href={`/messages/${chatId}/info/details`} className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <Person style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <Search style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <NotificationsNone style={{ fontSize: 30 }} />
          </Button>
          <Button className="text-cozy-green-light w-14 h-auto aspect-square" isIconOnly radius="full" variant="light">
            <MoreHoriz style={{ fontSize: 30 }} />
          </Button>
        </div>

        {/* Long Buttons column */}
        <div className="flex flex-col items-center gap-4 w-[90%]">
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            สื่อ, ไฟล์และลิงค์
          </Button>
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            ความเป็นส่วนตัวและความปลอดภัย
          </Button>
          <Button radius="full" className="flex justify-start w-full shadow-md bg-[#EFF0F0] text-black font-bold text-base">
            รายงานปัญหาทางเทคนิค
          </Button>
        </div>
      </div>

      <footer className="w-full h-[180px] bg-cozy-lightblue-light" />
    </main>
  );
}