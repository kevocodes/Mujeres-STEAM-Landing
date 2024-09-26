import { ClockIcon } from "@heroicons/react/24/solid";
import { Timeline as TimelineComponent } from "@material-tailwind/react";
import TimelineItem from "./timeline-item";

const schedule = [
  {
    time: "3:00 pm",
    description: "Presentación del evento",
  },
  {
    time: "3:10 pm",
    description: "Palabras de inauguración del evento",
  },
  {
    time: "3:15 pm",
    description: "Lanzamiento de IAJES",
  },
  {
    time: "3:30 pm",
    description: "Investigación de UNA - Costa Rica"
  }
];

function Timeline() {
  return (
    <div className="max-w-[32rem] text-left">
      <TimelineComponent>
        {schedule.map((item, index) => (
          <TimelineItem
            key={index}
            time={item.time}
            description={item.description}
            withoutConnector={index === schedule.length - 1}
          />
        ))}
      </TimelineComponent>
    </div>
  );
}

export default Timeline;
