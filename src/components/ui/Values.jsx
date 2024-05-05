import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const values = [
    {

    },
    {

    },
    {

    },
]

function CarouselValues() {
  return (
    <Carousel 
    opts={{
        loop: true,
    }}
    className="p-2 w-full max-w-4xl">
      <CarouselContent className="-ml-1 md:-ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex flex-col items-center">
            <div className="p-1 w-full">
              <Card className="lg:w-full lg:">
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselValues;