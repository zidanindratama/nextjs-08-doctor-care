import Image from "next/image";
import React from "react";
import { FadeMotionBottom } from "../framer-animation/Fade";

const TexrDoctorConsult = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto space-y-[140px]">
          <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between">
            <div className="space-y-6 mt-10 md:mt-0 md:mb-0">
              <h1 className="font-bold text-grayHeadline text-[20px] md:text-[30px]">
                Pusat Pencegahan Penyakit
              </h1>
              <p className="text-[14px] md:text-[18px] text-grayParagraph">
                Program pencegahan penyakit kami mencakup pemeriksaan rutin,
                vaksinasi, dan edukasi kesehatan untuk memastikan masyarakat
                tetap sehat dan terhindar dari risiko penyakit yang dapat
                dicegah.
              </p>
            </div>
            <Image
              src={"/doctor1.jpg"}
              width={450}
              height={450}
              alt="doctor1"
              className="rounded-md transition-all ease-in-out hover:translate-y-[-10px]"
            />
          </div>
          <div className="flex flex-col-reverse gap-8 md:flex-row-reverse items-center justify-between">
            <div className="space-y-6 mt-10 md:mt-0">
              <h1 className="font-bold text-grayHeadline text-[20px] md:text-[30px]">
                Perawatan Kesehatan Mental
              </h1>
              <p className="text-[14px] md:text-[18px] text-grayParagraph">
                Doctor Care peduli terhadap kesehatan mental. Layanan kami
                mencakup konseling, terapi, dan dukungan kesehatan mental untuk
                membantu pasien mengatasi stres, kecemasan, dan masalah
                kesehatan mental lainnya.
              </p>
            </div>
            <Image
              src={"/doctor2.jpg"}
              width={450}
              height={450}
              alt="doctor2s"
              className="rounded-md transition-all ease-in-out hover:translate-y-[-10px]"
            />
          </div>
          <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between">
            <div className="space-y-6 mt-10 md:mt-0 md:mb-0">
              <h1 className="font-bold text-grayHeadline text-[20px] md:text-[30px]">
                Inovasi Diagnostik Terkini
              </h1>
              <p className="text-[14px] md:text-[18px] text-grayParagraph">
                Doctor Care memanfaatkan teknologi diagnostik terkini untuk
                memberikan diagnosis yang akurat dan cepat.
              </p>
            </div>
            <Image
              src={"/doctor3.jpg"}
              width={450}
              height={450}
              alt="doctor3"
              className="rounded-md transition-all ease-in-out hover:translate-y-[-10px]"
            />
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default TexrDoctorConsult;
