import React from "react";
import { FaTooth } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiDoctorFace } from "react-icons/gi";
import { GiBrokenBone } from "react-icons/gi";
import { GiHeartBeats } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { FadeMotionBottom } from "../framer-animation/Fade";

const DoctorConsult = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-x-7">
            <h1 className="font-bold text-grayHeadline text-[20px] md:text-[30px]">
              Ragam Ahli Kesehatan untuk Kebutuhan Unik Anda
            </h1>
            <p className="text-[14px] md:text-[18px] text-grayParagraph">
              Mulai dari dokter umum yang memberikan perawatan holistik hingga
              spesialis terkemuka dalam berbagai bidang medis
            </p>
          </div>
          <div className="mt-20 grid grid-cols-2 xl:grid-cols-6 gap-10">
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <FaTooth size={25} className="text-[#41ffdd]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Dentist
              </h1>
            </div>
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <FaUserDoctor size={25} className="text-[#fd9c57]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Psychologist
              </h1>
            </div>
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <GiDoctorFace size={25} className="text-[#2da966]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Pediatricians
              </h1>
            </div>
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <GiBrokenBone size={25} className="text-[#feae65]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Orthopedic
              </h1>
            </div>
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <GiHeartBeats size={25} className="text-[#616fdc]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Cardiologist
              </h1>
            </div>
            <div className="flex flex-col items-center bg-[#fff] border border-brandGreenLight1 p-8 text-center justify-center rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-[#faf8fd] rounded-full w-fit p-4">
                <GiMedicines size={25} className="text-[#ffd05a]" />
              </div>
              <h1 className="font-bold text-[16px] text-grayHeadline mt-5">
                Pharmacist
              </h1>
            </div>
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default DoctorConsult;
