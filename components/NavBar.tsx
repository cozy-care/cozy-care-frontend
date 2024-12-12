'use client'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from 'next/link';
import Image from "next/image";
import { Button } from '@nextui-org/react';
import { Chat, Notifications, Person, Home, Add, Accessible, Announcement, Handshake} from '@mui/icons-material';
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="sticky">
      <Navbar height="4rem" classNames={{wrapper:'px-3'}}>
        <NavbarBrand className='px-0'>
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" style={{ width: "auto", height: "auto" }} />
          <p className="ml-2 font-bold text-lg text-cozy-blue-light dark:text-cozy-blue-dark">Cozy Care</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="#" className="font-bold" isIconOnly radius="full" color="primary" variant="light">
              <Chat sx={{width:'75%', height:'75%'}} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#" className="font-bold" isIconOnly radius="full" color="primary" variant="light">
              <Notifications sx={{width:'80%', height:'80%'}} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#" className="font-bold" isIconOnly radius="full" color="primary" variant="light">
              <Person sx={{width:'85%', height:'85%'}} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar isBordered shouldHideOnScroll classNames={{wrapper:'px-3 justify-center'}}>
        <NavbarContent justify="center" className='w-full gap-3'>
          <NavbarItem className='w-1/5'>
            <Button as={Link} href="/home" className={`font-bold w-full ${pathname === "/home" && "bg-[#28789E] text-white pointer-events-none"}`} isIconOnly color="secondary">
              <Home />
            </Button>
          </NavbarItem>
          <NavbarItem className='w-1/5'>
            <Button as={Link} href="/caregiver" className={`font-bold w-full ${pathname === "/caregiver" && "bg-[#28789E] text-white pointer-events-none"}`} isIconOnly color="secondary">
              <Add />
            </Button>
          </NavbarItem>
          <NavbarItem className='w-1/5'>
            <Button as={Link} href="/patient" className={`font-bold w-full ${pathname === "/patient" && "bg-[#28789E] text-white pointer-events-none"}`} isIconOnly color="secondary">
              <Accessible />
            </Button>
          </NavbarItem>
          <NavbarItem className='w-1/5'>
            <Button as={Link} href="/annoucement" className={`font-bold w-full ${pathname === "/annoucement" && "bg-[#28789E] text-white pointer-events-none"}`} isIconOnly color="secondary">
              <Announcement/>
            </Button>
          </NavbarItem>
          <NavbarItem className='w-1/5'>
            <Button as={Link} href="/donation" className={`font-bold w-full ${pathname === "/donation" && "bg-[#28789E] text-white pointer-events-none"}`} isIconOnly color="secondary">
              <Handshake />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}
