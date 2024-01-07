"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BiMenuAltRight } from "react-icons/bi";
import { FadeMotionTop } from "../framer-animation/Fade";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);

    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <nav className="p-5 bg-brandGreen fixed w-full z-[4]">
      <div className="flex flex-row items-center justify-between max-w-5xl mx-auto">
        <Link href={"/"}>
          <Image src={"./Logo.svg"} width={150} height={40} alt="logo" />
        </Link>
        <BiMenuAltRight
          className="md:hidden text-3xl text-white"
          onClick={toggleNavbar}
        />
        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-12 absolute md:static text-white bg-brandGreen md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in-out ${
            open
              ? "top-0 h-screen justify-center text-center space-y-24 font-bold"
              : "top-[-490px]"
          }`}
        >
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/consult"}>Consult</Link>
          </li>
          <li>
            <Link href={"/doctor"}>Doctor</Link>
          </li>
          <li className="md:hidden">
            <Button
              asChild
              className="rounded-full bg-white border border-white text-brandGreen font-bold hover:bg-brandGreenLight1"
            >
              <Link href={"/register"}>Register now</Link>
            </Button>
          </li>
        </ul>
        <Button
          asChild
          variant="ghost"
          className="hidden md:block border border-white rounded-full text-white font-bold hover:bg-brandGreenLight1 hover:text-brandGreen hover:border-brandGreenLight1"
        >
          <Link href={"/register"}>Register now</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
