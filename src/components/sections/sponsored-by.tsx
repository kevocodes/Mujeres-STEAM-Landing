"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

import logoEmbajadaUK from "@/assets/images/logoEmbajadaUK.png";
import logoREDLIES from "@/assets/images/logoREDLIES.png";
import logoUAH from "@/assets/images/logoUAH.png";
import logoUNFPA from "@/assets/images/logoUNFPA.png";
import logoCIESCE from "@/assets/images/logoCIESCE.png";
import logoDEI from "@/assets/images/logoDEI.png"

const SPONSORS = [
  logoEmbajadaUK,
  logoREDLIES,
  logoUAH,
  logoUNFPA,
  logoCIESCE, logoDEI
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
