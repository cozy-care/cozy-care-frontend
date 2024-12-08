"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chat,
  Notifications,
  Person,
  MoreHoriz,
  ZoomOutMap,
  Menu,
} from "@mui/icons-material";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import NotiCard from "./NotiCard";
import ChatCard from "./ChatCard";
import { useRouter } from "next/navigation";
import moment from "moment";
import ThemeToggle from "./ThemeToggle";

// import SelectRole from "@/app/home/edit/role/page";
// import PatientIDProfile from "@/app/patient/[patientID]/edit/page";
// import CaregiverIDProfile from "@/app/caregiver/[caregiverID]/edit/page";

interface ChatCards {
  chat_id: string;
  profile_image: string; // URL for the other user's profile image
  name: string; // Other user's name
  lastMessage: string;
  lastMessageTime: number;
}

export const chatMock: ChatCards[] = [
  {
    chat_id: '1',
    profile_image: "https://via.placeholder.com/150",
    name: 'John ชาวไร่',
    lastMessage: 'yo',
    lastMessageTime: 200,
  },
  {
    chat_id: '2',
    profile_image: "https://via.placeholder.com/150",
    name: 'Sarah เมืองกรุง',
    lastMessage: 'Hello!',
    lastMessageTime: 400,
  },
  {
    chat_id: '3',
    profile_image: "https://via.placeholder.com/150",
    name: 'Mike เขาค้อ',
    lastMessage: 'How are you?',
    lastMessageTime: 300,
  },
  {
    chat_id: '4',
    profile_image: "https://via.placeholder.com/150",
    name: 'Sophia ใกล้คลอง',
    lastMessage: 'See you soon!',
    lastMessageTime: 150,
  },
  {
    chat_id: '5',
    profile_image: "https://via.placeholder.com/150",
    name: 'Tommy ทอมซ่า',
    lastMessage: 'Haha, that was funny!',
    lastMessageTime: 600,
  },
  {
    chat_id: '6',
    profile_image: "https://via.placeholder.com/150",
    name: 'Emily อารมณ์ดี',
    lastMessage: 'Goodnight!',
    lastMessageTime: 50,
  },
  {
    chat_id: '7',
    profile_image: "https://via.placeholder.com/150",
    name: 'Liam นักเลง',
    lastMessage: 'Let’s grab coffee',
    lastMessageTime: 800,
  },
  {
    chat_id: '8',
    profile_image: "https://via.placeholder.com/150",
    name: 'Olivia เด็กดี',
    lastMessage: 'I’ll call you later',
    lastMessageTime: 120,
  },
  {
    chat_id: '9',
    profile_image: "https://via.placeholder.com/150",
    name: 'Jake ขาลุย',
    lastMessage: 'What’s the plan?',
    lastMessageTime: 550,
  },
  {
    chat_id: '10',
    profile_image: "https://via.placeholder.com/150",
    name: 'Emma แม่บ้าน',
    lastMessage: 'Thanks!',
    lastMessageTime: 90,
  },
];

