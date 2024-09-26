"use client";

import { Typography } from "@material-tailwind/react";
import OrganizerCard from "../ui/organizer-card";
import gabrielaImg from "@/assets/images/ingG.png";
import marleneImg from "@/assets/images/ingM.png";


const organizers = [
  {
    img: gabrielaImg.src,
    name: "Gabriela Reynosa",
    title: "Ingeniera en Electrónica",
    email: "greynosa@uca.edu.sv",
    orcid: "https://orcid.org/0000-0002-1825-0097",
    linkedin: "https://www.linkedin.com/in/gabriela-reynosa-7b0b3b1b7/",
  },
  {
    img: marleneImg.src,
    name: "Marlene Navarro",
    title: "Ingeniera en Sistemas y Redes Informáticas",
    email: "meaguilar@uca.edu.sv",
    website: "https://www.linkedin.com/in/marlene-navarro-7b0b3b1b7/",
    orcid: "https://orcid.org/0000-0002-1825-0097",
    linkedin: "https://www.linkedin.com/in/marlene-navarro-7b0b3b1b7/",
    twitter: "https://twitter.com/marlenenavarro",
  },
];

export function OrganizedBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h4" className="mb-8 uppercase text-[#f95c97]">
          Organizadores
        </Typography>
        <div className="flex flex-wrap gap-6 justify-center">
          {organizers.map((props, key) => (
            <OrganizerCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrganizedBy;
