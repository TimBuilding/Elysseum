import * as React from "react"
import { CardContent } from "@/components/ui/card"
import DotsComponent from '@/components/ui/dots'
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
    <div className="">
      <SCarousel
        opts={{ loop: true, }}
        className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-96 min-h-full"
      >
        <SCarouselContent className="xl:-ml-1 md:-ml-4">
          {serv.map((serv, index) => {
            return (
              <SCarouselItem key={index} className="aspect-square flex flex-col items-center lg:basis-1/3">
                <div className="p-1 w-full h-full max-w-lg">
                  <div className="relative w-full lg:w-64 xl:w-80 h-full rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
                    <div className="border-white border-4 rounded-xl absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all duration-100 delay-200 z-20 hover:opacity-0">
                      <CardContent className="flex flex-col h-full w-full max-w-2xl items-center justify-center p-10">
                        <div>
                          <p className="w-full text-xl md:text-2xl xl:text-3xl font-semibold text-center">{serv.title}</p>
                        </div>
                      </CardContent>
                    </div>
                    <div className="border-white border-4 rounded-xl absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
                      <CardContent className="rounded-xl bg-gradient-to-b from-black from-60% to-white/20 flex flex-col h-full w-full max-w-2xl items-center justify-center p-8 xl:p-10">
                        <div>
                          <p className="w-full text-lg xl:text-2xl font-semibold text-center">{serv.desc}</p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </SCarouselItem>
            )
          })}
        </SCarouselContent>
        <div className="py-10 space-x-32 flex justify-center">
          <SCarouselPrevious />
          <DotsComponent></DotsComponent>
          {/* <div>
            <DotsComponent className="bg-red-500"></DotsComponent>
          </div> */}
          <SCarouselNext />
        </div>
      </SCarousel>
    </div>
  )
}


export default SCarouselServices;