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
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      credentials,
      { withCredentials: true }
    );
    return response.status === 200;
  } catch (error) {
    console.error("There was an error logging in!", error);
    return false;
  }
}

async function checkAuth(router: any): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      router.push("/home");
    }
  } catch (error) {
    console.log("User not logged in or authentication failed.");
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
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  checkAuth(router);
  return (
    <div className="W-full  lg:flex  min-h-[calc(100svh-3.5rem)] overflow-hidden">
      <div className=" w-full  h-full justify-center items-center lg:w-5/12 lg:h-auto bg-slate-400  lg:flex lg:justify-end lg:items-center">
        <div className="w-full h-full lg:w-[85%] lg:h-[80%] bg-slate-200 p-4 lg:rounded-l-xl  flex flex-col justify-start items-center">
          <h1 className="mt-2 lg:mt-16 text-3xl font-bold lg:text-4xl flex justify-center text-indigo-700">
            ยินดีต้อนรับกลับ
          </h1>
          <h2 className=" w-[75%] h-auto flex flex-col  text-center justify-center items-center my-7 text-lg lg:text-2xl">
            กรุณาเข้าสู่ระบบเพื่อเริ่มต้นการดูแลสุขภาพที่ดีที่สุดสำหรับคุณและคนที่คุณรัก
          </h2>
          <img
            src="https://walfinch.com/wp-content/uploads/2023/04/nurse-comforting-elder-lady-2021-08-26-15-43-10-utc-1-768x512.jpg"
            alt="family"
            className="rounded-full w-[50%] h-[50%] flex justify-center"
          />
        </div>
      </div>

      <div className="grow lg:w-7/12 justify-center items-center bg-slate-300 flex lg:justify-start  lg:items-center ">
        <form
          onSubmit={handleLogin}
          className="w-full h-full lg:w-[89%] lg:h-[80%] bg-slate-100  lg:rounded-r-xl justify-start "
        >
          <h2 className="mt-5 lg:mt-20 flex items-center justify-center text-3xl lg:text-4xl font-bold text-indigo-700 ">
            เข้าสู่ระบบ
          </h2>

          <div className="grow w-full h-auto flex flex-col justify-center items-center lg:justify-center lg:items-center mt-6 lg:mt-8">
            <div id="userName-password" className="mb-2 lg:mb-1">
              <label
                htmlFor="user_name"
                className="block text-medium lg:text-xl font-bold text-gray-900"
              >
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="lg:text-lg w-[380px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[600px] p-2.5"
                placeholder="ชื่อผู้ใช้"
                required
              />

              <label
                htmlFor="password"
                className=" mt-4 block text-medium lg:text-xl font-bold text-gray-900"
              >
                รหัสผ่าน
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="lg:text-lg w-[380px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[600px] p-2.5"
                placeholder="รหัสผ่าน"
                required
              />
            </div>

            <div className="flex text-sm lg:gap-x-[160px] gap-x-[40px] mt-3 lg:mt-2 ">
              <p>
                <a className="text-sm lg:text-lg hover:text-blue-600" href="#">
                  ยังไม่มีบัญชีผู้ใช้? [สมัครสมาชิก]
                </a>
              </p>
              <p>
                <a className="text-sm lg:text-lg hover:text-blue-600" href="#">
                  ลืมรหัสผ่าน? [กู้คืนรหัสผ่าน]
                </a>
              </p>
            </div>

            <div className="flex justify-center mt-2">
              <Button
                color="primary"
                type="submit"
                className="text-lg w-[200px] h-[50px]  px-6 py-2 mt-4 lg:mt-6"
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
                className="mb-20 lg:mb-0  flex items-center bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
          </div>
        </form>
      </div>
    </div>
  );
}
