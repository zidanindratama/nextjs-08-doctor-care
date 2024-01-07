import CTA from "@/components/call-to-action/CTA";
import DoctorAbout from "@/components/doctor/DoctorAbout";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import TeamDescription from "@/components/team-description/TeamDescription";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TeamDescription />
      <Hero />
      <Services />
      <DoctorAbout />
      <CTA />
      <Footer />
    </main>
  );
}
