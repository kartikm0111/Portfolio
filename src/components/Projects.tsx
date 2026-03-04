"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Aether UI",
        category: "Design System",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    },
    {
        title: "Nova Engine",
        category: "WebGL Experience",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Quantum Pay",
        category: "Fintech Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/30 cursor-pointer"
                        >
                            {/* Using standard img for brevity, Next Image is better for prod but requires domain config */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <p className="text-sm font-medium tracking-widest text-[#a8a8a8] mb-2 uppercase">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
