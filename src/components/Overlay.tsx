"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1: 0% to 20% scroll, fades out by 30%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

    // Section 2: Fades in 25% to 35%, holds to 50%, fades out by 60%
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

    // Section 3: Fades in 60% to 70%, stays visible until end
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.6, 1], [-50, 50]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Container needs to act as the scroll target based on its natural large height */}
            {/* We use position sticky internally so text elements follow the viewport */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center px-4 md:px-20 text-white">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mix-blend-difference drop-shadow-2xl">
                        Kartikeya Mishra.
                    </h1>
                    <p className="mt-4 text-xl md:text-3xl font-light opacity-80 mix-blend-difference">
                        Software Engineer.
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, x: x2 }}
                    className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-2xl px-8"
                >
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight mix-blend-difference drop-shadow-lg">
                        Targeting <span className="text-blue-400">Associate & Managerial</span> Roles.
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, x: x3 }}
                    className="absolute inset-0 flex flex-col items-end justify-center text-right ml-auto max-w-2xl px-8"
                >
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight mix-blend-difference drop-shadow-lg">
                        Passionate about <span className="text-purple-400">AI & Software Development</span>.
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
