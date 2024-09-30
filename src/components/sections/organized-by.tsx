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
    orcid: "https://orcid.org/0009-0003-5667-3036",
    scholar: "https://scholar.google.es/citations?user=0sZr4IsAAAAJ&hl=es"
  },
  {
    img: marleneImg.src,
    name: "Marlene Navarro",
    title: "Ingeniera en Sistemas y Redes Informáticas",
    email: "meaguilar@uca.edu.sv",
    orcid: "https://orcid.org/0009-0003-5667-3036",
    scholar: "https://scholar.google.es/citations?user=ICZpLH8AAAAJ&hl=es"
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
