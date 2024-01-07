import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeMotionBottom } from "../framer-animation/Fade";

const FAQConsult = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <FadeMotionBottom>
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-grayHeadline text-[20px] md:text-[30px] mb-6">
            Pertanyaan Umum (FAQ)
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Bagaimana saya dapat membuat janji temu dengan dokter?
              </AccordionTrigger>
              <AccordionContent>
                Anda dapat membuat janji temu dengan dokter melalui platform
                online kami atau menghubungi pusat layanan pelanggan kami di
                nomor telepon yang tertera di situs web.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Apakah Doctor Care menerima asuransi kesehatan?
              </AccordionTrigger>
              <AccordionContent>
                Ya, Doctor Care menerima sejumlah besar asuransi kesehatan.
                Silakan periksa dengan tim administrasi kami atau hubungi
                perusahaan asuransi Anda untuk informasi lebih lanjut.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Apakah Doctor Care menyediakan layanan darurat?
              </AccordionTrigger>
              <AccordionContent>
                Tentu saja. Doctor Care menyediakan layanan darurat 24 jam
                sehari, 7 hari seminggu. Untuk bantuan segera, hubungi nomor
                darurat yang tertera di situs web kami.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Bagaimana saya bisa mendapatkan informasi lebih lanjut tentang
                program rehabilitasi?
              </AccordionTrigger>
              <AccordionContent>
                Untuk informasi lebih lanjut tentang program rehabilitasi, Anda
                dapat menghubungi pusat layanan pelanggan kami atau berbicara
                langsung dengan dokter atau tim rehabilitasi kami selama
                kunjungan Anda.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </FadeMotionBottom>
    </div>
  );
};

export default FAQConsult;
