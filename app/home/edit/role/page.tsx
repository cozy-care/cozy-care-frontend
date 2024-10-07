"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import { Avatar, Button, Card, Image, Link } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // State to store user data
  const [alias, setAlias] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  // Fetch user data and check authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response: AxiosResponse<{ alias: string; email: string; role: string }> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, // Use environment variable
          {
            withCredentials: true, // Send cookies for authentication
          }
        );
        setAlias(response.data.alias);
        setEmail(response.data.email);
        setRole(response.data.role);

        // Redirect to /home/edit if the role is not "user"
        if (response.data.role !== "user") {
          router.push("/home/edit");
        }
      } catch (error) {
        console.error("User not authenticated or failed to fetch data:", error);
        router.push("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuthentication();
  }, [router]);

  // Set document title on mount
  useEffect(() => {
    document.title = "Edit Profile New User - Cozy Care";
  }, []);

  // Handle role update
  const handleRoleUpdate = async (newRole: string) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        { role: newRole },
        {
          withCredentials: true,
        }
      );
      setRole(newRole);
      router.push("/home/edit"); // Redirect to /home/edit after successful update
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex justify-center items-center mt-[-40px]">
        <div className="flex flex-col gap-2 w-[95%]">
          <div className="flex gap-8 w-full h-[80vh]">
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-[150px] h-auto justify-center items-center">
                  <Avatar
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp7SBv7iqt9a63k7ghTSJBMPKZF03MpmhDg&s"}
                    className="w-full h-full border-2 border-blue-400 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-end gap-2 w-2/4 h-full">
                  <div className="content-center font-extrabold text-2xl">
                    {alias}
                  </div>
                  <p className="content-center">{email}</p>
                </div>

                <div className="flex justify-end w-1/4 h-full">
                  <Button isIconOnly className="w-[50px] bg-blue-300">
                    <Edit />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col w-full h-5/6 justify-between">
                <section className="flex flex-col gap-2">
                  <button className="bg-slate-500 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    ยังไม่ได้เลือกสถานะผู้ใช้งาน
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    สถานะ : แพ็กเกจฟรี
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    ตารางนัดหมาย
                  </button>
                  <button className="bg-slate-400 hover:bg-slate-700 text-start text-white font-medium py-3 px-4 rounded-full">
                    คะแนนรีวิว
                  </button>
                </section>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col w-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4 rounded-t-2xl">
                      การตั้งค่าและความเป็นส่วนตัว
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4">
                      ประวัติการใช้งาน
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4">
                      ประวัติการซื้อ
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-start text-white font-medium py-3 px-4 rounded-b-2xl">
                      ความช่วยเหลือและการสนับสนุน
                    </button>
                  </div>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full">
                    ออกจากระบบ
                  </button>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <section>
                <h2 className="flex flex-col justify-center items-center text-3xl font-bold mt-10">
                  กรุณาเลือกสถานะผู้ใช้งาน
                </h2>
                <div className="flex justify-around items-center mt-20">
                  {/* caregiver */}
                  <div
                    onClick={() => handleRoleUpdate("caregiver")}
                    className="flex flex-col justify-center items-center gap-5 cursor-pointer"
                  >
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="caregiver role"
                      src="https://coahc.org/wp-content/uploads/hands.png"
                    />
                    <p className="text-2xl font-bold">ผู้ดูแล</p>
                  </div>

                  {/* patient */}
                  <div
                    onClick={() => handleRoleUpdate("patient")}
                    className="flex flex-col justify-center items-center gap-5 cursor-pointer"
                  >
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="patient role"
                      src="https://freerangestock.com/sample/149048/hands-woman-patient-in-hospital-bed.jpg"
                    />
                    <p className="text-2xl font-bold">ผู้รับการดูแล</p>
                  </div>

                  {/* nutritionist (no role change) */}
                  <div className="flex flex-col justify-center items-center gap-5">
                    <Image
                      isZoomed
                      width={300}
                      height={400}
                      alt="nutritionist role"
                      src="https://www.bedee.com/wp-content/uploads/2023/12/consult-with-dietitian.png"
                    />
                    <p className="text-2xl font-bold">นักโภชนาการ</p>
                  </div>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
