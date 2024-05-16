import React from "react";
import { twMerge } from "tailwind-merge";
import Beam from "@/components/ui/beam";

function TracingBeam() {
    return (
        <>
            <div className="px-6 pt-10 pb-6 md:hidden">
                <div className="max-w-4xl antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`}>
                            <div className="relative flex flex-col items-center md:items-left md:flex-row w-full gap-x-5 -mb-16 md:-mb-5 space-y-10 md:space-y-0 group">
                                <div className="w-96 md:hidden">
                                    {item.image1 && (
                                        <img
                                            src={item.image1}
                                            alt=""
                                            className="group-hover:scale-110 transition ease-in-out h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                                <div className="pr-0 md:pr-8 gap-y-5 md:w-2/3 w-72 text-center flex flex-col justify-center group-hover:scale-110 transition ease-in-out">
                                    <p className={twMerge("text-xl font-medium")}>
                                        {item.title1}
                                    </p>
                                    <p className="text-md">
                                        {item.description1}
                                    </p>
                                </div>
                                <div className="w-96 hidden md:flex">
                                    {item.image1 && (
                                        <img
                                            src={item.image1}
                                            alt=""
                                            className="group-hover:scale-110 transition ease-in-out h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex-col flex items-center md:items-left md:flex-row w-full gap-x-0 md:gap-x-5 mb-16 space-y-10 md:mb-20 group">
                                <div className="w-96 group-hover:scale-110 transition ease-in-out">
                                    {item.image2 && (
                                        <img
                                            src={item.image2}
                                            alt=""
                                            className="h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                                <div className="pl-0 md:pl-8 gap-y-5 md:w-2/3 w-72 text-center flex flex-col justify-center group-hover:scale-110 transition ease-in-out">
                                    <p className={twMerge("text-xl font-medium")}>
                                        {item.title2}
                                    </p>
                                    <p className="text-md">
                                        {item.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Beam className="px-6 pt-10 pb-6 hidden md:block">
                <div className="max-w-4xl antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`}>
                            <div className="relative flex flex-col items-center md:items-left md:flex-row w-full gap-x-5 -mb-16 md:-mb-8 space-y-10 md:space-y-0 group">
                                <div className="w-96 md:hidden">
                                    {item.image1 && (
                                        <img
                                            src={item.image1}
                                            alt=""
                                            className="group-hover:scale-110 transition ease-in-out h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                                <div className="pr-0 md:pr-8 gap-y-5 md:gap-y-0 md:w-2/3 lg:w-1/2 w-72 text-center flex flex-col justify-center group-hover:scale-110 transition ease-in-out">
                                    <p className={twMerge("text-xl font-medium")}>
                                        {item.title1}
                                    </p>
                                    <p className="text-md">
                                        {item.description1}
                                    </p>
                                </div>
                                <div className="w-96 hidden md:flex">
                                    {item.image1 && (
                                        <img
                                            src={item.image1}
                                            alt=""
                                            className="group-hover:scale-110 transition ease-in-out h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex-col flex items-center md:items-left md:flex-row w-full gap-x-0 md:gap-x-5 mb-16 space-y-10 md:mb-20 group">
                                <div className="w-96 group-hover:scale-110 transition ease-in-out">
                                    {item.image2 && (
                                        <img
                                            src={item.image2}
                                            alt=""
                                            className="h-48 w-full object-cover rounded-xl drop-shadow-lg"
                                        />
                                    )}
                                </div>
                                <div className="pl-0 md:pl-8 gap-y-5 md:w-2/3 lg:w-1/2 w-72 text-center flex flex-col justify-center group-hover:scale-110 transition ease-in-out">
                                    <p className={twMerge("text-xl font-medium")}>
                                        {item.title2}
                                    </p>
                                    <p className="text-md">
                                        {item.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Beam>
        </>
    );
}

export default TracingBeam;

const dummyContent = [
    {
        title1: "Client-Centric Approach",
        description1: (
            < p >
                We believe in building solid and long- lasting partnerships with our clients.
            </p >
        ),
        image1:
            "src/images/ClientCentric.svg",
    },
    {
        title2: "Innovation & Continuous Learning",
        description2: (
            <p>
                We are passionate about exploring emerging technologies, industry trends, and best practices.
            </p>
        ),
        image2:
            "src/images/Innovation.svg",
    },
    {
        title1: "Commitment to Quality & Security",
        description1: (
            <p>
                We are committed to delivering the highest quality and security in everything we do.
            </p>
        ),
        image1:
            "src/images/Security.svg",
    },
    {
        title2: "Exceptional Customer Service",
        description2: (
            <p>
                We value open and transparent communication.
            </p>
        ),
        image2:
            "src/images/CustomerService.svg",
    },
];
