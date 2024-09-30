"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "¿Ser parte de la Cumbre del empoderamieno de las niñas en STEM tiene costo?",
    desc: "No, es completamente gratuito. ",
  },
  {
    title: "¿Cuál es la modalidad de la Cumbre del empoderamieno de las niñas en STEM?",
    desc: "Híbrido, puedes ser parte de forma presencial o puedes conectarte al enlace de transmisión a través de youtube. ",
  },
  {
    title: "¿La Cumbre del empoderamieno de las niñas en STEM, es exclusiva para el género femenino?",
    desc: "No, todos son bienvenidos a la Cumbre del empoderamieno de las niñas en STEM, sin importar el género.",
  },
  {
    title: "¿Cual es la sede principal de la Cumbre del empoderamiento de las niñas en STEM? ",
    desc: "Universidad Centroamericana José Simeón Cañas, El Salvador",
  },
  {
    title: "¿Puedo ser parte de la Cumbre del empoderamiento de las niñas en STEM, como ponente?",
    desc: "Si, puedes ser parte debes contactarte con las organizadoras del evento para valorar la participación en futuras cumbres.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="pt-8 px-8 lg:pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h4" className="mb-8 uppercase text-[#f95c97]">
            Preguntas frecuentes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Bienvenido a la segunda edición de la Cumbre del Empoderamiento.
            Estamos aquí para responder tus preguntas más comunes y
            proporcionarte la información que necesitas para aprovechar al
            máximo tu experiencia en la cumbre.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-[#f95c97] hover:text-[#f95c97]/70">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
