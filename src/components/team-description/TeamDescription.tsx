import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FadeMotionRight, FadeMotionLeft } from "../framer-animation/Fade";
import Link from "next/link";

const TeamDescription = () => {
  return (
    <div className="fixed w-full px-5 pt-24 pb-4 bg-brandBeige z-[3]">
      <div className="max-w-5xl mx-auto flex flex-row justify-between items-center space-x-5">
        <FadeMotionLeft>
          <h1 className="text-[16px] font-bold">
            Klik <span className="text-brandGreen">tombol</span> untuk melihat
            <span className="text-brandGreen"> informasi</span> website
          </h1>
        </FadeMotionLeft>
        <Drawer>
          <DrawerTrigger>
            <FadeMotionRight>
              <Button className="rounded-full bg-brandGreen text-white border-brandGreen font-bold hover:bg-brandGreenHover hover:border-brandGreenHover space-x-2">
                <span className="text-[14px]">Lihat</span>
              </Button>
            </FadeMotionRight>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="mx-auto ">
              <DrawerTitle className="text-center my-6">
                Anggota Kelompok
              </DrawerTitle>
              <DrawerDescription>
                <Table>
                  <TableCaption className="mt-6">
                    Selamat datang di website ini! Web ini merupakan proyek
                    tugas mata kuliah Informatika Kesehatan. Dibangun dengan
                    menggunakan Next.js, Shadcn UI, dan Tailwind CSS. <br />{" "}
                    <br />
                    <Link
                      href={
                        "https://github.com/zidanindratama/nextjs-08-doctor-care"
                      }
                      className="text-blue-400"
                    >
                      https://github.com/zidanindratama/nextjs-08-doctor-care
                    </Link>
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>NO</TableHead>
                      <TableHead>NAMA</TableHead>
                      <TableHead>NPM</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="font-medium capitalize">
                        DAFFA RAMZY SAPUTRA
                      </TableCell>
                      <TableCell>50422371</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell className="font-medium capitalize">
                        MUHAMAD ZIDAN INDRATAMA
                      </TableCell>
                      <TableCell>50422968</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell className="font-medium capitalize">
                        MUHAMMAD RIDHO PRATAMA
                      </TableCell>
                      <TableCell>51422139</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell className="font-medium capitalize">
                        MUHAMMAD YOZA NIRWAN
                      </TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell className="font-medium capitalize">
                        ZULFA AULIA HANAFI
                      </TableCell>
                      <TableCell>51422690</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Tutup</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default TeamDescription;
