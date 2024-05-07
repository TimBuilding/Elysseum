import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const CarouselValues = () => {
  const values = [
    {
      title: 'Client-Centric Approach',
      subtitle: 'We believe in building solid and long-lasting partnerships with our clients.',
      text: 'By truly understanding their unique challenges, goals, and requirements, we tailor our solutions to meet their specific needs. We collaborate, working closely with our clients to develop strategies that align with their business objectives and deliver measurable results.',
    },
    {
      title: "Innovation & Continuous Learning",
      subtitle: "We are passionate about exploring emerging technologies, industry trends, and best practices.",
      text: "In the ever-evolving world of technology, staying ahead requires a relentless pursuit of innovation and continuous learning. At Elysseum, we provide our clients with the most up-to-date solutions and recommendations, ensuring they remain at the forefront of technological advancements."
    },
    {
      title: "Commitment to Quality & Security",
      subtitle: "We are committed to delivering the highest quality and security in everything we do.",
      text: " Our team adheres to industry best practices, rigorous quality standards, and the latest cybersecurity protocols. We prioritize protecting our clients' sensitive data and systems and implementing robust security measures to safeguard against threats and vulnerabilities."
    },
    {
      title: "Exceptional Customer Service",
      subtitle: "We value open and transparent communication, actively listening to our clients' needs, and responding promptly to their inquiries.",
      text: "At the heart of our business is a dedication to providing exceptional customer service. Our team is friendly, approachable, and committed to ensuring a positive experience throughout every engagement.",
    },
  ];

  return (
    <Carousel
      opts={{ loop: true, }}
      className="p-2 w-full max-w-4xl h-full max-h-2xl"
    >
      <CarouselContent className="-ml-1 md:-ml-4">
        {values.map((values, index) => {
          return (
            <CarouselItem key={index} className="flex flex-col items-center">
              <div className="p-1 w-full h-full">
                <Card className="h-full">
                  <CardContent className="m-4 flex flex-col aspect-video items-center justify-center p-6 pb-10">
                    <div>
                      <div className="bg-red-500 h-80 max-h-md mb-8">
                      </div>
                      <div className="px-6">
                        <p className="text-4xl font-semibold">{values.title}</p>
                        <p className="my-4 text-xl font-medium">{values.subtitle}</p>
                        <p className="text-justify leading-6">{values.text}</p>
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

export default CarouselValues;