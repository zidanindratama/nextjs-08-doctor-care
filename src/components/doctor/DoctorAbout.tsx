import Image from "next/image";
import React from "react";
import { FadeMotionBottom } from "../framer-animation/Fade";

const DoctorAbout = () => {
  return (
    <div className="p-5 bg-brandBeige">
      <FadeMotionBottom>
        <div className="py-28 flex flex-col items-center justify-evenly md:flex-row max-w-5xl mx-auto space-x-0 md:space-x-20 space-y-20 md:space-y-0">
          <Image src={"./dokter1.svg"} height={450} width={450} alt="dokter" />
          <div className="flex flex-col">
            <p className="font-bold text-[16px] text-brandGreen">
              Dokter Profesional Berkualitas
            </p>
            <h1 className="font-bold text-[40px] text-grayHeadline">
              Dengan Dedikasi Tinggi dan Keahlian Luar Biasa
            </h1>
            <p className="text-[16px] text-grayParagraph mt-6">
              Dengan dedikasi tinggi terhadap keberhasilan setiap pasien,
              keahlian mereka yang luar biasa membentuk fondasi pelayanan
              kesehatan unggul di rumah sakit kami.
            </p>
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default DoctorAbout;
