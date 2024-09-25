"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { Button } from "@nextui-org/react";

interface RegisterFormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [formState, setFormState] = useState<RegisterFormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    document.title = "Register - Cozy Care";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formState;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response: AxiosResponse = await axios.post(
        "https://gold39.ce.kmitl.ac.th/api/auth/register",
        {
          username,
          email,
          password,
          role: "user", // Setting role as "user"
        }
      );

      if (response.status === 201) {
        // Redirect to login page
        router.push("/login");
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://gold39.ce.kmitl.ac.th/api/auth/google";
  };

  return (
    <div className="W-full flex min-h-[calc(100svh-3.5rem)]">
      <div className=" grow w-full lg:w-5/12 bg-slate-400 flex justify-end items-center">
        <div className="w-full lg:w-10/12 h-[600px] bg-slate-200 p-4 rounded-l-xl  flex flex-col justify-start items-center ">
          <h1 className="flex justify-center text-indigo-700">
            เริ่มต้นใช้งาน
          </h1>
          <h2 className="my-7">ทำไมต้องเลือกเรา?</h2>

          <ul className="sm:ml-5 flex flex-col gap-y-4 ">
            <li>
              <strong className="font-bold lg:text-lg">
                ผู้ดูแลที่เชื่อถือได้ :
              </strong>
              <p className="text-sm lg:text-medium">
                ค้นหาและจองผู้ดูแลสุขภาพที่มีประสบการณ์และได้รับการรับรอง
              </p>
            </li>
            <li>
              <strong className="font-bold lg:text-lg">ใช้งานง่าย :</strong>
              <p className="text-sm lg:text-medium">
                จองผู้ดูแลในไม่กี่ขั้นตอนผ่านแอปพลิเคชันของเรา
              </p>
            </li>
            <li>
              <strong className="font-bold lg:text-lg">
                การติดต่อที่สะดวก :
              </strong>
              <p className="text-sm lg:text-medium">
                ระบบแชทภายในแอปช่วยให้คุณติดต่อกับผู้ดูแลได้ตลอดเวลา
              </p>
            </li>
            <li>
              <strong className="font-bold lg:text-lg">รีวิวและคะแนน :</strong>
              <p className="text-sm lg:text-medium">
                ดูรีวิวจากผู้ใช้อื่นเพื่อเลือกผู้ดูแลที่เหมาะสม
              </p>
            </li>
            <li>
              <strong className="font-bold lg:text-lg">
                การสนับสนุนจากทีมงาน :
              </strong>
              <p className="text-sm lg:text-medium">
                พร้อมให้ความช่วยเหลือและคำปรึกษาตลอดการใช้งาน
                เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-2/3 grow lg:w-7/12 bg-slate-300 flex justify-start  items-center ">
        <form
          onSubmit={handleSubmit}
          className="w-max lg:w-11/12 h-[600px] bg-slate-100  rounded-r-xl justify-start "
        >
          <fieldset className=" flex-row justify-center items-center ">
            <h2 className=" flex justify-center text-3xl font-bold text-indigo-700 mt-4">
              ลงทะเบียน
            </h2>

            <div className=" flex flex-col justify-center items-center">
              {error && <p className="text-red-500">{error}</p>}
              <div className=" mb-2">
                <label
                  htmlFor="username"
                  className="block text-medium lg:text-lg font-bold text-gray-900"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="username"
                  value={formState.username}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5"
                  placeholder="ชื่อผู้ใช้"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block  text-medium lg:text-lg font-bold text-gray-900"
                >
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5"
                  placeholder="อีเมล"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block  text-medium lg:text-lg font-bold text-gray-900"
                >
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5"
                  placeholder="รหัสผ่าน"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="block  text-medium lg:text-lg font-bold text-gray-900"
                >
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5"
                  placeholder="ยืนยันรหัสผ่าน"
                  required
                />
              </div>
              <div className="flex text-sm gap-x-[485px] items-center  mt-3 ">
                <p>
                  <a href="#">มีบัญชีแล้ว [LogIn]</a>
                </p>
                <p></p>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <Button color="primary" className="text-lg w-[100px] h-[50px]">
                สมัคร
              </Button>
            </div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-5" />
              <span className="">หรือ</span>
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-5" />
            </div>
            <div className="flex justify-center mt-1">
              <button
                className="flex items-center bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={handleGoogleLogin}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>ลงทะเบียน ด้วย Google</span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
