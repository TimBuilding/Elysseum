import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import React, { useRef } from "react";

function ObjectParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const Right1X = useTransform(scrollYProgress, [0, 1], ["30%", "0%"])
    const Right2X = useTransform(scrollYProgress, [0, 1], ["80%", "20%"])
    const Right3X = useTransform(scrollYProgress, [0, 1], ["160%", "10%"])
    const Right4X = useTransform(scrollYProgress, [0, 1], ["300%", "0%"])
    const Left1X = useTransform(scrollYProgress, [0, 1], ["-60%", "10%"])
    const Left2X = useTransform(scrollYProgress, [0, 1], ["20%", "80%"])
    const Left3X = useTransform(scrollYProgress, [0, 1], ["-200%", "100%"])
    const Left4X = useTransform(scrollYProgress, [0, 1], ["200%", "300%"])

    return (
        <div ref={ref} className="w-full h-80 max-h-2xl relative flex justify-center">
            <motion.div className="-translate-x-28 z-10 translate-y-5">
                <motion.svg style={{ x: Right1X }} className="absolute z-10 w-50" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                    <circle r="50" cx="50" cy="50" fill="rgb(102,75,147)" />
                </motion.svg>
            </motion.div>
            <motion.div className="-translate-x-20 z-10 translate-y-64">
                <motion.svg style={{ x: Right2X }} className="absolute z-10 w-50" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                    <circle r="30" cx="30" cy="30" fill="rgb(41, 41, 41)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-6 z-10 translate-y-36">
                <motion.svg style={{ x: Right3X }} className="absolute z-10 w-50" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <circle r="15" cx="15" cy="15" fill="rgb(204, 138, 245)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-20 z-10 translate-y-64">
                <motion.svg style={{ x: Right3X }} className="absolute z-10 w-50" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <circle r="15" cx="15" cy="15" fill="rgb(102,75,147)" />
                </motion.svg>
            </motion.div>
            <motion.div className="-translate-x-28 z-10 translate-y-56">
                <motion.svg style={{ x: Right4X }} className="absolute z-10 w-50" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <circle r="6" cx="6" cy="6" fill="rgb(102,75,147)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-60 z-10 translate-y-28">
                <motion.svg style={{ x: Right4X }} className="absolute z-10 w-50" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <circle r="6" cx="6" cy="6" fill="rgb(102,75,147)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-64 z-0 translate-y-52">
                <motion.svg style={{ x: Left1X }} className="absolute z-10 w-50" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                    <circle r="50" cx="50" cy="50" fill="rgb(204, 138, 245)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-56 z-0 translate-y-2">
                <motion.svg style={{ x: Left2X }} className="absolute z-10 w-50" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                    <circle r="30" cx="30" cy="30" fill="rgb(204, 138, 245)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-56 z-0 translate-y-44">
                <motion.svg style={{ x: Left4X }} className="absolute z-10 w-50" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                    <circle r="30" cx="30" cy="30" fill="rgb(102,75,147)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-80 z-0">
                <motion.svg style={{ x: Left3X }} className="absolute z-10 w-50" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <circle r="15" cx="15" cy="15" fill="rgb(41, 41, 41)" />
                </motion.svg>
            </motion.div>
            <motion.div className="-translate-x-20 z-0 translate-y-48">
                <motion.svg style={{ x: Left3X }} className="absolute z-10 w-50" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <circle r="15" cx="15" cy="15" fill="rgb(41, 41, 41)" />
                </motion.svg>
            </motion.div>
            <motion.div className="translate-x-72 z-0 translate-y-40">
                <motion.svg style={{ x: Left4X }} className="absolute z-10 w-50" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <circle r="6" cx="6" cy="6" fill="rgb(41, 41, 41)" />
                </motion.svg>
            </motion.div>
            <div className="h-full grid place-items-center">
                <img style={{}} className="relative inset-0 z-0 bottom-0 object-cover h-72" src="src/images/Logo.png">
                </img>
            </div>
        </div>
    )
}

export default ObjectParallax;