import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { FadeMotionBottom } from "../framer-animation/Fade";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="z-1 p-5 bg-brandGreenLight1 pb-20 md:pb-0 pt-48">
        <FadeMotionBottom>
          <div className="flex flex-col md:flex-row items-center justify-center md:text-left text-center max-w-5xl mx-auto mt-6 space-y-12 md:space-y-0">
            <div className="space-y-6">
              <p className="font-bold text-brandGreen text-[14px] uppercase">
                Inovasi Sehat, Pelayanan Berkualitas. 👋
              </p>
              <h1 className="font-bold text-grayHeadline text-[34px] md:text-[52px]">
                Mengabdi untuk Kesehatan Anda
              </h1>
              <p className="text-[18px] text-grayParagraph">
                Selamat datang di DoctorCare, tempat di mana inovasi bertemu
                dengan kepedulian. Kami berkomitmen untuk memberikan pelayanan
                kesehatan yang berkualitas tinggi dengan fokus pada keselamatan,
                kenyamanan, dan pemulihan pasien.
              </p>
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
            <Image
              src={"./hero-image.svg"}
              height={1150}
              width={1150}
              alt="hero image"
            />
          </div>
        </FadeMotionBottom>
      </div>
      <div className="flex items-center justify-center pt-24">
        <div className="z-2 md:w-full max-w-5xl px-24 py-10 md:px-0 space-y-10 md:space-y-0 flex flex-col md:flex-row items-center justify-around mx-auto bg-brandBeige border border-brandGreenLight1 rounded-sm">
          <div className="text-center flex flex-row">
            <div>
              <h1 className="text-[48px] font-bold text-grayHeadline">
                +3.500
              </h1>
              <p className="text-brandGreen text-[16px]">Pasien</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[48px] font-bold text-grayHeadline">+15</h1>
            <p className="text-brandGreen text-[16px]">Dokter Spesialis</p>
          </div>
          <div className="text-center">
            <h1 className="text-[48px] font-bold text-grayHeadline">+10</h1>
            <p className="text-brandGreen text-[16px]">Dokter Umum</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
