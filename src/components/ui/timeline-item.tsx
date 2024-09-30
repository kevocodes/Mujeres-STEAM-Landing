import { ClockIcon } from "@heroicons/react/24/solid"
import { Icon } from "@iconify/react";
import { TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem as TimelineItemComp, Typography } from "@material-tailwind/react"

interface TimelineItemProps {
  time: string;
  description: string;
  place: string;
  mode: string;
  withoutConnector?: boolean;
}

function TimelineItem({ time, description, place, mode, withoutConnector }: TimelineItemProps) {
  return (
    <TimelineItemComp>
          {!withoutConnector && <TimelineConnector />}

          <TimelineHeader>
            <TimelineIcon className="bg-white p-[1px] flex flex-row justify-center items-center" >
              <ClockIcon className="h-4 w-4 text-[#F95C97]" />            </TimelineIcon>
            <Typography variant="h6" color="white">
              {time}
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-white">
              {description}
            </Typography>
            <Typography color="gray" className="font-normal text-white">
            <span className="font-bold">Lugar:</span> {place}
            </Typography>
            <Typography color="gray" className="font-normal text-white">
            <span className="font-bold">Modalidad:</span> {mode}
            </Typography>
          </TimelineBody>
        </TimelineItemComp>
  )
}

export default TimelineItem

