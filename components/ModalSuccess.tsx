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

interface ModalSuccessProps {
  buttonName: string;
  title: string;
  bodyText?: string;
  buttonText: string;
  // onButtonClick: () => void;
}

export default function ModalSuccess(props: ModalSuccessProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>{props.buttonName}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-text-light dark:text-text-dark">
                {props.title}
              </ModalHeader>
              <ModalBody>
                <p className="text-lg font-bold text-center">
                  {props.bodyText}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {props.buttonText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