export default function NavBar() {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatCards, setChatCards] = useState<ChatCards[]>([]);

  const handleChatCardClick = (chatId: string) => {
    router.push(`/messages/${chatId}`);
  };

  // const SelectRole = () => {
  //   router.push("/home/edit/role/page"); // ไปที่หน้า SelectRole.tsx
  // };

  // const PatientIDProfile = () => {
  //   router.push("/patient/[patientID]/edit/page");
  // };

  // const CaregiverIDProfile = () => {
  //   router.push("/caregiver/[caregiverID]/edit/page");
  // };

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        // Fetch chat IDs
        const chatIdResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/chat/me`,
          { withCredentials: true }
        );
        const chatIds: any[] = chatIdResponse.data;

        // Fetch chat details for each chat ID
        const chatDetails = await Promise.all(
          chatIds.map(async (chatId) => {
            const userResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/user/getOtherBychatId/${chatId.chat_id}`,
              { withCredentials: true }
            );

            const messagesResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/chat/${chatId.chat_id}/lastMessage/${userResponse.data.user_id}`,
              { withCredentials: true }
            );

            const now = moment();
            const lastMessageMoment = moment(
              messagesResponse.data.lastMessageTime
            );

            const timeDifference = now.diff(lastMessageMoment, "seconds");

            return {
              chat_id: chatId.chat_id,
              profile_image: userResponse.data.profile_image,
              name: userResponse.data.alias,
              lastMessage: messagesResponse.data.lastMessageContent,
              lastMessageTime: timeDifference,
            };
          })
        );

        setChatCards(chatDetails);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target && !target.closest(".menu-button") && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    fetchChatData();

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="dark:bg-dark flex justify-between h-14 pl-4 w-full sticky top-0 bg-white border-b-[1px] border-b-slate-400 z-[99]">
      {/* Left side */}
      <Link href="/home" className="flex items-center space-x-3">
        <Image src="/favicon.ico" width={40} height={40} alt="Logo  " />
        <div className="font-bold text-lg dark:text-white">Cozy Care</div>
      </Link>

      {/* Right side */}
      {pageTitle == "Welcome - Cozy Care" ? (
        <div className="flex items-center pr-4">
          <Link
            href="/login"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {/* Hamburger menu items for mobile */}
          {menuOpen && (
            <div className="dark:text-white absolute top-14 left-0 w-full bg-white dark:bg-dark shadow-md md:hidden">
              <Link
                type="button"
                href="/home"
                className=" block px-5 py-2 hover:text-blue-500 "
                onClick={() => setMenuOpen(false)}
              >
                หน้าหลัก
              </Link>
              <Link
                type="button"
                href="/caregiver"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ค้นหาผู้ดูแล
              </Link>
              <Link
                type="button"
                href="/patient"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ค้นหาผู้รับการดูแล
              </Link>
              <Link
                type="button"
                href="/announcement"
                className="block px-5 py-2 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                ประชาสัมพันธ์
              </Link>
              <div className="block px-4 py-2">
                <ThemeToggle></ThemeToggle>
              </div>
            </div>
          )}

          {/* Menu items for larger screens (md and above) */}
          <div className="dark:text-white hidden md:flex justify-center items-center">
            <Link
              type="button"
              href="/home"
              className="px-5 py-2 hover:text-blue-500"
            >
              หน้าหลัก
            </Link>
            <Link
              type="button"
              href="/caregiver"
              className="px-5 py-2 hover:text-blue-500"
            >
              ค้นหาผู้ดูแล
            </Link>
            <Link
              type="button"
              href="/patient"
              className="px-5 py-2 hover:text-blue-500"
            >
              ค้นหาผู้รับการดูแล
            </Link>
            <Link
              type="button"
              href="/announcement"
              className="px-5 py-2 hover:text-blue-500"
            >
              ประชาสัมพันธ์
            </Link>
            <div className="px-3 py-2">
              <ThemeToggle></ThemeToggle>
            </div>
          </div>
          {/* CHAT */}
          <Dropdown disableAnimation={true}>
            <DropdownTrigger>
              <button
                type="button"
                className="dark:text-white px-5 py-2 hover:text-blue-500"
              >
                <Chat sx={{ fontSize: 30 }} />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              closeOnSelect={false}
              className="h-[90svh]"
            >
              <DropdownItem
                isReadOnly
                key="header"
                className="opacity-100 cursor-default"
              >
                <div className="flex justify-between w-[400px]">
                  <h2 className=" text-2xl font-semibold">แชท</h2>
                  <div className="flex gap-4">
                    <button type="button" className="hover:text-blue-500">
                      <MoreHoriz sx={{ fontSize: 30 }} />
                    </button>
                    <button
                      onClick={() => router.push("/messages")}
                      type="button"
                      className="hover:text-blue-500"
                    >
                      <ZoomOutMap sx={{ fontSize: 30 }} />
                    </button>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="sub"
                className="opacity-100 cursor-default"
              >
                <div className="h-[82vh] overflow-y-auto">
                  {chatCards.map((chat) => (
                    <ChatCard
                      key={chat.chat_id}
                      imageUrl={chat.profile_image}
                      name={chat.name}
                      lastMessage={chat.lastMessage}
                      lastMessageTime={chat.lastMessageTime}
                      onClick={() => handleChatCardClick(chat.chat_id)}
                    />
                  ))}
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* NOTIFICATION */}
          <Dropdown disableAnimation={true}>
            <DropdownTrigger>
              <button
                type="button"
                className="dark:text-white px-5 py-2 hover:text-blue-500"
              >
                <Notifications sx={{ fontSize: 30 }} />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              closeOnSelect={false}
              className="h-[90svh]"
            >
              <DropdownItem
                isReadOnly
                key="header"
                className="opacity-100 cursor-default"
              >
                <div className="flex justify-between w-[400px]">
                  <h2 className=" text-2xl font-semibold">การแจ้งเตือน</h2>
                  <button type="button" className="hover:text-blue-500">
                    <MoreHoriz sx={{ fontSize: 30 }} />
                  </button>
                </div>
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="sub"
                className="opacity-100 cursor-default"
              >
                <div className="h-[82vh] overflow-y-auto">
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                  <NotiCard imageUrl="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" />
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* PROFILE */}
          <Link
            type="button"
            href="/home/edit/role"
            className="px-4 py-2 dark:text-white hover:text-blue-500"
          >
            <Person sx={{ fontSize: 35 }} />
          </Link>

          {/* Hamburger menu icon for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-5 py-2 "
          >
            <Menu className="text-3xl dark:text-white" />
          </button>
        </div>
      )}
    </nav>
  );
}
