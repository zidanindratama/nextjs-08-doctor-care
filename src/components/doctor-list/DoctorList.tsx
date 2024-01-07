import React from "react";
import DoctorListFilter from "../doctor-list-filters/DoctorListFilter";
import DoctorListCard from "../doctor-list-card/DoctorListCard";
import CTA2 from "../call-to-action-2/CTA2";
import { FadeMotionBottom } from "../framer-animation/Fade";

const DoctorList = () => {
  return (
    <div className="px-5 py-24">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
            <DoctorListFilter />
            <DoctorListCard />
          </div>
          <CTA2 />
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default DoctorList;
