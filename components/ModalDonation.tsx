"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalDonation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Donation</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-text-light dark:text-text-dark">
                Donation
              </ModalHeader>
              <ModalBody>
                <p className="text-lg font-bold text-center">
                  "ร่วมสนับสนุนเพื่อสร้างการเปลี่ยนแปลง!"
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src="CozyCare_qrcode.svg"
                    alt="mockUp_QR"
                    width={200}
                    height={200}
                  />
                </div>
                <p>
                  การบริจาคของคุณจะช่วยให้เราพัฒนาแอพพลิเคชันให้ดีขึ้น
                  เพิ่มฟีเจอร์ที่จำเป็น
                  และช่วยสนับสนุนผู้ป่วยและผู้ดูแลที่ต้องการการเชื่อมต่ออย่างเร่งด่วน
                </p>
                <p>
                  ทุกการบริจาคคือพลังให้เราสร้างโอกาสใหม่ ๆ
                  แก่ผู้คนที่ต้องการความช่วยเหลือ"
                  ร่วมเป็นส่วนหนึ่งในการสร้างชุมชนที่แข็งแกร่งและอบอุ่นสำหรับทุกคน
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
