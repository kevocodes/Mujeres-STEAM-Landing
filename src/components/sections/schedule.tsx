"use client"

import { Typography } from "@material-tailwind/react"
import Timeline from "../ui/timeline"
import { time } from "console"

function Schedule() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        <Typography variant="h4" className="mb-8 uppercase text-[#f95c97]">
          Programación del evento
        </Typography>
        
        <Timeline />
      </div>
    </section>
  )
}

export default Schedule