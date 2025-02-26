'use client';

import { Button, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Slider, useDisclosure } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import CaregiverCard from "./CaregiverCard";
import { caregiverMock } from "./caregiverMock";
import { FilterAlt, Search, StarBorderRounded, StarRounded } from "@mui/icons-material";

interface CaregiverData {
  user_id: string;
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  want_client_type?: string;
  more_skill?: string;
  available_time?: string;
  distance_km?: number;
  height?: number;
  weight?: number;
  study_experience?: string;
  price?: string;
  used_language?: string;
  experience?: string;
}

export default function Caregiver() {
  const [caregivers, setCaregivers] = useState<CaregiverData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.title = "Caregiver - Cozy Care";

    // Fetch caregiver data
    const fetchCaregivers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order/caregiver`);
        if (!response.ok) {
          throw new Error("Failed to fetch caregivers");
        }
        const data = await response.json();

        const formattedData = data.map((caregiver: any) => ({
          ...caregiver
        }));

        setCaregivers(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCaregivers();
  }, []);

  const filteredCaregivers = caregivers.filter((data) =>
    data.firstname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center mb-4 lg:w-[1000px] lg:mx-auto">
        <div className="w-full h-max">
          <Image
            alt="Caregiver background image"
            src="https://bloximages.chicago2.vip.townnews.com/goskagit.com/content/tncms/assets/v3/editorial/1/7c/17c723ea-60fd-11ef-b85b-7b4fc4959607/66c7fd703b8c5.image.jpg?resize=1035%2C691"
            width="100%"
            height={150}
            radius="none"
            className="object-cover object-center"
          />
        </div>

        <div className="flex justify-center items-center gap-3 py-2 sticky top-[111px] w-full h-max z-[99] transition bg-white dark:bg-cozy-background-dark">
          <Link href="/caregiver/add" className="w-max text-sm">เพิ่มข้อมูลผู้ดูแล</Link>
          <Input placeholder="ค้นหาผู้ดูแล" size="sm" value={searchTerm} onValueChange={setSearchTerm} isClearable startContent={<Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />} className="w-1/2" />

          <Link isDisabled onPress={onOpen} type="button" className="text-cozy-green-light dark:text-cozy-blue-dark hover:cursor-pointer">
            <FilterAlt sx={{ fontSize: 25 }} />
          </Link>
        </div>

        <div className="flex flex-col w-full items-center gap-4">
          {filteredCaregivers.map((data, index) => (
            <CaregiverCard
              key={index}
              user_id={data.user_id}
              name={`${data.firstname} ${data.lastname}`} // Full name
              imgUrl={data.profile_image} // Certification image as the profile image
              service={data.want_client_type} // Service is the "expert" field
              skill={data.more_skill} // Fixed skill
              dateReady={data.available_time} // Available time
              distance={data.distance_km} // Fixed distance
              height={data.height}
              weight={data.weight}
              study={data.study_experience}
              price={data.price}
              used_language={data.used_language}
              experience={data.experience}
            />
          ))}
        </div>
      </div>


      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">กรองการค้นหา</ModalHeader>
              <ModalBody className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p>ระยะห่าง (กิโลเมตร)</p>
                  <div className="shadow-lg p-4 rounded-xl">
                    <Slider
                      className="max-w-md"
                      defaultValue={[0, 10]}
                      label=" "
                      maxValue={100}
                      minValue={0}
                      marks={[
                        {
                          value: 0,
                          label: "0",
                        },
                        {
                          value: 100,
                          label: "100",
                        },
                      ]}
                      step={1}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p>บริการที่ต้องการ</p>
                  <div className="flex flex-col shadow-lg p-4 gap-4 rounded-xl">
                    <div className="flex flex-row gap-2">
                      <Button radius="full" color="primary" className="w-1/3">ดูแลผู้สูงอายุ</Button>
                      <Button radius="full" color="primary" className="w-1/3" variant="faded">ดูแลผู้ป่วยติดเตียง</Button>
                      <Button radius="full" color="primary" className="w-1/3">ดูแลเด็กเล็ก</Button>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Button radius="full" color="primary" className="w-1/2">พาไปโรงพยาบาล</Button>
                      <Button radius="full" color="primary" className="w-1/2">ขับรถไปส่งตามที่ระบุ</Button>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col gap-1">
                  <p>รีวิวขั้นต่ำ</p>
                  <div className="flex flex-row justify-between shadow-lg p-4 gap-2 rounded-xl">
                    <Link className="flex flex-col items-center">
                      <StarRounded className="text-cozy-green-light w-[60px] h-auto" />
                      <p className="text-black dark:text-white -mt-[7px]">1</p>
                    </Link>
                    <Link className="flex flex-col items-center">
                      <StarRounded className="text-cozy-green-light w-[60px] h-auto" />
                      <p className="text-black dark:text-white -mt-[7px]">2</p>
                    </Link>
                    <Link className="flex flex-col items-center">
                      <StarRounded className="text-cozy-green-light w-[60px] h-auto" />
                      <p className="text-black dark:text-white -mt-[7px]">3</p>
                    </Link>
                    <Link className="flex flex-col items-center">
                      <StarBorderRounded className="text-cozy-green-light w-[60px] h-auto" />
                      <p className="text-black dark:text-white -mt-[7px]">4</p>
                    </Link>
                    <Link className="flex flex-col items-center">
                      <StarBorderRounded className="text-cozy-green-light w-[60px] h-auto" />
                      <p className="text-black dark:text-white -mt-[7px]">5</p>
                    </Link>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  ยืนยัน
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Footer />
    </main>
  );
}
