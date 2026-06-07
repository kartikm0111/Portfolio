/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Multi-Room Real-Time Chat Application",
        category: "Network Programming",
        timeline: "Apr 2026 - May 2026",
        description: "Developed a real-time, multi-room chat application from scratch using raw Python sockets and TCP networking. Designed a custom text-based communication protocol featuring a 3-phase connection lifecycle (Handshake, History Replay, and Message Loop).",
        highlights: [
            "Custom 3-phase communication protocol (Handshake, History Replay, Message Loop).",
            "Multi-threaded concurrency with daemon threads and mutex locking for thread safety.",
            "Responsive, Catppuccin-themed graphical user interface (GUI) built with Tkinter.",
            "Server-side persistent chat history via custom file I/O operations.",
            "Utilized Pinggy TCP tunneling to expose the local server to remote clients."
        ],
        tech: ["Python", "Sockets", "Threading", "Tkinter", "Pinggy", "TCP/IP"],
        link: "https://github.com/hrittik702/Chat-Room",
        linkLabel: "GitHub Repo",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "AI Smart Allocation Engine",
        category: "Artificial Intelligence & Systems",
        timeline: "Sep 2025 - Oct 2025",
        description: "An AI-powered matching engine that leverages automated scoring and weighted algorithms to handle large-scale applicant-to-role allocation. Built to ensure algorithmic fairness and scalable data processing, utilizing a robust logic backend integrated with an intuitive management dashboard.",
        inspiration: "Stemmed from observing inefficiencies and biases in manual internship allocations across large-scale government programs. Inspired by the vision of equitable access and optimal resource utilization, to match interns to opportunities based on merit, preferences, and institutional needs without human bottlenecks.",
        highlights: [
            "Matching algorithm using weighted parameters (skills, location preferences, institutional requirements).",
            "Implemented core allocation logic in C++, integrated with a Node/React frontend.",
            "Simulated real-world scenarios and tested allocation accuracy using mock datasets.",
            "Incorporated feedback loops to refine match quality over time."
        ],
        tech: ["C++", "React", "Node.js", "AWS", "APIs", "Figma"],
        link: "https://drive.google.com/file/d/1tCWO9epvcWE7gUA4ZuqVlKi5MRPsZlzH/view",
        linkLabel: "Google Drive Presentation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
    }
];

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    return (
        <section className="relative z-20 bg-transparent py-32 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        A selection of systems engineering and AI projects built to solve real-world complexities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/20 shadow-xl"
                        >
                            {/* Visual Header */}
                            <div className="relative h-[240px] w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-semibold text-gray-300 bg-white/10 border border-white/10 rounded-full">
                                        {project.timeline}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/10 rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action highlights and inspiration toggle */}
                                    <div className="border-t border-white/10 pt-6 mt-6">
                                        <button 
                                            onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                                            className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mb-4"
                                        >
                                            {expandedProject === project.title ? "Hide System Details ▲" : "View System Architecture & Features ▼"}
                                        </button>

                                        {expandedProject === project.title && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-4 text-sm text-gray-300 pl-4 border-l border-blue-500/30 mb-6 overflow-hidden"
                                            >
                                                {project.inspiration && (
                                                    <div>
                                                        <h4 className="font-semibold text-white mb-1">Inspiration & Context:</h4>
                                                        <p className="text-gray-400 leading-relaxed">{project.inspiration}</p>
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="font-semibold text-white mb-1">Key Features:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                                        {project.highlights.map((h, i) => (
                                                            <li key={i}>{h}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                {/* External Links */}
                                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all text-sm"
                                    >
                                        {project.linkLabel === "GitHub Repo" ? (
                                            <>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                                </svg>
                                                View Source Code
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                                View Project Details
                                            </>
                                        )}
                                    </a>

                                    <span className="text-xs text-gray-500 font-medium">
                                        Click to visit link
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
