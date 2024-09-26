import { ClockIcon } from "@heroicons/react/24/solid"
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
            <TimelineIcon className="p-2">
              <ClockIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h6" color="blue-gray">
              {time}
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600">
              {description}
            </Typography>
          </TimelineBody>
        </TimelineItemComp>
  )
}

export default TimelineItem