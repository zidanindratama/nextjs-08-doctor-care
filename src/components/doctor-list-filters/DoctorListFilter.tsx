import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DoctorListFilter = () => {
  return (
    <div className="bg-[#fff] p-8 rounded-md border border-brandGreenLight1 md:h-fit col-span-2 md:col-span-1">
      <div>
        <p className="font-bold text-[18px] text-brandGreen">
          Jadwal Konsultasi
        </p>
        <RadioGroup defaultValue="senin_jumat" className="space-y-1 mt-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="senin_jumat" id="senin_jumat" />
            <Label htmlFor="senin_jumat">Senin - Jumat</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sabtu_minggu" id="sabtu_minggu" />
            <Label htmlFor="sabtu_minggu"> Sabtu - Minggu</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="my-6 grid gap-6">
        <p className="font-bold text-[18px] text-brandGreen mb-[-8px]">
          Konsultasi Online
        </p>
        <RadioGroup defaultValue="iya" className="grid grid-cols-2 gap-4">
          <div>
            <RadioGroupItem value="iya" id="iya" className="peer sr-only" />
            <Label
              htmlFor="iya"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Ya
            </Label>
          </div>
          <div>
            <RadioGroupItem value="tidak" id="tidak" className="peer sr-only" />
            <Label
              htmlFor="tidak"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Tidak
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <p className="font-bold text-[18px] text-brandGreen">Janji Temu</p>
        <RadioGroup defaultValue="pagi" className="space-y-1 mt-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pagi" id="pagi" />
            <Label htmlFor="pagi">Pagi</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="siang" id="siang" />
            <Label htmlFor="siang">siang</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sore" id="sore" />
            <Label htmlFor="sore">Sore</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DoctorListFilter;
