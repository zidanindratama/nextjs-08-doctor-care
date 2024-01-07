import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoctorCare",
  description: "Kelompok 6 dari 2IA08 untuk mata kuliah Informatika Kesehatan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} bg-brandGreenLight2`}>
        {children}
      </body>
    </html>
  );
}
