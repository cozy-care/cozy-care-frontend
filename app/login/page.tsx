"use client";

import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

interface LoginCredentials {
  username: string;
  password: string;
}

async function loginUser(credentials: LoginCredentials): Promise<boolean> {
  try {
    const response: AxiosResponse = await axios.post(
      "https://gold39.ce.kmitl.ac.th/api/auth/login",
      credentials,
      { withCredentials: true }
    );
    return response.status === 200;
  } catch (error) {
    console.error("There was an error logging in!", error);
    return false;
  }
}

export default function Login() {
  const router = useRouter();

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem("user_name") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const success = await loginUser({ username, password });

    if (success) {
      console.log("Login successful!");
      router.push("/home");
    } else {
      console.log("Login failed");
    }
  };

  useEffect(() => {
    document.title = "Login - Cozy Care";
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "https://gold39.ce.kmitl.ac.th/api/auth/google";
  };

  return (
    <div className="flex h-screen  ">
      <div className="w-5/12 h-full bg-slate-400 flex justify-end items-center ">
        <div className="bg-slate-200 p-4 rounded-l-xl w-3/4 h-4/5 flex flex-col justify-center items-center ">
          <h1 className="flex justify-center text-indigo-700 font-bold">
            ยินดีต้อนรับกลับ
          </h1>
          <h2 className="my-7 text-lg ">
            กรุณาเข้าสู่ระบบเพื่อเริ่มต้นการดูแลสุขภาพที่ดีที่สุดสำหรับคุณและคนที่คุณรัก
          </h2>
          <img
            src="https://walfinch.com/wp-content/uploads/2023/04/nurse-comforting-elder-lady-2021-08-26-15-43-10-utc-1-768x512.jpg"
            alt="family"
            className="rounded-full w-[300px] h-[300px] flex justify-center"
          />
        </div>
      </div>

      <div className="w-7/12 h-auto bg-slate-300 flex justify-start items-center">
        <div className="bg-slate-100 p-4 rounded-r-xl w-4/5 h-4/5 flex justify-center">
          <form onSubmit={handleLogin}>
            <fieldset className="flex-row mt-11">
              <h2 className="flex justify-center text-3xl font-bold text-indigo-700 mb-3">
                เข้าสู่ระบบ
              </h2>

              <div
                id="userName-password"
                className="flex flex-col justify-center gap-1"
              >
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-xl font-medium text-gray-900"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ชื่อผู้ใช้"
                  required
                />

                <label
                  htmlFor="password"
                  className="block mb-2 text-xl font-medium text-gray-900"
                >
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="รหัสผ่าน"
                  required
                />
              </div>

              <div className="flex text-sm justify-between mt-3">
                <p>
                  <a href="#">ยังไม่มีบัญชีผู้ใช้? [สมัครสมาชิก]</a>
                </p>
                <p>
                  <a href="#">ลืมรหัสผ่าน? [กู้คืนรหัสผ่าน]</a>
                </p>
              </div>

              <div className="flex justify-center items-center mt-4">
                <Button
                  type="submit"
                  color="primary"
                  className="text-xl mt-6 w-[150px] font-bold"
                >
                  ยืนยัน
                </Button>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-5" />
                <span className="">หรือ</span>
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-5" />
              </div>
              <div className="flex justify-center mt-1">
                {/* google button*/}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                    <defs></defs>
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
                  <span>เข้าสู่ระบบ ด้วย Google </span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
