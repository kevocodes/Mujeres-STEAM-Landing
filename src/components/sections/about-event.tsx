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
      "Promover la educación y el empoderamiento de las niñas en áreas STEM a través de la colaboración entre organismos nacionales e internacionales, fomentando el intercambio de ideas y experiencias a través de un espacio inclusivo para la difusión de investigaciones y la presentación de proyectos que impulsen la participación femenina en estas disciplinas, asegurando un futuro más equitativo y sostenible.",
  },
  {
    img: vission.src,
    title: "Nuestra visión",
    description:
      "Ser un referente en la promoción de la educación STEM para niñas, donde cada año se reúnan líderes, educadores y defensores del cambio para inspirar, innovar y transformar la percepción y la realidad de las mujeres en ciencias, tecnología, ingeniería y matemáticas, contribuyendo así al desarrollo de la sociedad salvadoreña.",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h4" className="text-center mb-2 uppercase text-[#f95c97]">
        Sobre el evento
      </Typography>
      

      <Carousel
        className="rounded-xl py-8 mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -left-3 -translate-y-2/4"
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
            className="!absolute top-2/4 !-right-3 -translate-y-2/4"
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
        <div>
          <Typography variant="h3" className="text-center" color="blue-gray">
            ¿Qué es la cumbre del empoderamiento?
          </Typography>

          <Typography variant="lead" className="px-14 pt-6">
          La Cumbre del Empoderamiento de las niñas en STEM se celebra anualmente en conmemoración al día internacional de la niña el 11 de octubre, el cual permite la participación de organismos y organizaciones nacionales e internacionales, para conversar sobre proyectos o iniciativas existentes para la promoción de la educación de las niñas en  carreras STEM y la vez brindar un espacio para la difusión de  investigaciones nacionales e internacionales sobre la participación de las mujeres en esta área.
          </Typography>
        </div>

        <div className="h-full flex flex-col justify-center items-center">
          <Typography variant="h3" className="text-center" color="blue-gray">
            Objetivos
          </Typography>

          <div className="flex flex-col gap-3">
            <Typography variant="lead" className="px-14 pt-6">
              •   Sensibilizar a la población sobre la importancia del crecimiento académico, profesional y laboral de las mujeres en el área STEM.
            </Typography>

            <Typography variant="lead" className="px-14">
              •   Organizar anualmente un espacio que permita promover el interés del género femenino por carreras técnicas.
            </Typography>
          </div>
        </div>
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
