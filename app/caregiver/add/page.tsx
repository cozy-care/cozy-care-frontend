"use client";

import {
  Button,
  DatePicker,
  Input,
  Link,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { services, employments } from "@/app/caregiver/add/addMockCaregiver";
import { ArrowBackIosNew, LocationOn, Edit } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Textarea } from "@nextui-org/react";
import { getLocalTimeZone } from "@internationalized/date";
import { CalendarDateTime } from "@internationalized/date";

// ✅ dynamic import แบบ ssr: false
const MapPicker = dynamic(() => import("../../../components/MapPicker"), {
  ssr: false,
});

function combineDateAndTime(date: any, time: any): string | null {
  if (!date || !time) return null;
  try {
    const combined = new CalendarDateTime(
      date.year,
      date.month,
      date.day,
      time.hour,
      time.minute,
      time.second || 0
    );
    return combined.toDate(getLocalTimeZone()).toISOString();
  } catch (error) {
    console.error("Error combining date and time:", error);
    return null;
  }
}

export default function Add() {
  const router = useRouter();
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  const [addressInput, setAddressInput] = useState("");
  const [wantClientType, setWantClientType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [moreSkillInput, setMoreSkillInput] = useState("");
  const [startDate, setStartDate] = useState<any>(null);
  const [startTimeValue, setStartTimeValue] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [endTimeValue, setEndTimeValue] = useState<any>(null);

  useEffect(() => {
    document.title = "Caregiver Add - Cozy Care";
  }, []);

  const handleLocationSelect = async (latitude: number, longitude: number) => {
    setLat(latitude);
    setLng(longitude);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();
      if (data?.display_name) {
        setAddressInput(data.display_name);
      }
    } catch (error) {
      console.error("Reverse geocode error:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const userRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
        withCredentials: true,
      });
      const user_id = userRes.data.user_id;

      const caregiverRes = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/caregiver/get-caregiver-id`,
        { user_id }
      );
      const caregiver_id = caregiverRes.data.caregiver.caregiver_id;

      const body = {
        caregiver_id,
        address: addressInput,
        geocode: lat && lng ? `${lat},${lng}` : null,
        want_client_type: wantClientType,
        payment_type: paymentType,
        price: priceInput,
        more_skill: moreSkillInput || null,
        start_time: combineDateAndTime(startDate, startTimeValue),
        end_time: combineDateAndTime(endDate, endTimeValue),
      };

      console.log(body)

      if (!body.geocode || !body.address) {
        return Swal.fire("กรุณาระบุตำแหน่งให้ครบถ้วน", "", "warning");
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order/create-caregiver-order`,
        body
      );

      Swal.fire("สร้างคำขอเรียบร้อยแล้ว", "", "success").then(() => {
        router.push("/caregiver");
      });
    } catch (error: any) {
      console.error(error);
      Swal.fire(
        "เกิดข้อผิดพลาด",
        error?.response?.data?.error || "ไม่สามารถสร้างคำขอได้",
        "error"
      );
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
        {/* หัวข้อ */}
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <Button
            as={Link}
            onPress={() => router.back()}
            className="text-cozy-green-light"
            isIconOnly
            radius="full"
            variant="light"
          >
            <ArrowBackIosNew />
          </Button>
          <h1 className="absolute w-full flex text-lg font-bold justify-center items-center">
            เพิ่มข้อมูลผู้ดูแล
          </h1>
        </div>

        {/* เลือกบริการ */}
        <div className="flex flex-col w-full md:w-[45%] lg:w-[50%] gap-1">
          <h2>เลือกบริการที่ต้องการรับการดูแล</h2>
          <Select
            className="w-full"
            placeholder="สามารถเลือกได้มากกว่า 1 รายการ"
            selectionMode="multiple"
            onChange={(e) => setWantClientType(e.target.value)}
          >
            {services.map((service) => (
              <SelectItem key={service.key}>{service.label}</SelectItem>
            ))}
          </Select>
        </div>

        {/* เริ่มต้น / สิ้นสุด */}
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full md:w-[45%] lg:w-[50%]">
          <p className="w-max text-nowrap">เริ่มต้น</p>
          <DatePicker
            radius="full"
            size="sm"
            className="grow"
            onChange={(date) => setStartDate(date)}
          />
          <TimeInput
            radius="full"
            size="sm"
            hourCycle={24}
            isRequired
            className="w-max"
            onChange={setStartTimeValue}
          />
        </div>
        <div className="bg-cozy-green-dark rounded-full flex flex-row p-2 px-3 gap-2 justify-between items-center w-full md:w-[45%] lg:w-[50%]">
          <p className="w-max text-nowrap">สิ้นสุด</p>
          <DatePicker
            radius="full"
            size="sm"
            className="grow"
            onChange={(date) => setEndDate(date)}
          />
          <TimeInput
            radius="full"
            size="sm"
            hourCycle={24}
            isRequired
            className="w-max"
            onChange={setEndTimeValue}
          />
        </div>

        {/* ตำแหน่งแผนที่ */}
        <div className="w-full flex flex-col justify-center items-center rounded-full md:w-[45%] lg:w-[50%]">
          <p className="text-cozy-lightblue-light w-full flex bg-cozy-blue-light rounded-t-xl p-1 justify-between items-center px-4">
            <LocationOn style={{ width: "30px", height: "auto" }} />
            เลือกตำแหน่งที่ต้องการจ้างงาน
            <Edit style={{ width: "30px", height: "auto" }} />
          </p>

          <MapPicker onSelectLocation={handleLocationSelect} />

          <Textarea
            placeholder="ที่อยู่โดยละเอียด"
            className="mt-2"
            minRows={3}
            value={addressInput}
            onChange={(e) => setAddressInput(e.target.value)}
          />

        </div>

        {/* ความต้องการเพิ่มเติม */}
        <div className="w-full flex flex-col gap-2 md:w-[45%] lg:w-[50%]">
          <h3 className="font-bold gap-1">ความต้องการเพิ่มเติม</h3>
          <div className="text-black flex flex-col w-full gap-1 bg-cozy-lightblue-light rounded-2xl p-2">
            <p>การจ้างงาน</p>
              <Select
                className="w-full"
                placeholder="เลือกรูปแบบการจ้างงาน"
                selectedKeys={paymentType ? [paymentType] : []}
                onChange={(e) => setPaymentType(e.target.value)}
              >
                {employments.map((employment) => (
                  <SelectItem key={employment.key}>{employment.label}</SelectItem>
                ))}
              </Select>
            <p className="w-full">ราคา</p>
            <Input
              className="w-full"
              placeholder="เช่น 800, 9000, 15000"
              value={priceInput} // ✅ bind
              onChange={(e) => setPriceInput(e.target.value)} // ✅ bind
            />
          </div>
        </div>

        {/* ความสามารถเพิ่มเติม */}
        <div className="text-cozy-lightblue-light flex flex-col w-full h-full gap-1 bg-[#1F5670] rounded-2xl p-2 md:w-[45%] lg:w-[50%]">
          <h4>ความสามารถเพิ่มเติม</h4>
          <Input 
            placeholder="เช่น ขับรถ (มีรถ), ทำอาหาร"
            value={moreSkillInput}
            onChange={(e) => setMoreSkillInput(e.target.value)}
            />
        </div>

        {/* ปุ่มยืนยัน */}
        <Button
          radius="full"
          className="text-lg font-semibold bg-cozy-green-light px-16 lg:px-20"
          onPress={handleSubmit}
        >
          ยืนยัน
        </Button>
      </div>
    </main>
  );
}
