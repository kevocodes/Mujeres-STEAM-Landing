"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

import logo1 from "@/assets/images/logo1.jpg";
import logo2 from "@/assets/images/logo2.jpg";
import logo3 from "@/assets/images/logo3.jpg";
import logo4 from "@/assets/images/logo4.png";
import logo5 from "@/assets/images/logo5.png";
import logo6 from "@/assets/images/logo6.png";
import logo7 from "@/assets/images/logo7.png";
import logo8 from "@/assets/images/logo8.jpg";
import logo9 from "@/assets/images/logo9.png";
import logo10 from "@/assets/images/logo10.png";
import logo11 from "@/assets/images/logo11.png";
import logo12 from "@/assets/images/logo12.png";

const SPONSORS = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h4" className="mb-8 uppercase text-[#f95c97]">
          Coorganizadores
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={logo}
              alt="logo"
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
