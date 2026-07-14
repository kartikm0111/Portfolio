/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Clutch - Last-Minute Life Saver",
        category: "AI & Productivity",
        timeline: "Jun 2026 - Present",
        description: "A premium productivity platform and crisis companion designed to eliminate analysis paralysis and starting friction during high-stakes deadlines.",
        inspiration: "Created to help developers and professionals overcome high-stakes deadline panic by instantly diagnosing task complexity and providing structured focus assistance.",
        highlights: [
            "Aura AI prioritizer engine that converts task density into structured 30-minute milestones.",
            "Crisis mode utilizing Google GenAI SDK for real-time synthesized voice coaching (Modality.AUDIO).",
            "Responsive React 19 / Vite 6 interface with spring-physics Framer Motion v12 animations.",
            "Redundant fallback network across Gemini 2.5-pro, 2.5-flash, 2.0-flash, and 2.0-lite models.",
            "Docker-containerized Node.js backend hosted on GCP Cloud Run with automated continuous deployment."
        ],
        tech: ["React 19", "Vite 6", "Tailwind v4", "Framer Motion", "Node.js", "Docker", "GCP Cloud Run", "Gemini AI"],
        github: "https://github.com/kartikm0111/Last-Minute-Life-Saver",
        live: "https://last-minute-life-saver-66486866208.asia-southeast1.run.app/",
        image: "/projects/clutch.png"
    },
    {
        title: "SIH Smart Allocation Engine",
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
        github: "https://github.com/kartikm0111/Smart-allotcation-engine-",
        live: "https://smart-allotcation-engine-esuk37k98.vercel.app/",
        image: "/projects/smart-allocation.png"
    },
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
        github: "https://github.com/hrittik702/Chat-Room",
        live: "",
        image: "/projects/chat-room.png"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div className="relative h-[200px] w-full overflow-hidden">
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
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
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
                                                        <p className="text-gray-400 leading-relaxed text-xs">{project.inspiration}</p>
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="font-semibold text-white mb-1">Key Features:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-xs">
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
                                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 flex-wrap">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all text-xs"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all text-xs"
                                        >
                                            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
