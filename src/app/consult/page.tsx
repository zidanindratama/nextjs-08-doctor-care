import DoctorConsult from "@/components/doctor-consult/DoctorConsult";
import Footer from "@/components/footer/Footer";
import HeroConsult from "@/components/hero-consult/HeroConsult";
import Navbar from "@/components/navbar/Navbar";
import TexrDoctorConsult from "@/components/text-doctor-consult/TexrDoctorConsult";
import FAQConsult from "@/components/faq-consult/FAQConsult";
import React from "react";
import TeamDescription from "@/components/team-description/TeamDescription";

const page = () => {
  return (
    <main>
      <Navbar />
      <TeamDescription />
      <HeroConsult />
      <DoctorConsult />
      <TexrDoctorConsult />
      <FAQConsult />
      <Footer />
    </main>
  );
};

export default page;
