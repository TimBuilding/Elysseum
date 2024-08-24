import React, { forwardRef, useContext, useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/button";
import ReactDOM from "react-dom";

const CarouselContext = React.createContext(null);

function useCarousel() {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }

    return context;
}

const SCarousel = forwardRef(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        );
        const [canScrollPrev, setCanScrollPrev] = useState(false);
        const [canScrollNext, setCanScrollNext] = useState(false);
        const dotsNodeRef = useRef(null);


        const onSelect = useCallback((api) => {
            if (!api) {
                return;
            }

            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        const scrollPrev = useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = useCallback(
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext]
        );

        useEffect(() => {
            if (!api || !setApi) {
                return;
            }

            setApi(api);
        }, [api, setApi]);

        useEffect(() => {
            if (!api) {
                return;
            }

            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);

            return () => {
                api?.off("select", onSelect);
            };
        }, [api, onSelect]);

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    }
);
SCarousel.displayName = "SCarousel";

const SCarouselContent = forwardRef(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            ></div>
        </div>
    );
});
SCarouselContent.displayName = "SCarouselContent";

const SCarouselItem = forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
});
SCarouselItem.displayName = "SCarouselItem";

const SCarouselPrevious = forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "h-8 w-8 xl:h-14 xl:w-14 rounded-full hover:bg-[#664b93] hover:border-[#3f3059]",
                orientation === "horizontal"
                    ? ""
                    : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="h-5 w-5 text-black" />
            <span className="sr-only">Previous slide</span>
        </Button>
    )
});
SCarouselPrevious.displayName = "SCarouselPrevious";

const SCarouselNext = forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    const { activeSlide, api } = useCarousel();
    const [numberOfSlides, setNumberOfSlides] = useState(0);

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "h-8 w-8 xl:w-14 xl:h-14 rounded-full hover:bg-[#664b93] hover:border-[#3f3059]",
                orientation === "horizontal"
                    ? ""
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="h-5 w-5 text-black"/>
            <span className="sr-only">Next slide</span>
        </Button>
    )
});
SCarouselNext.displayName = "SCarouselNext";

const DotNavigator = () => {
    const { api } = useCarousel(); 
    const [numberOfSlides, setNumberOfSlides] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (api) {
            const slides = api.slideNodes();
            setNumberOfSlides(slides.length);

            const updateActiveDot = () => {
                const currentIndex = api.selectedScrollSnap();
                setActiveSlide(currentIndex);
            };

            api.on("select", updateActiveDot);

            return () => {
                api.off("select", updateActiveDot);
            };
        }
    }, [api]);

    const handleDotClick = useCallback((index) => {
        api?.scrollTo(index);
    }, [api]);

    return (
        <div className="py-1 space-x-2 flex justify-center">
            {Array.from({ length: numberOfSlides }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                        "h-2 w-2 xl:h-4 xl:w-4 rounded-full border transition-all duration-200 ease-in-out hover:border-[#3f3059] hover:bg-[#664b93] focus:border-[#3f3059] focus:bg-[#664b93]",
                        index === activeSlide ? "bg-[#664b93] border-[#3f3059]" : "bg-white border-gray-400"
                    )}
                ></button>
            ))}
        </div>
    );
};

export { SCarousel, SCarouselContent, SCarouselItem, SCarouselPrevious, SCarouselNext, DotNavigator };