"use client"

import { Typography } from "@material-tailwind/react"
import Timeline from "../ui/timeline"
import { time } from "console"

function Schedule() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-[url('/image/background2.jpg')] bg-cover bg-no-repeat bg-fixed">
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        <Typography variant="h4" className="mb-8 uppercase text-white">
          Programación del evento
        </Typography>
        
        <Timeline/>
      </div>
    </section>
  )
}

export default Schedule