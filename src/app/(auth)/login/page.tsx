// CORE
import Image from "next/image";

// COMPONENTS
import LoginForm from "./_components/LoginForm";

// INTERFACE
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Heizenberg",
  description: "This is a login page for Heizenberg",
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen justify-center">
      <section className="absolute inset-0 z-0">
        <Image
          src="/background/login-bg.jpeg"
          alt="login-bg"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </section>

      <section className="z-10 flex min-h-screen w-80 flex-col items-center bg-white bg-gradient-to-b from-white to-slate-200 px-6 pb-6 pt-24 shadow-lg sm:w-96 sm:px-10 sm:pt-28 lg:w-[450px] lg:px-14 lg:pb-4 lg:pt-20">
        <div className="flex w-full flex-col items-center">
          <h5 className="font-rubik-bold text-xl leading-none lg:text-2xl">
            Welcome back to,
          </h5>
          <h2 className="font-rubik-bold mb-10 cursor-pointer text-4xl text-gray-700 lg:text-5xl">
            Heizenberg
          </h2>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}
