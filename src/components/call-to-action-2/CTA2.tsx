import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const CTA2 = () => {
  return (
    <div className="text-center mt-24 bg-brandBeige border border-brandGreenLight1 p-8 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen">
      <h1 className="font-bold text-[24px] text-center">
        Pilih Kesehatan dan <br />
        Pilih Kehidupan yang Lebih Baik
      </h1>
      <p className="mt-4 md:px-24 xl:px-36 mx-auto text-center">
        Temukan perawatan kesehatan yang Anda butuhkan di Doctor Care. Dengan
        dokter-dokter profesional, layanan darurat 24 jam, dan fasilitas modern,
        kami siap melayani kebutuhan kesehatan Anda.
      </p>
      <Button
        asChild
        className="mt-6 rounded-full bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2"
      >
        <Link href={"/register"}>
          <FaWhatsapp size={20} />
          <span className="text-[14px]">Register Now</span>
        </Link>
      </Button>
    </div>
  );
};

export default CTA2;
