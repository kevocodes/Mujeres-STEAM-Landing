"use client";

import { Button, Typography } from "@material-tailwind/react";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import InfoCard from "../ui/info-card";

const INFO = [
  {
    label: "Lugar",
    description:
      "Auditorio Elba y Celina Ramos. Edificio D. Campus UCA, El Salvador",
    iconName: "ion:location"
  },
  {
    label: "Modalidad",
    description: "Formato hibrido",
    iconName: "fluent:people-team-16-filled"
  },
  {
    label: "Hora",
    description: "3:00 pm - 6:00 pm (UTC-6)",
    iconName: "mdi:clock"
  },
  {
    label: "Fecha",
    description: "Viernes 10 de diciembre de 2021",
    iconName: "ion:calendar"
  },
];

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/background2.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center gap-6">
          <Typography
            variant="h1"
            color="white"
            className="lg:max-w-3xl text-[40px] sm:text-[48px]"
          >
            II Cumbre del empoderamiento de las niñas en STEM
          </Typography>
          <div className="flex items-center gap-4">
            <Button color="white" className="flex items-center gap-3">
              <p className="pt-1">Ver evento en vivo</p>
              <VideoCameraIcon className="h-5 w-5 text-gray-900" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-xl gap-3 place-items-center mt-6">
            {INFO.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;