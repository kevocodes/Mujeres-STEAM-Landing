import { ClockIcon } from "@heroicons/react/24/solid"
import { Icon } from "@iconify/react";
import { TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem as TimelineItemComp, Typography } from "@material-tailwind/react"

interface TimelineItemProps {
  time: string;
  description: string;
  withoutConnector?: boolean;
}

function TimelineItem({ time, description, withoutConnector }: TimelineItemProps) {
  return (
    <TimelineItemComp>
          {!withoutConnector && <TimelineConnector />}

          <TimelineHeader>
            <TimelineIcon className="bg-white p-[1px]" >
              <Icon icon="majesticons:clock" fontSize={20} className="text-[#F95C97]"/>
            </TimelineIcon>
            <Typography variant="h6" color="white">
              {time}
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-white">
              {description}
            </Typography>
          </TimelineBody>
        </TimelineItemComp>
  )
}

export default TimelineItem

