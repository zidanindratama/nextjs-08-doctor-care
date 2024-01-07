import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FadeMotionBottom } from "../framer-animation/Fade";

const Services = () => {
  return (
    <div className="p-5 pb-28 pt-24 bg-brandGreenLight2">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col text-center">
            <p className="font-bold text-[16px] text-brandGreen">services</p>
            <h1 className="font-bold text-[40px] text-grayHeadline">
              Layanan Kami.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Pelayanan Darurat 24 Jam
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Rumah sakit kami menyediakan layanan darurat 24 jam setiap hari.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Pusat Kesehatan Wanita
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Kami menawarkan pelayanan dan perawatan yang komprehensif.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Teknologi Diagnostik Terkini
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Kami memastikan diagnosis yang akurat dan cepat.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Perawatan Kesehatan Mental
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Kami mengedepankan pendekatan preventif dalam menjaga kesehatan.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Pusat Rehabilitasi Pasien
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Menyediakan perawatan pascaoperasi dan pemulihan.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-[#fff] border border-brandGreenLight1 p-6 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
              <div className="bg-brandGreenLight1 rounded-full w-fit p-2">
                <IoCheckmarkSharp size={18} className="text-brandGreen" />
              </div>
              <h1 className="font-bold text-[24px] text-grayHeadline">
                Perawatan Kesehatan Mental
              </h1>
              <p className="text-[16px] text-grayParagraph">
                Kesehatan mental merupakan bagian integral dari kesejahteraan.
              </p>
            </div>
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default Services;
