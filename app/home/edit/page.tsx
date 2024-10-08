"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import { Avatar, Button, Card } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // State to store user data
  const [alias, setAlias] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null); // Store profile image URL
  const [imageFile, setImageFile] = useState<File | null>(null); // Store image file

  // Handle image selection
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file); // Save image file for upload
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageUrl(reader.result as string); // Preview image
      };
      reader.readAsDataURL(file);
    }
  };

  // Fetch user data and check authentication
  useEffect(() => {
    document.title = "Edit Profile - Cozy Care";

    const checkAuthentication = async () => {
      try {
        const response: AxiosResponse<{
          alias: string;
          email: string;
          username: string;
          phone: string;
          role: string;
          profile_image: string;
        }> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, // Use environment variable
          {
            withCredentials: true, // Send cookies for authentication
          }
        );

        const imageURL = `http://localhost:3333${response.data.profile_image}`;

        // Populate the state with user data from the response
        setAlias(response.data.alias);
        setEmail(response.data.email);
        setUsername(response.data.username);
        setPhoneNumber(response.data.phone);
        setRole(response.data.role);
        setProfileImageUrl(imageURL || ""); // Profile image URL
      } catch (error) {
        console.error("User not authenticated or failed to fetch data:", error);
        router.push("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuthentication();
  }, [router]);

  // Handle form submission to upload image and update profile
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let uploadedImageUrl = profileImageUrl;

    // If a new image is selected, upload it
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload`, // API URL for image upload
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        uploadedImageUrl = uploadResponse.data.filePath; // Use uploaded file URL
      } catch (error) {
        console.error("Error uploading image:", error);
        return; // Stop if image upload fails
      }
    }

    // Update the user profile with the new data
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        {
          alias,
          email,
          phone: phoneNumber,
          profile_image: uploadedImageUrl, // Update profile image
        },
        {
          withCredentials: true, // Send cookies for authentication
        }
      );

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Function to display role in Thai based on API data
  const getRoleDisplay = (role: string | null) => {
    switch (role) {
      case "caregiver":
        return "ผู้ดูแล";
      case "patient":
        return "ผู้รับการดูแล";
      default:
        return "ยังไม่ได้เลือกสถานะผู้ใช้งาน";
    }
  };

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex justify-center items-center mt-[-40px]">
        <div className="flex flex-col gap-2 w-[95%]">
          <div className="flex gap-8 w-full h-[80vh]">
            {/* Sidebar with Profile Information */}
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-[150px] h-auto justify-center items-center">
                  <Avatar
                    src={
                      profileImageUrl ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp7SBv7iqt9a63k7ghTSJBMPKZF03MpmhDg&s"
                    }
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
                    {getRoleDisplay(role)}
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

            {/* Main Profile Editing Area */}
            <Card className="flex flex-col w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <section>
                <h2 className="flex flex-col justify-center items-center text-2xl font-bold">
                  แก้ไขโปรไฟล์
                </h2>
                <form onSubmit={handleSubmit}>
                  <fieldset className="flex flex-col justify-center items-center mt-4">
                    <div className="w-[150px] h-[150px] rounded-full border-red-200 border-2">
                      <label htmlFor="imageUpload">
                        {profileImageUrl ? (
                          <img
                            src={profileImageUrl}
                            alt="Uploaded"
                            className="w-full h-full object-cover object-center cursor-pointer rounded-full"
                          />
                        ) : (
                          <img
                            src="https://www.shutterstock.com/image-vector/upload-icon-vector-web-computer-260nw-1924011959.jpg"
                            alt="download"
                            className="w-full h-full object-cover object-center cursor-pointer rounded-full"
                          />
                        )}
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                      </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <div>
                        <label htmlFor="alias" className="block mb-2 text-sm font-medium text-gray-900">
                          นามแฝง
                        </label>
                        <input
                          type="text"
                          id="alias"
                          value={alias ?? ""}
                          onChange={(e) => setAlias(e.target.value)}
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                          placeholder="นามแฝง"
                        />
                      </div>

                      <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                        ชื่อผู้ใช้
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={username ?? ""}
                        disabled
                        className="h-auto w-[500px] bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-not-allowed"
                      />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email ?? ""}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                          placeholder="อีเมล"
                        />
                      </div>

                      <div>
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          value={phoneNumber ?? ""}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="h-auto w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                          placeholder="เบอร์โทรศัพท์"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-10 mt-6">
                      <Button color="default" className="w-[130px]" type="reset">
                        ยกเลิก
                      </Button>
                      <Button color="primary" className="w-[130px]" type="submit">
                        บันทึก
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}