import { ClockIcon } from "@heroicons/react/24/solid";
import { Timeline as TimelineComponent } from "@material-tailwind/react";
import TimelineItem from "./timeline-item";

const schedule = [
  {
    time: "8:00 am",
    description: "Registro de asistencia y montaje de feria",
    place: "Atrio ICAS",
    mode: "Presencial"
  },
  {
    time: "8:30 am",
    description: "Saludo",
    place: "Segundo Montes",
    mode: "Híbrido"
  },
  {
    time: "8:35 am - 9:00 am",
    description: "Ponencia: Los retos de las mujeres del area de ingenieria",
    place: "Segundo Montes",
    mode: "Híbrido"
  },
  {
    time: "9:05 am - 9:50 am",
    description: "Panel: Proyectos o iniciativas, políticas en apoyo a la educación y mujeres en STEM",
    place: "Segundo Montes",
    mode: "Híbrido"
  },
  {
    time: "9:50 am - 10:00 am",
    description: "Receso",
    place: "Atrio ICAS",
    mode: "Híbrido"
  },
  {
    time: "10:05 am - 10:40 am",
    description: "Panel: Experiencias de estudiantes UCA en Intercambios internacionales",
    place: "Segundo Montes",
    mode: "Híbrido"
  },
  {
    time: "10:40 am - 10:45 am",
    description: "Palabras de cierre",
    place: "Segundo Montes",
    mode: "Híbrido"
  },
  {
    time: "10:45 am - 11:30 am",
    description: "Feria de proyectos",
    place: "Atrio ICAS",
    mode: "Presencial"
  },
];

function Timeline() {
  return (
    <div className="max-w-[32rem] text-left text-white">
      <TimelineComponent>
        {schedule.map((item, index) => (
          <TimelineItem
            key={index}
            time={item.time}
            description={item.description}
            place={item.place}
            mode={item.mode}
            withoutConnector={index === schedule.length - 1}
          />
        ))}
      </TimelineComponent>
    </div>
  );
}

export default Timeline;
