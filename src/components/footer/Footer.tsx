import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 pt-20 pb-10 bg-brandGreen">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-9 md:justify-items-center">
        <div className="space-y-4 col-span-2 md:col-span-1">
          <Image src={"./Logo.svg"} width={180} height={180} alt="logo" />
          <p className="text-white">&copy; 2023 - DoctorCare</p>
          <p className="text-white">
            DoctorCare Medical Center <br /> Jl. Kesehatan No. 123 <br /> Kota
            Sehat, 12345
          </p>
        </div>
        <div className="text-white col-span-1">
          <h1 className="font-bold text-[20px] mb-4">Menu</h1>
          <ul className="space-y-2">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/consult"}>Consult</Link>
            </li>
            <li>
              <Link href={"/doctor"}>Doctor</Link>
            </li>
          </ul>
        </div>
        <div className="text-white col-span-1">
          <h1 className="font-bold text-[20px] mb-4">Social</h1>
          <ul className="space-y-2">
            <li>
              <Link href={"#"}>Github</Link>
            </li>
            <li>
              <Link href={"#"}>Facebook</Link>
            </li>
            <li>
              <Link href={"#"}>Doctor</Link>
            </li>
          </ul>
        </div>
        <div className="text-white col-span-2 md:col-span-1">
          <h1 className="font-bold text-[20px] mb-4">Contact</h1>
          <ul className="space-y-2">
            <li>
              <p>+62 123 456 7890</p>
            </li>
            <li>
              <p>info@doctorcare.com</p>
            </li>
            <li>
              <p>DoctorCare Medical Center</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
