import DoctorList from "@/components/doctor-list/DoctorList";
import DoctorSearchHeader from "@/components/doctor-search-header/DoctorSearchHeader";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TeamDescription from "@/components/team-description/TeamDescription";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <TeamDescription />
      <DoctorSearchHeader />
      <DoctorList />
      <Footer />
    </main>
  );
};

export default page;
