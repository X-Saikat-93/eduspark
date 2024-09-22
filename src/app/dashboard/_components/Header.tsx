import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "@/components/modeToggle";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between p-4 shadow-md  bg-card dark:bg-zinc-900 '>
      <Link href='/dashboard'>

      <Image
        src='/mainlogoscale.png'
        alt='logo'
        width={150}
        height={100}
        priority
        className='object-cover'
        />
        </Link>
      <div className='flex items-center space-x-8'>
        <ModeToggle />
        <MobileSidebar/>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
