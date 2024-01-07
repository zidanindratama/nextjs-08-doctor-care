import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-brandGreen h-[100vh] text-[#fff] hidden md:flex flex-col justify-between p-16">
        <Link href={"/"}>
          <Image src={"./Logo.svg"} width={150} height={40} alt="logo" />
        </Link>
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;Website ini merupakan hasil dari proyek tugas mata kuliah
            Informatika Kesehatan, dengan desain yang ramah pengguna.Menggunakan
            teknologi Next.js, Shadcn UI, dan Tailwind CSS. &rdquo;
          </p>
          <footer className="text-sm">Zidan Indratama</footer>
        </blockquote>
      </div>
      <div className="absolute top-0 right-0 p-4 md:p-16">
        <Button asChild variant={"ghost"} className="">
          <Link href={"/"}>Login</Link>
        </Button>
      </div>
      <div className="m-auto pt-[38%] md:pt-0">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Buat Akun</h1>
          <p className="text-sm text-muted-foreground">
            Masukkan email anda untuk membuat akun
          </p>
        </div>
        <div className="space-y-2 mt-6">
          <Input type="email" placeholder="Email" />
          <Button className=" w-full rounded-md bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2">
            <span className="text-[14px]">Register</span>
          </Button>
        </div>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-brandGreenLight2 px-2 text-muted-foreground">
              Atau gabung menggunakan
            </span>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="mt-6 w-full flex flex-row items-center space-x-3"
        >
          <FaGithub size={20} />
          <p>Github</p>
        </Button>
        <p className="mt-6 px-8 text-center text-sm text-muted-foreground">
          Dengan klik register, anda sudah menyetujui <br />
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          dan{" "}
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default page;
