import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import logoCumbre from "@/assets/images/logoCumbre.svg";
import logoCumbreRosa from "@/assets/images/logoCumbreRosa.svg";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        {isScrolling && (
          <>
            {/* <Typography
              color={isScrolling ? "blue-gray" : "white"}
              className="text-lg font-bold"
            >
              Cumbre STEM
            </Typography> */}

            <div>
              <img src={logoCumbreRosa.src} className="h-[90px] w-[200px]" />
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <Button
                color={isScrolling ? "gray" : "white"}
                className="flex gap-3"
                variant="gradient"
                onClick={() => {
                  window.open("https://www.youtube.com/watch?v=fhQKBkEdbMM", "_blank");
                }}
              >
                <p className="pt-1">Ver evento en vivo</p>
                <VideoCameraIcon className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <div className="mt-6 flex items-center gap-4">
            <Button
              color={isScrolling ? "gray" : "white"}
              className="flex gap-3 w-full"
            >
              <p className="pt-1">Ver evento en vivo</p>
              <VideoCameraIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>{" "}
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
