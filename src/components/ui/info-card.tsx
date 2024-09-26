import { Icon } from "@iconify/react";
import { Card, Typography } from "@material-tailwind/react";

interface AboutCardProp {
  label: string;
  description: string;
  iconName: string;
}

function InfoCard({ label, description, iconName }: AboutCardProp) {
  return (
    <Card
      className="bg-transparent w-full rounded-none flex-row items-center gap-4"
      shadow={false}
    >
      <div>
        <Icon icon={iconName} fontSize={40} className="text-white" />
      </div>

      <div className="border-l-2 rounded-none pl-4">
        <Typography variant="h5" className="text-start" color="white">
          {label}
        </Typography>
        <Typography
          className="mb-2 text-base text-start font-normal bg-red w-full"
          color="white"
        >
          {description}
        </Typography>
      </div>
    </Card>
  );
}

export default InfoCard;
