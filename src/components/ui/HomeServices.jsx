import * as React from "react"
import { CardContent } from "@/components/ui/card"
import {
  SCarousel,
  SCarouselContent,
  SCarouselItem,
  SCarouselNext,
  SCarouselPrevious,
  DotNavigator
} from "@/components/ui/homeserv"

const SCarouselServices = () => {
  const serv = [
    {
      title: 'IT Strategy & Planning',
      desc: 'We work closely with businesses to develop IT strategies that align with their objectives.',

    },
    {
      title: 'Digital Transformation',
      desc: 'We guide organizations through digital transformation by helping them adopt new technologies and reshape their business processes.',

    },
    {
      title: 'IT Infrastructure Design & Implementation',
      desc: "We design and implement robust and scalable IT infrastructures tailored to our clients' needs.",

    },
    {
      title: 'Cybersecurity',
      desc: 'We provide comprehensive cybersecurity services to protect businesses from evolving threats.',

    },
    {
      title: 'IT Project Management',
      desc: 'We manage IT projects from initiation to completion, ensuring successful implementation within scope, budget, and timeline.',

    },
    {
      title: 'IT Support & Maintenance',
      desc: "We offer ongoing IT support services to keep our clients' systems running smoothly.",

    },
    {
      title: 'IT Training & Education',
      desc: "We provide training programs and workshops to empower our clients' employees with the necessary IT skills and knowledge.",

    },
  ]

  return (
    <div>
      <SCarousel
        opts={{ loop: true, }}
        className=" xl:mb-32 sm:w-80 md:w-full lg:w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-96 min-h-full"
      >
        <SCarouselContent className="mt-10 md:mt-0 md:ml-0 lg:ml-4">
          {serv.map((serv, index) => {
            return (
              <SCarouselItem key={index} className="aspect-square flex flex-col items-center md:basis-1/3">
                <div className="p-1 w-full h-full max-w-sm lg:max-w-lg card-wrapper">
                  <div className="relative w-full md:w-48 lg:w-64 xl:w-80 h-full rounded-xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
                    <div className="bg-black rounded-xl absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0">
                      <CardContent className="rounded-xl flex flex-col h-full w-full max-w-2xl items-center justify-center p-10">
                        <div>
                          <p className="w-full text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">{serv.title}</p>
                        </div>
                      </CardContent>
                    </div>
                    <div className="rounded-xl absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
                      <CardContent className="rounded-xl flex flex-col h-full w-full max-w-2xl items-center justify-center p-8 xl:p-10">
                        <div>
                          <p className="w-full text-lg md:text-xs lg:text-xl xl:text-2xl font-semibold text-center">{serv.desc}</p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </SCarouselItem>
            )
          })}
        </SCarouselContent>
        <div className="py-10 space-x-12 flex justify-center items-center">
          <SCarouselPrevious />
          <DotNavigator client:load/>
          <SCarouselNext />
        </div>
      </SCarousel>
    </div>
  )
}


export default SCarouselServices;