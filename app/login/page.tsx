"use client"

import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import {AcmeLogo} from "@/app/ui/navbar"

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-24">
          <div className="flex items-center justify-center text-white">
            <AcmeLogo />
            <p className="font-bold text-3xl text-white">MAGNET POS</p>
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
