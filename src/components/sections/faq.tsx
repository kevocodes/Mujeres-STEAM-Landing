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
    title: "1. Pregunta 1",
    desc: "Respuesta 1",
  },
  {
    title: "2. Pregunta 2",
    desc: "Respuesta 2",
  },
  {
    title: "3. Pregunta 3",
    desc: "Respuesta 3",
  },
  {
    title: "4. Pregunta 4",
    desc: "Respuesta 4",
  },
  {
    title: "5. Pregunta 5",
    desc: "Respuesta 5",
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
