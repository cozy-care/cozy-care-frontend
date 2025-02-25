'use client'

import NavBar from "@/components/NavBar";
import {
  AccountBox,
  CalendarMonth,
  Edit,
  NavigateNext,
  Settings,
  History,
  HeadsetMic,
  PowerSettingsNew,
  LightMode,
  DarkMode,
  Favorite,
} from "@mui/icons-material";
import { Button, Switch, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    user_id: "dev-user-123",
    username: "devuser",
    email: "devuser@example.com",
    role: "admin",
    alias: "DevUser",
    profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s",
    status: "active",
  });
  const router = useRouter();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
          { withCredentials: true }
        );
        setUserData({
          ...response.data,
          profile_image: `${process.env.NEXT_PUBLIC_API_URL}${response.data.profile_image}`,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        window.alert("Failed to fetch user data. Using default dev data.");
      }
    };

    fetchUserData();
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (theme === "light") setDarkMode(false);
    else if (theme === "dark") setDarkMode(true);
  }, [theme]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("email");
      localStorage.removeItem("userID");

      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      window.alert("LOGOUT FAILED!");
    }
  };

  // Set document title
  useEffect(() => {
    document.title = "Profile - Cozy Care";
  }, []);

  // Role mapping
  const roleMapping: { [key: string]: string } = {
    "user": "ผู้ใช้งานทั่วไป",
    "caregiver": "ผู้ดูแล",
    "client": "ผู้ได้รับการดูแล",
  };

  if (!userData) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col items-center w-full px-3 gap-3">
        <div className="relative flex flex-col items-center justify-center w-full lg:w-[1000px] h-[250px]">
          <Switch
            size="lg"
            isSelected={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              setTheme(value ? "dark" : "light"); // Ensure theme updates properly
            }}
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? <DarkMode className={className} /> : <LightMode className={className} />
            }
            className="absolute right-0 top-3"
          />
          <div className="relative w-[110px] h-[110px] rounded-full">
            <Image
              alt="Chat profile"
              className="w-[150px] aspect-square rounded-full overflow-hidden object-cover object-center"
              src={userData.profile_image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            />
            <Button
              as={Link}
              href={`/profile/${userData.user_id}/edit`}
              className="absolute bottom-0 right-0 aspect-square z-10"
              color="primary"
              radius="full"
              isIconOnly
            >
              <Edit />
            </Button>
          </div>

          <p className="mt-3 font-bold text-xl">{userData.alias}</p>
          <p className="text-cozy-blue-light">{userData.email}</p>
        </div>

        <div className="flex flex-col gap-6 px-4 w-full sm:w-[400px] h-[550px]">
          <Button
            radius="full"
            className="flex justify-between shadow-lg bg-cozy-lightblue-light text-[#1F5670]"
            onPress={() => router.push(`/profile/${userData.user_id}/client`)}
          >
            <div className="flex gap-5 items-center">
              <AccountBox />
              <p className="font-bold text-base">สถานะผู้ใช้ : {roleMapping[userData.role] || userData.role}</p>
            </div>
            <NavigateNext />
          </Button>

          <Button
            isDisabled
            radius="full"
            className="flex justify-start shadow-lg bg-[#EFF0F0] text-black"
          >
            <div className="flex gap-5 items-center">
              <CalendarMonth />
              <p className="font-bold text-base">ตารางนัดหมาย</p>
            </div>
          </Button>


          <Button
            isDisabled
            radius="full"
            className="flex justify-start shadow-lg bg-[#EFF0F0] text-black"
          >
            <div className="flex gap-5 items-center">
              <Favorite />
              <p className="font-bold text-base">สิ่งที่ถูกใจ</p>
            </div>
          </Button>

          <Button
            as={Link}
            href="/profile/privacy_and_security"
            radius="full"
            className="flex justify-start shadow-lg bg-[#EFF0F0] text-black"
          >
            <div className="flex gap-5 items-center">
              <Settings />
              <p className="font-bold text-base">การตั้งค่าและความเป็นส่วนตัว</p>
            </div>
          </Button>

          <Button
            as={Link}
            href={`/profile/${userData.user_id}/history`}
            radius="full"
            className="flex justify-start shadow-lg bg-[#EFF0F0] text-black"
          >
            <div className="flex gap-5 items-center">
              <History />
              <p className="font-bold text-base">ประวัติการใช้งาน</p>
            </div>
          </Button>

          <Button
            as={Link}
            href="/profile/support"
            radius="full"
            className="flex justify-start shadow-lg bg-[#EFF0F0] text-black"
          >
            <div className="flex gap-5 items-center">
              <HeadsetMic />
              <p className="font-bold text-base">ความช่วยเหลือ</p>
            </div>
          </Button>

          <Button
            radius="full"
            className="flex justify-start shadow-lg bg-[#FFA5A5] text-black"
            onPress={handleLogout}
          >
            <div className="flex gap-5 items-center">
              <PowerSettingsNew />
              <p className="font-bold text-base">ออกจากระบบ</p>
            </div>
          </Button>
        </div>
      </div>
    </main>
  );
}
