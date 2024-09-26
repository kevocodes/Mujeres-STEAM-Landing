"use client";

import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import AboutCard from "@/components/ui/about-card";
import mission from "@/assets/images/mision.png";
import vission from "@/assets/images/vision.png";

const EVENT_INFO = [
  {
    img: mission.src,
    title: "Nuestra misión",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    img: vission.src,
    title: "Nuestra visión",
    description:
      "Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h4" className="text-center mb-2 uppercase text-[#f95c97]">
        Sobre el evento
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        ¿Qué es la cumbre del empoderamiento?
      </Typography>

      <Carousel
        className="rounded-xl py-8 mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-gray-500" : "w-4 bg-gray-500/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplayDelay={5000}
        loop
      >
        <Typography variant="lead" className="px-14">
          La Cumbre del Empoderamiento de las Niñas en STEM es un evento anual
          que se celebra en conmemoración al Día Internacional de la Niña, que
          se observa el 11 de octubre.
        </Typography>

        <Typography variant="lead" className="px-14">
          Este evento tiene como objetivo crear un espacio dinámico y
          participativo donde se reúnan organismos, organizaciones y destacados
          investigadores nacionales e internacionales para abordar cuestiones
          cruciales relacionadas con el fomento de las niñas en las disciplinas
          STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).
        </Typography>

        <Typography variant="lead" className="px-14">
          En esta Cumbre, se fomenta un diálogo enriquecedor y la presentación
          de proyectos e iniciativas existentes que buscan promover y empoderar
          a las niñas en STEM.
        </Typography>

        <Typography variant="lead" className="px-14">
          Además, se brinda una plataforma de visibilidad a investigadoras y
          expertas tanto nacionales como internacionales, que comparten sus
          conocimientos y experiencias para inspirar a las futuras generaciones
          de mujeres en el ámbito STEM.
        </Typography>
      </Carousel>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;
