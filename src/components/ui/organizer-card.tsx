import { Icon } from "@iconify/react";
import {
  Avatar,
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  email: string;
  orcid?: string;
  scholar?: string;
}

function OrganizerCard({
  img,
  name,
  title,
  email,
  orcid,
  scholar,
}: TeamCardPropsType) {
  return (
    <Card className="rounded-lg flex-1 max-w-64" shadow={false}>
      <CardBody className="text-center h-full flex flex-col">
        <div className="flex-1">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="!font-semibold text-lg"
          >
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="!text-base !font-semibold text-gray-600"
          >
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base text-gray-600 italic"
          >
            {email}
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          {orcid && (
            <IconButton
              variant="text"
              color="gray"
              onClick={() => {
                window.open(orcid, "_blank");
              }}
            >
              <Icon icon="simple-icons:orcid" fontSize={24} />
            </IconButton>
          )}
          {scholar && (
            <IconButton
              variant="text"
              color="gray"
              onClick={() => {
                window.open(scholar, "_blank");
              }}
            >
              <div className="bg-black w-[24px] h-[24px] flex justify-center items-center rounded-full">
              <Icon icon="academicons:google-scholar" fontSize={20} className="text-white"/>
              </div>
            </IconButton>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default OrganizerCard;
