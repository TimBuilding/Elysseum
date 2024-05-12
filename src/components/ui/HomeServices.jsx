import * as React from "react"
import { Card, CardContent, Front, Back } from "@/components/ui/card"
import {
  SCarousel,
  SCarouselContent,
  SCarouselItem,
  SCarouselNext,
  SCarouselPrevious,
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
    <div className="">
      {/* <SCarousel
        opts={{ loop: true, }}
        className="w-full max-w-6xl h-96 min-h-full"
      >
        <SCarouselContent className="xl:-ml-1 md:-ml-4">
          {serv.map((serv, index) => {
            return (
              <SCarouselItem key={index} className="aspect-square flex flex-col items-center md:basis-1/3 lg:basis-1/3">
                <div className="p-1 w-full h-full">
                  <Card className="h-full md:py-4 md:px-6">
                    <CardContent className="bg-red-500 flex flex-col h-full w-full max-w-2xl items-center justify-center p-6 pb-10">
                      <div>
                        <div className="md:px-0 lg:px-6 bg-red-200">
                          <p className="w-full md:text-lg xl:text-3xl font-semibold text-center">{serv.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </SCarouselItem>
            );
          })};
        </SCarouselContent>
        <div className="py-10 space-x-56 flex justify-center">
          <SCarouselPrevious />
          <SCarouselNext />
        </div>
      </SCarousel> */}

      <SCarousel
        opts={{ loop: true, }}
        className="w-full max-w-6xl h-96 min-h-full"
      >
        <SCarouselContent className="xl:-ml-1 md:-ml-4">
          {serv.map((serv, index) => {
            return (
              <SCarouselItem key={index} className="flex flex-col items-center md:basis-1/3 lg:basis-1/3">
                <div className="relative cursor-pointer transition-all duration-700 card w-full h-full">
                  <Card className="absolute bg-blue-500 inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-1000 delay-200 hover:opacity-0">
                    <CardContent className="relative z-20 hover:z-10 flex flex-col h-full w-full max-w-2xl items-center justify-center p-6 pb-10">
                      <div>
                        <div className="md:px-0 lg:px-6 bg-red-200">
                          <p className="w-full md:text-lg xl:text-3xl font-semibold text-center">LLLL</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Back className="absolute bg-red-500 absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all card-back">
                    <CardContent className="z-50 flex flex-col h-full w-full max-w-2xl items-center justify-center">
                      <div>
                        <div className="md:px-0 lg:px-6 bg-red-200">
                          <p className="w-full md:text-lg xl:text-3xl font-semibold text-center">HELLO</p>
                        </div>
                      </div>
                    </CardContent>
                  </Back>
                </div>
              </SCarouselItem>
            );
          })};
        </SCarouselContent>
        <div className="py-10 space-x-56 flex justify-center">
          <SCarouselPrevious />
          <SCarouselNext />
        </div>
      </SCarousel>
    </div>
  )
}


export default SCarouselServices;