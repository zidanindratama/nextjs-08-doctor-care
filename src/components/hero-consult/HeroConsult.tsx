import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { FadeMotionBottom } from "../framer-animation/Fade";

const HeroConsult = () => {
  return (
    <div className="px-5 pt-40 pb-24 bg-brandGreenLight1">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <div className="text-center pt-20 space-y-6">
            <p className="font-bold text-brandGreen text-[14px] uppercase">
              Konsultasi Dokter Online
            </p>
            <h1 className="font-bold text-grayHeadline text-[40px] md:text-[58px]">
              Akses Medis Tanpa Batas, Kapan Saja, Di Mana Saja
            </h1>
            <p className="text-[18px] text-grayParagraph">
              Dengan layanan konsultasi dokter online kami, Anda dapat dengan
              mudah <br /> mengakses nasihat medis profesional dari kenyamanan
              rumah Anda.
            </p>
            <div className="flex flex-row space-x-6 justify-center items-center">
              <Button
                asChild
                className="rounded-full bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2"
              >
                <Link href={"/register"}>
                  <FaWhatsapp size={20} />
                  <span className="text-[14px]">Register Now</span>
                </Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-white border border-white text-brandGreen font-bold hover:bg-brandGreenLight1"
              >
                <Link href={"/"}>Register later</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default HeroConsult;
