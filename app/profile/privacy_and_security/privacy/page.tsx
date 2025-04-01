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
import { useEffect } from "react";
import { services, employments } from "@/app/caregiver/add/addMockCaregiver";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { LocationOn, Edit } from "@mui/icons-material";

export default function Privacy() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Privacy - Cozy Care";
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="grow flex flex-col items-center px-6 gap-6 mb-6">
        <div className="flex relative items-center gap-3 w-full h-[50px]">
          <h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
            นโยบายความเป็นส่วนตัว
          </h1>
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
        </div>
        <hr className="w-full  border-t-8 " />
        <ol className="text-white list-decimal space-y-4">
          <li>
            บทนำ Cozy Care ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้ทุกท่าน
            นโยบายนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้
            และปกป้องข้อมูลส่วนบุคคลของคุณ เมื่อคุณใช้แอปพลิเคชันของเรา
          </li>

          <li>
            <strong>การเก็บรวบรวมข้อมูล</strong>
            เราอาจเก็บรวบรวมข้อมูลต่อไปนี้เมื่อคุณใช้บริการของเรา:
            <ul className="list-disc ml-5 space-y-1">
              <li>
                ข้อมูลที่คุณให้ เช่น ชื่อ-นามสกุล อีเมล หมายเลขโทรศัพท์ ที่อยู่
                รูปโปรไฟล์ และข้อมูลทางการแพทย์ที่เกี่ยวข้อง
              </li>
              <li>
                ข้อมูลการใช้งาน เช่น ประวัติการจองบริการ การสนทนาในแอป
                และพฤติกรรมการใช้งาน
              </li>
              <li>
                ข้อมูลอุปกรณ์ เช่น หมายเลขอุปกรณ์ ระบบปฏิบัติการ และที่อยู่ IP
              </li>
            </ul>
          </li>

          <li>
            <strong>การใช้ข้อมูล</strong>
            ข้อมูลที่เราเก็บรวบรวมจะถูกนำไปใช้เพื่อ:
            <ul className="list-disc ml-5 space-y-2">
              <li>
                ให้บริการตามที่ร้องขอ เช่น การเชื่อมต่อระหว่างผู้ดูแลและผู้ใช้
              </li>
              <li>ปรับปรุงและพัฒนาบริการ</li>
              <li>ป้องกันการฉ้อโกงและเสริมสร้างความปลอดภัย</li>
              <li>ปฏิบัติตามข้อกฎหมายและข้อกำหนด</li>
            </ul>
          </li>

          <li>
            <strong>การแชร์ข้อมูล</strong> เราอาจแชร์ข้อมูลของคุณกับ:
            <ul className="list-disc ml-5 space-y-2">
              <li>
                ผู้ให้บริการที่จำเป็นต่อการดำเนินการ เช่น
                ระบบชำระเงินและแพลตฟอร์มการสื่อสาร
              </li>
              <li>หน่วยงานทางกฎหมายในกรณีที่จำเป็นตามกฎหมาย</li>
              <li>บุคคลที่คุณอนุญาตให้เปิดเผยข้อมูล</li>
            </ul>
          </li>

          <li>
            <strong>การรักษาความปลอดภัยของข้อมูล</strong>
            เรามีมาตรการรักษาความปลอดภัยที่เข้มงวดเพื่อปกป้องข้อมูลของคุณ
            รวมถึงการเข้ารหัสข้อมูลและการควบคุมการเข้าถึง
          </li>

          <li>
            <strong>สิทธิของผู้ใช้</strong> คุณมีสิทธิในการ:
            <ul className="list-disc ml-5 space-y-2">
              <li>ขอเข้าถึง แก้ไข หรือลบข้อมูลของคุณ</li>
              <li>คัดค้านการใช้ข้อมูลของคุณในบางกรณี</li>
              <li>ถอนความยินยอมในการใช้ข้อมูลที่คุณเคยให้</li>
            </ul>
          </li>

          <li>
            <strong>การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</strong>
            เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว
            และจะแจ้งให้คุณทราบเมื่อมีการเปลี่ยนแปลงที่สำคัญ
          </li>

          <li>
            <strong>การติดต่อเรา</strong>
            หากมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายนี้ สามารถติดต่อเราได้ที่&nbsp;
            <a
              href="mailto:64010718@kmitl.ac.th"
              className="text-blue-400 underline"
            >
              64010718@kmitl.ac.th
            </a>
          </li>
        </ol>
        <strong className="font-bold">
          ขอขอบคุณที่ไว้วางใจใช้บริการ Cozy Care
        </strong>
      </div>
    </main>
  );
}
