import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeMotionBottom } from "../framer-animation/Fade";

const DoctorSearchHeader = () => {
  return (
    <div className="px-5 pt-52 pb-24 bg-brandGreenLight1">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            <h1 className="font-bold text-grayHeadline text-[34px] md:text-[52px]">
              Temukan Ahli Kesehatan{" "}
              <span className="text-brandGreen">Ideal</span> Anda
            </h1>
            <p className="text-[18px] text-grayParagraph">
              Cari, Pilih, dan Jadwalkan Konsultasi - Layanan Pencarian Dokter
              Doctor Care Membantu Anda Menemukan Penyedia Perawatan Kesehatan
              yang Tepat untuk Kebutuhan dan Preferensi Anda.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-6">
            <Input type="text" placeholder="Cari dokter..." />
            <Button className="rounded-md bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2">
              <span className="text-[14px]">Cari</span>
            </Button>
          </div>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default DoctorSearchHeader;
