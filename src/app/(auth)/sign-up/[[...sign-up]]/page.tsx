import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <section className='container'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            alt='Image'
            src='https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover opacity-80'
            priority
            width={1000}
            height={100}
          />

          <div className='hidden lg:relative lg:block lg:p-12'>
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

            <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
              Welcome to AI Course Generator 🦑
            </h2>

            <p className='mt-4 leading-relaxed text-white/90'>
              Feel free to sign in and start generating custom learning paths
              for your students.
            </p>
          </div>
        </section>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <div className='relative -mt-16 block lg:hidden'>
              

              <h1 className='mt-10 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                Welcome to AI Course Generator 🦑
              </h1>

              <p className='mt-4 leading-relaxed text-gray-500'>
                Feel free to sign in and start generating custom learning paths
                for your students.
              </p>
            </div>
            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
