'use client'

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import {
  Chat,
  Notifications,
  Person,
  Home,
  Add,
  Accessible,
  Announcement,
  Handshake,
} from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handlePersonClick = async (): Promise<void> => {
    try {
      // Make API call to get user details
      const response: AxiosResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        { withCredentials: true }
      );

      // Extract user_id from the response
      const user_id = response.data.user_id;

      // Navigate to the profile page
      router.push(`/profile/${user_id}`);
    } catch (error) {
      console.error('Error fetching user details:', error);
      window.alert('Failed to fetch user details. Please try again.');
    }
  };

  return (
    <div className="sticky top-0 z-[99] h-max transition bg-white dark:bg-cozy-background-dark">
      <Navbar
        height="56px"
        classNames={{ wrapper: 'px-3' }}
        className="transition dark:bg-cozy-background-dark bg-white z-50"
      >
        <NavbarBrand className="px-0">
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Logo"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <p className="ml-2 font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">
            Cozy Care
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/messages"
              className="font-bold dark:text-white"
              isIconOnly
              radius="full"
              color="primary"
              variant="light"
            >
              <Chat sx={{ width: '65%', height: '65%' }} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              className="font-bold dark:text-white"
              isIconOnly
              radius="full"
              color="primary"
              variant="light"
            >
              <Notifications sx={{ width: '70%', height: '70%' }} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              onPress={handlePersonClick} // Add onClick handler
              className="font-bold dark:text-white"
              isIconOnly
              radius="full"
              color="primary"
              variant="light"
            >
              <Person sx={{ width: '75%', height: '75%' }} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar
        height="56px"
        classNames={{ wrapper: 'px-3 justify-center' }}
        className="transition dark:bg-cozy-background-dark bg-white"
      >
        <NavbarContent justify="center" className="w-full gap-4">
          <NavbarItem className="w-1/5">
            <Button
              as={Link}
              href="/home"
              className={`font-bold w-full ${
                pathname === '/home' &&
                'bg-[#28789E] dark:bg-cozy-teal-dark text-white dark:text-black pointer-events-none'
              }`}
              isIconOnly
              color="secondary"
            >
              <Home />
            </Button>
          </NavbarItem>
          <NavbarItem className="w-1/5">
            <Button
              as={Link}
              href="/caregiver"
              className={`font-bold w-full ${
                pathname === '/caregiver' &&
                'bg-[#28789E] dark:bg-cozy-teal-dark text-white dark:text-black pointer-events-none'
              }`}
              isIconOnly
              color="secondary"
            >
              <Add />
            </Button>
          </NavbarItem>
          <NavbarItem className="w-1/5">
            <Button
              as={Link}
              href="/patient"
              className={`font-bold w-full ${
                pathname === '/patient' &&
                'bg-[#28789E] dark:bg-cozy-teal-dark text-white dark:text-black pointer-events-none'
              }`}
              isIconOnly
              color="secondary"
            >
              <Accessible />
            </Button>
          </NavbarItem>
          <NavbarItem className="w-1/5">
            <Button
              as={Link}
              href="/information"
              className={`font-bold w-full ${
                pathname === '/information' &&
                'bg-[#28789E] dark:bg-cozy-teal-dark text-white dark:text-black pointer-events-none'
              }`}
              isIconOnly
              color="secondary"
            >
              <Announcement />
            </Button>
          </NavbarItem>
          <NavbarItem className="w-1/5">
            <Button
              as={Link}
              href="/donation"
              className={`font-bold w-full ${
                pathname === '/donation' &&
                'bg-[#28789E] dark:bg-cozy-teal-dark text-white dark:text-black pointer-events-none'
              }`}
              isIconOnly
              color="secondary"
            >
              <Handshake />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}