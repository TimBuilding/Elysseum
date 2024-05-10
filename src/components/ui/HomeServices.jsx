import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  SCarousel,
  SCarouselContent,
  SCarouselItem,
  SCarouselNext,
  SCarouselPrevious,
  SCarouselDotIndicator,
} from "@/components/ui/homeserv"

const SCarouselServices = () => {
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
    <SCarousel
      opts={{ loop: true, }}
      className="w-full max-w-screen"
    >
      <SCarouselContent className="xl:-ml-1 md:-ml-4">
        {serv.map((serv, index) => {
          return (
            <SCarouselItem key={index} className="flex flex-col items-center md:basis-1/3 lg:basis-1/4">
              <div className="p-1 w-full h-full">
                <Card className="h-full md:py-4 md:px-6">
                  <CardContent className="flex flex-col h-full lg:aspect-video items-center justify-center p-6 pb-10">
                    <div>
                      <div className="md:px-0 lg:px-6">
                        <p className="md:text-lg lg:text-4xl font-semibold text-center">{serv.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SCarouselItem>
          );
        })};
      </SCarouselContent>
      <SCarouselPrevious />
      <SCarouselDotIndicator />
      <SCarouselNext />
    </SCarousel>
  )
}


export default SCarouselServices;