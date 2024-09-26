import { Icon } from "@iconify/react";
import { Card, CardBody, Typography, Button, Avatar } from "@material-tailwind/react";

interface AboutCardProp {
  img: string;
  title: string;
  description: string;
}

export function AboutCard({ img, title, description }: AboutCardProp) {
  return (
    <Card>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl text-[#f95c97]">
        <Avatar
            src={img}
            alt={title}
            variant="square"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
        <Typography variant="h4" className="text-center">
          {title}
        </Typography>
        <Typography
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
