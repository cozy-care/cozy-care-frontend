"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login - Cozy Care";
  }, []);
  return (
    <div className="flex w-screen h-screen static">
      <div className="w-5/12 h-full bg-slate-400 static ">
        <div className="bg-slate-200 p-4 rounded-l-xl w-3/4 h-4/5 relative top-24 left-40 flex flex-col justify-center items-center">
          <h1 className="flex justify-center text-indigo-700 ">
            ยินดีต้อนรับกลับ
          </h1>
          <h2 className="my-7 ">
            กรุณาเข้าสู่ระบบเพื่อเริ่มต้นการดูแลสุขภาพที่ดีที่สุดสำหรับคุณและคนที่คุณรัก
          </h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJK8rMb-7B6KD_im3sQCJlQ7wH4P0Ogzc8XQ&s"
            alt="family"
            className="rounded-full w-[300px] h-[300px] flex justify-center"
          />
        </div>
      </div>
      <div className="w-7/12 h-auto bg-slate-300 static">
        <div className="bg-slate-100 p-4 rounded-r-xl relative top-24 w-4/5 h-4/5 flex justify-center items-center">
          <form>
            <fieldset className="flex-row ">
              <legend className="text-center my-7 ">
                <h2 className="flex-col justify-center text-3xl font-bold text-indigo-700">
                  เข้าสู่ระบบ
                </h2>
              </legend>
              <div className="m-auto">
                <label
                  htmlFor="user_name"
                  className=" block mb-2 text-sm font-medium text-gray-900 "
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="user_name"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="ชื่อผู้ใช้"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="รหัสผ่าน"
                  required
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  ยืนยัน
                </button>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-5" />
                <span className="">หรือ</span>
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-5" />
              </div>
              <div className="flex justify-center mt-1">
                <button className="flex items-center bg-white  border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg
                    className="h-6 w-6 mr-2"
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="800px"
                    height="800px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                  >
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
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
