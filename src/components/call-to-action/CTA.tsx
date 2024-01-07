import Image from "next/image";
import React from "react";
import { GrMap } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeMotionBottom } from "../framer-animation/Fade";

const CTA = () => {
  return (
    <div className="p-5">
      <FadeMotionBottom>
        <div className="py-28 flex flex-col items-center justify-evenly md:flex-row max-w-5xl mx-auto space-x-0 md:space-x-20 space-y-20 md:space-y-0">
          <div className="flex flex-col">
            <p className="font-bold text-[16px] text-brandGreen">
              Kesehatan Optimal, Hidup Lebih Bahagia
            </p>
            <h1 className="font-bold text-[40px] text-grayHeadline">
              Ayo Mulai Perjalanan Kesehatan Anda Bersama Kami.
            </h1>
            <div className="mt-6 space-y-6">
              <div className="flex flex-row items-center space-x-6">
                <GrMap size={25} className="text-brandGreen" />
                <p className="text-grayHeadline">Jl. Kesehatan No. 123</p>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <TfiEmail size={25} className="text-brandGreen" />
                <p className="text-grayHeadline">info@doctorcare.com</p>
              </div>
              <Button
                asChild
                className="rounded-full bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2"
              >
                <Link href={"/register"}>
                  <FaWhatsapp size={20} />
                  <span className="text-[14px]">Register Now</span>
                </Link>
              </Button>
            </div>
          </div>
          <Image src={"./orang1.svg"} height={450} width={450} alt="orang" />
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default CTA;
