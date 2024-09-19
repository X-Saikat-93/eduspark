"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const { user } = useUser();

  return (
    <header className='flex items-center justify-between  p-4  border-b-2 top-0 z-50 sticky w-full border-black dark:border-slate-200 shadow-lg lg:shadow-xl shadow-slate-700/5 lg:backdrop-blur-sm backdrop-blur-lg lg:after:hidden rounded-xl dark:bg-inherit'>
      <Link href='/'>
        <Image
          src='/mainlogoscale.png'
          alt='logo'
          width={150}
          height={100}
          priority
          className='object-cover'
        />
      </Link>
      <div className='flex items-center space-x-4'>
        <ModeToggle />
        {!user ? (
          <Link href='/sign-up'>
            <ShinyButton text='Sign Up' />
          </Link>
        ) : (
          <Link href='/dashboard'>
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
