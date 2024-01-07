import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GiHospitalCross } from "react-icons/gi";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { GiDoctorFace } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";

const data = [
  {
    doctor_id: 1,
    doctor_icon: GiHospitalCross,
    doctor_specialist: "Cardiologis",
    doctor_name: "Dr. John Doe",
    doctor_location: "Medis Kota",
    doctor_hour: "09:00 - 17:00",
    doctor_price: "Rp 120.000",
    doctor_description:
      "Cardiologis berpengalaman dengan spesialisasi kesehatan jantung. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur est molestiae eaque praesentium.",
  },
  {
    doctor_id: 2,
    doctor_icon: LiaHospitalAltSolid,
    doctor_specialist: "Pediatris",
    doctor_name: "Dr. Jane Smith",
    doctor_location: "Pediktris Keluarga",
    doctor_hour: "10:00 - 15:00",
    doctor_price: "Rp 90.000",
    doctor_description:
      "Pediatris berdedikasi dengan fokus pada kesehatan anak. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur est molestiae eaque praesentium.",
  },
  {
    doctor_id: 3,
    doctor_icon: GiDoctorFace,
    doctor_specialist: "Dermatologis",
    doctor_name: "Dr. Sarah Brown",
    doctor_location: "Pusat Kesehatan Kulit",
    doctor_hour: "11:00 - 18:00",
    doctor_price: "Rp 150.000",
    doctor_description:
      "Dermatologis terampil menyediakan perawatan kulit ahli. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur est molestiae eaque praesentium.",
  },
  {
    doctor_id: 4,
    doctor_icon: FaUserDoctor,
    doctor_specialist: "Dokter Bedah Ortopedi",
    doctor_name: "Dr. Michael Johnson",
    doctor_location: "Rumah Sakit OrthoCare",
    doctor_hour: "08:00 - 16:00",
    doctor_price: "Rp 180.000",
    doctor_description:
      "Dokter bedah ortopedi dengan spesialisasi kesehatan tulang dan sendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur est molestiae eaque praesentium.",
  },
];

const DoctorListCard = () => {
  return (
    <div className="col-span-2 md:col-span-3">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-[20px]">
          <span className="text-brandGreen">{data.length}</span> Dokter yang
          tersedia
        </h1>
        <Select>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nama">Nama</SelectItem>
            <SelectItem value="harga">Harga</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-8">
        {data.map((doctor) => {
          return (
            <div
              key={doctor.doctor_id}
              className="mt-6 bg-[#fff] border border-brandGreenLight1 p-8 rounded-md transition-all ease-in-out hover:translate-y-[-10px] hover:border-brandGreen"
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <doctor.doctor_icon className="md:col-span-1 text-[50px] md:text-[70px] text-brandGreen" />
                <div className="md:col-span-5">
                  <p className="text-[18px] text-grayParagraph">
                    {doctor.doctor_specialist}
                  </p>
                  <h1 className="mt-2 text-[24px] font-medium">
                    {doctor.doctor_name}
                  </h1>
                  <div className="mt-2 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex flex-row space-x-2 items-center">
                      <IoLocationOutline className="text-[20px] text-brandGreen" />
                      <p>{doctor.doctor_location}</p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                      <FiClock className="text-[20px] text-brandGreen" />
                      <p>{doctor.doctor_hour}</p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                      <BsCurrencyDollar className="text-[20px] text-brandGreen" />
                      <p>{doctor.doctor_price}</p>
                    </div>
                  </div>
                  <p className="text-grayParagraph text-justify mt-4">
                    {doctor.doctor_description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorListCard;
