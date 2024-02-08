// CORE
import Image from "next/image";

// COMPONENTS
import RegisterForm from "./_components/RegisterForm";

// INTERFACES
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Heizenberg",
  description:
    "This is a register page for Heizenberg where visitor can create their account",
};

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen justify-center lg:justify-end">
      <section className="absolute inset-0 z-0">
        <Image
          src="/background/register-bg.jpeg"
          alt="register-page"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </section>

      <section className="z-10 flex min-h-screen w-80 flex-col items-center bg-white bg-gradient-to-b from-white to-slate-200 px-6 pb-6 pt-16 shadow-lg sm:w-96 sm:px-10 sm:pt-24 lg:w-[450px] lg:px-14 lg:pb-4 lg:pt-10">
        <div className="mb-10 flex flex-col items-center lg:mb-6">
          <h5 className="font-rubik-bold text-2xl leading-none">Create your</h5>
          <h3 className="font-rubik-extrabold text-4xl">Account</h3>
        </div>

        <RegisterForm />
      </section>
    </main>
  );
}
