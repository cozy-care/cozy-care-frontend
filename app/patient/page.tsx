'use client';

import { Image, Input, Link, useDisclosure } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import axios from 'axios';
import { FilterAlt, Search } from "@mui/icons-material";
import { patientMock } from "./PatientMock";

interface PatientData {
  user_id: string;
  firstname: string;
  lastname: string;
  profile_image: string;
  client_type: string;
  con_dis: string;
  available_time: string;
}

export default function Patient() {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.title = "Patient - Cozy Care";

    // Fetch patient data from API using axios
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/order/client`);
        const data = response.data;

        // Map the data to fit the PatientData structure
        const mappedPatients = data.map((order: any) => ({
          user_id: order.user_id,
          firstname: order.firstname,
          lastname: order.lastname,
          profile_image: order.profile_image,
          client_type: order.client_type,
          con_dis: order.con_dis,
          available_time: `${order.start_time} - ${order.end_time}`, // Format available time
        }));

        setPatients(mappedPatients);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);
  
  const filteredPatients = patients.filter((data) =>
    data.firstname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div className="grow flex flex-col items-center mb-4 lg:w-[1000px] lg:mx-auto">
        <div className="w-full h-max">
          <Image
            alt="Patient background image"
            src="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/03/web3-woman-elder-grandmother-sick-hospital-shutterstock_590369135.jpg"
            width="100%"
            height={150}
            radius="none"
            className="object-cover object-center"
          />
        </div>

        <div className="flex justify-center items-center gap-3 py-2 sticky top-[111px] w-full h-max z-[99] transition bg-white dark:bg-cozy-background-dark">
          <Link href="/patient/add" className="w-max text-sm">เพิ่มข้อมูลผู้รับการดูแล</Link>
          <Input placeholder="ค้นหาผู้ดูแล" size="sm" value={searchTerm} onValueChange={setSearchTerm} isClearable startContent={<Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />} className="w-1/2" />

          <Link isDisabled onPress={onOpen} type="button" className="text-cozy-green-light dark:text-cozy-blue-dark hover:cursor-pointer">
            <FilterAlt sx={{ fontSize: 25 }} />
          </Link>
        </div>

        <div className="flex flex-col w-full items-center gap-4">
          {filteredPatients.map((data, index) => (
            <PatientCard
              key={index}
              user_id={data.user_id}
              name={`${data.firstname} ${data.lastname}`} // Combine firstname and lastname
              imgUrl={data.profile_image} // Patient profile image
              serviceNeed={data.client_type} // Type of service needed
              skillNeed={data.con_dis} // Condition or default message
              dateReady={data.available_time} // Available time
              distance={5} // Fixed distance
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
