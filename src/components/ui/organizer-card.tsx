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
  linkedin?: string;
  website?: string;
  twitter?: string;
}

function OrganizerCard({
  img,
  name,
  title,
  email,
  linkedin,
  orcid,
  website,
  twitter,
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
              <Icon icon="simple-icons:orcid" fontSize={20} />
            </IconButton>
          )}
          {linkedin && (
            <IconButton
              variant="text"
              color="gray"
              onClick={() => {
                window.open(linkedin, "_blank");
              }}
            >
              <Icon icon="bi:linkedin" fontSize={20} />
            </IconButton>
          )}
          {twitter && (
            <IconButton
              variant="text"
              color="gray"
              onClick={() => {
                window.open(twitter, "_blank");
              }}
            >
              <Icon icon="akar-icons:twitter-fill" fontSize={20} />
            </IconButton>
          )}
          {website && (
            <IconButton
              variant="text"
              color="gray"
              onClick={() => {
                window.open(website, "_blank");
              }}
            >
              <Icon icon="mdi:web" fontSize={20} />
            </IconButton>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default OrganizerCard;
