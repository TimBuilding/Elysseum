import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselServices = () => {
  const serv = [
    {
      title: 'IT Strategy & Planning'
    },
    {
      title: 'Digital Transformation'
    },
    {
      title: 'IT Infrastructure Design & Implementation'
    },
    {
      title: 'Cybersecurity'
    },
    {
      title: 'IT Project Management'
    },
    {
      title: 'IT Support & Maintenance'
    },
    {
      title: 'IT Training & Education'
    },
  ]

  return (
    <Carousel
      opts={{ loop: true, }}
      className="w-full max-w-screen"
    >
      <CarouselContent className="-ml-1 md:-ml-4">
        {serv.map((serv, index) => {
          return (
            <CarouselItem key={index} className="flex flex-col items-center basis-1/4">
              <div className="p-1 w-full h-full">
                <Card className="h-full">
                  <CardContent className="m-4 flex flex-col aspect-video items-center justify-center p-6 pb-10">
                    <div>
                      <div className="px-6">
                        <p className="text-4xl font-semibold">{serv.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })};
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


export default CarouselServices;