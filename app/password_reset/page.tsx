'use client';

import { Form, Input, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

interface passwordResetCredentials {
  usernameOrEmail: string;
}

type PasswordResetResponse = {
  success: boolean;
  message?: string;
  email?: string;
};

async function passwordResetUser(credentials: passwordResetCredentials): Promise<PasswordResetResponse> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sendResetPasswordEmail`,
      credentials,
      { withCredentials: true }
    );

    return {
      success: true,
      message: response.data?.message || 'Password reset email sent.',
      email: response.data?.email,
    };
  } catch (error: any) {
    console.error("There was an error password resetting!", error);
    
    const errorMessage = error?.response?.data?.error || "Unknown error occurred";

    return {
      success: false,
      message: errorMessage,
    };
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
  const [resetEmail, setResetEmail] = useState<string>("");

  useEffect(() => {
    document.title = "Password Reset - Cozy Care";
  }, []);

  const handlePasswordReset = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const usernameOrEmail = (form.elements.namedItem("usernameOrEmail") as HTMLInputElement).value;

    const result = await passwordResetUser({ usernameOrEmail });

    if (result.success && result.email) {
      setResetEmail(result.email);
      onOpen();
    } else {
      console.log("Password reset failed:", result.message);
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

        <Modal isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton={true} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">สำเร็จ</ModalHeader>
                <ModalBody>
                  <p>
                    คำขอดูรหัสผ่านได้ถูกส่งไปที่อีเมล <b>{resetEmail}</b> แล้ว
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={() => {
                      onClose();
                      router.push("/login"); // Redirect to login page
                    }}
                  >
                    ไปที่หน้า Login
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