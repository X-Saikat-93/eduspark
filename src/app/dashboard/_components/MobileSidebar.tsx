import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { navList } from "../_constants/navList";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const MobileSidebar = () => {
     return (
       <div className='lg:hidden'>
         <Sheet>
           <SheetTrigger asChild>
             <Button variant='outline' size='icon' >
               <MenuIcon className='w-6 h-6' />
             </Button>
           </SheetTrigger>
           <SheetContent side='right' className='w-80'>
             <SheetHeader className='p-4 border-b'>
               <SheetTitle className='text-lg font-semibold'>Menu</SheetTitle>
               <SheetDescription className='text-sm text-gray-500'>
                 Navigate through the app
               </SheetDescription>
             </SheetHeader>

             <div className='mt-4 p-4'>
               {navList.map((item) => (
                 <SheetClose asChild key={item.id}>
                   <Link href={item.route}>
                     <div className='flex items-center p-3 hover:bg-accent  rounded-md hover:text-primary'>
                       <item.icon className='mr-3 w-6 h-6' />
                       <span className='text-base font-medium text-primary'>
                         {item.name}
                       </span>
                     </div>
                   </Link>
                 </SheetClose>
               ))}
             </div>
           </SheetContent>
         </Sheet>
       </div>
     );
};

export default MobileSidebar;
