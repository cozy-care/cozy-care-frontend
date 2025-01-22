'use client'

import NavBar from "@/components/NavBar";
import { AccountBox, CalendarMonth, Edit, NavigateNext, Settings, History, HeadsetMic, PowerSettingsNew, LightMode, DarkMode } from "@mui/icons-material";
import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Profile() {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(Boolean);

  useEffect(() => {
    if (theme == 'light') setTheme('dark')
    else if (theme == 'dark') setTheme('light')
  }, [darkMode])

  useEffect(() => {
    document.title = "Profile - Cozy Care";

    if (theme == 'light') setDarkMode(false)
    else if (theme == 'dark') setDarkMode(true)
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <div className="grow flex flex-col items-center w-full px-3 gap-3">
        <div className="relative flex flex-col items-center justify-center w-full h-[250px]">
          <Switch
            size="lg"
            isSelected={darkMode}
            onValueChange={setDarkMode}
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? <DarkMode className={className} /> : <LightMode className={className} />
            }
            className="absolute right-0 top-3"
          />
          <div className="relative w-[110px] h-[110px] rounded-full bg-green-100">
            <Button
              href="/profile/1"
              className="absolute bottom-0 right-0 aspect-square"
              color="primary"
              radius="full"
              isIconOnly
            >
              <Edit />
            </Button>
          </div>

          <p className="mt-3 font-bold text-xl">example</p>
          <p className="text-cozy-blue-light">example@hotmail.com</p>
        </div>

        <div className="flex flex-col gap-8 px-4 w-full h-[550px]">
          <Button radius="full" className="flex justify-between shadow-lg bg-cozy-lightblue-light text-[#1F5670]">
            <div className="flex gap-5 items-center">
              <AccountBox />
              <p className="font-bold text-base">สถานะผู้ใช้ : </p>
            </div>
            <NavigateNext />
          </Button>

          <Button radius="full" className="flex justify-start shadow-lg bg-[#EFF0F0] text-black">
            <div className="flex gap-5 items-center">
              <CalendarMonth />
              <p className="font-bold text-base">ตารางนัดหมาย</p>
            </div>
          </Button>

          <Button radius="full" className="flex justify-start shadow-lg bg-[#EFF0F0] text-black">
            <div className="flex gap-5 items-center">
              <Settings />
              <p className="font-bold text-base">การตั้งค่าและความเป็นส่วนตัว</p>
            </div>
          </Button>

          <Button radius="full" className="flex justify-start shadow-lg bg-[#EFF0F0] text-black">
            <div className="flex gap-5 items-center">
              <History />
              <p className="font-bold text-base">ประวัติการใช้งาน</p>
            </div>
          </Button>

          <Button radius="full" className="flex justify-start shadow-lg bg-[#EFF0F0] text-black">
            <div className="flex gap-5 items-center">
              <HeadsetMic />
              <p className="font-bold text-base">ความช่วยเหลือและการสนับสนุน</p>
            </div>
          </Button>

          <Button radius="full" className="flex justify-start shadow-lg bg-[#FFA5A5] text-black">
            <div className="flex gap-5 items-center">
              <PowerSettingsNew />
              <p className="font-bold text-base">ออกจากระบบ</p>
            </div>
          </Button>

        </div>
      </div>
    </main >
  )
}