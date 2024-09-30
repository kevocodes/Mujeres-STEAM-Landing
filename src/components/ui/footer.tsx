import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];
import Image from "next/image";
import logoDEIBlanco from "@/assets/images/logoDEIBlanco.png"

export function Footer() {
  return (
      <footer className="w-full mt-[20%]">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bg-cover"><path fill="#F95C97" fill-opacity="1" d="M0,0L48,21.3C96,43,192,85,288,90.7C384,96,480,64,576,48C672,32,768,32,864,64C960,96,1056,160,1152,197.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

        <div className="bg-[#F95C97] flex flex-col justify-center items-center relative">

        <svg className="absolute bottom-[95%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F95C97" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,240C320,267,400,277,480,277.3C560,277,640,267,720,245.3C800,224,880,192,960,197.3C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" className=""></path></svg>

          <img src={logoDEIBlanco.src} className="w-[280px] lg:w-[350px] pb-9"/>
        </div>
        
      </footer>
  );
}

export default Footer;

//pb-5 p-10 md:pt-10
