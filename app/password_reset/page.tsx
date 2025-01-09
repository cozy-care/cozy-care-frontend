'use client';

import { Form, Input, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

interface passwordResetCredentials {
  usernameOrEmail: string;
}

async function passwordResetUser(credentials: passwordResetCredentials): Promise<{ success: boolean; }> {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sendResetPasswordEmail`,
      credentials,
      { withCredentials: true }
    );

    return { success: true };
  } catch (error) {
    console.error("There was an error password resetting!", error);
    return { success: false };
  }
}

async function checkAuth(router: any): Promise<void> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      { withCredentials: true }
    );
    if (response.status === 200) {
      router.push("/home");
    }
  } catch (error) {
    console.log("User not logged in or authentication failed.");
  }
}

export default function passwordReset() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    document.title = "Password Reset - Cozy Care";
  }, []);

  const handlePasswordReset = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const usernameOrEmail = (form.elements.namedItem("usernameOrEmail") as HTMLInputElement).value;

    const success = await passwordResetUser({ usernameOrEmail });

    if (success && !isOpen) {
      onOpen();
    } else {
      console.log("Login failed");
    }
  };

  checkAuth(router);
  return (
    <main className="flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="grow flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src="/favicon.ico" width={80} height={80} alt="Logo" style={{ width: "auto", height: "auto" }} priority />
          <div className="font-bold text-2xl text-cozy-blue-light dark:text-cozy-blue-dark mt-2">
            COZY CARE
          </div>
        </div>

        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handlePasswordReset}
        >
          <Input
            isRequired
            id="usernameOrEmail"
            errorMessage="กรุณาใส่ชื่อผู้ใช้หรืออีเมล"
            label="กรุณาใส่ชื่อผู้ใช้หรืออีเมลเพื่อส่งอีเมลรีเซ็ตรหัสผ่าน"
            labelPlacement="outside"
            name="username"
            placeholder="Username or email"
            type="text"
          />

          <Button className="px-8 font-bold self-center mt-8" color="primary" type="submit" radius="full">
            ส่งอีเมลเพื่อขอรหัสผ่าน
          </Button>
        </Form>

        <Modal isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Success!</ModalHeader>
                <ModalBody>
                  <p>
                    Your action was successful. Please click the button below to log in and continue.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      onClose();
                      router.push("/login"); // Redirect to login page
                    }}
                  >
                    Go to Login
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <div className="flex flex-col items-center justify-evenly bottom-0 w-screen h-[25vh] bg-cozy-lightblue-light dark:bg-cozy-green-light">
      </div>

    </main>
  )
}