"use client";

import { Avatar, Button, Card } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";

export default function PatientID() {
  useEffect(() => {
    document.title = "*Patient Name* - Cozy Care";
  }, []);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="grow flex justify-center items-center mt-[-40px]">
        <div className="flex flex-col gap-2 w-[95%]">
          <h1 className="self-end">เริ่มต้นการดูแลครอบครัวของคุณ</h1>

          <div className="flex gap-8 w-full h-[80vh]">
            <Card className="flex flex-col gap-4 w-1/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div className="flex w-full h-1/6">
                <div className="flex w-1/4 h-full justify-center items-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-full h-auto border-2 border-blue-400"
                  />
                </div>

                <div className="flex flex-col justify-center items-end gap-2 w-2/4 h-full">
                  <div className="content-center font-extrabold text-2xl">
                    DisplayName
                  </div>
                  <p className="content-center">xxxxxx@gmail.com</p>
                </div>

                <div className="flex justify-end w-1/4 h-full">
                  <Button isIconOnly className="w-[50px] bg-blue-300">
                    <Edit />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="w-3/4 h-full p-4 bg-blue-100 rounded-2xl shadow-lg">
              <div>
                <label htmlFor="imageUpload">
                  {imageSrc ? (
                    <img src={imageSrc} alt="Uploaded" style={{ width: '100px', cursor: 'pointer' }} />
                  ) : (
                    <div style={{ width: '100px', height: '100px', border: '1px solid #ccc', cursor: 'pointer' }}>
                      Click to upload
                    </div>
                  )}
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
