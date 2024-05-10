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

        useEffect(() => {
            if (api && dotsNodeRef.current) {
                ReactDOM.render(<SCarouselDotIndicator emblaApi={api} dotsNode={dotsNodeRef.current} />, dotsNodeRef.current)
            }
        }, [api, dotsNodeRef]);

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
                    <div ref={dotsNodeRef} className="embla__dots" />
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
    );
});
SCarouselItem.displayName = "SCarouselItem";

const SCarouselPrevious = forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute h-8 w-8 rounded-full",
                orientation === "horizontal"
                    ? "left-48 top-60"
                    : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
});
SCarouselPrevious.displayName = "SCarouselPrevious";

const SCarouselNext = forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute h-8 w-8 rounded-full",
                orientation === "horizontal"
                    ? "right-48 top-60"
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
});
SCarouselNext.displayName = "SCarouselNext";

const SCarouselDotIndicator = ({ emblaApi, dotsNode }) => {
    useEffect(() => {
        if (!emblaApi || !dotsNode) return;

        const addDotBtnsAndClickHandlers = () => {
            dotsNode.innerHTML = emblaApi
                .scrollSnapList()
                .map(() => '<button class="embla__dot" type="button"></button>')
                .join("");

            const scrollTo = (index) => {
                emblaApi.scrollTo(index);
            };

            const nodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));

            nodes.forEach((dotNode, index) => {
                dotNode.addEventListener("click", () => scrollTo(index), false);
            });
        };

        const toggleDotBtnsActive = () => {
            const previous = emblaApi.previousScrollSnap();
            const selected = emblaApi.selectedScrollSnap();
            const nodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));

            nodes.forEach((dotNode, index) => {
                if (index === previous) {
                    dotNode.classList.remove("embla__dot--selected");
                } else if (index === selected) {
                    dotNode.classList.add("embla__dot--selected");
                }
            });
        };

        addDotBtnsAndClickHandlers();
        emblaApi.on("reInit", addDotBtnsAndClickHandlers);
        emblaApi.on("select", toggleDotBtnsActive);

        return () => {
            emblaApi.off("reInit", addDotBtnsAndClickHandlers);
            emblaApi.off("select", toggleDotBtnsActive);
        };
    }, [emblaApi, dotsNode]);

    return null;
};
SCarouselDotIndicator.displayName = "SCarouselDotIndicator";


export { SCarousel, SCarouselContent, SCarouselItem, SCarouselPrevious, SCarouselNext, SCarouselDotIndicator };
