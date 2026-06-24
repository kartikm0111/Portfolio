"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative z-20 bg-transparent py-32 px-4 md:px-8 border-t border-white/10 text-white backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* Profile & Education */}
                <div className="md:col-span-2 space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Profile</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            I&apos;m Kartikeya Mishra, an Information Technology student at Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.
                            <br /><br />
                            I combine a passion for innovation with hands-on experience in software development. My technical toolkit features Artificial Intelligence, C++, Java, and Python, which I have applied to architect practical solutions like the Clutch productivity platform, the SIH Smart Allocation Engine, a blockchain platform for agricultural produce, and a functional Python chat room.
                            <br /><br />
                            I am dedicated to continuous learning, collaborative problem-solving, and staying active in sports to foster a healthy, forward-thinking mindset. Currently, I am seeking opportunities in <strong>Software Development Associate</strong> and other software roles.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 pb-4 border-b border-white/10">Education</h2>
                        <div className="space-y-10">
                            <div className="relative pl-8 border-l border-white/20">
                                <span className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
                                <h3 className="text-2xl font-semibold text-white">B.Tech in Information Technology</h3>
                                <p className="text-blue-400 mt-1 font-medium">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</p>
                                <p className="text-gray-500 text-sm mt-2">Sep 2024 - Jun 2028</p>
                            </div>
                            <div className="relative pl-8 border-l border-white/20">
                                <span className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white/30"></span>
                                <h3 className="text-2xl font-semibold text-white">Intermediate</h3>
                                <p className="text-blue-400 mt-1 font-medium">Sanskaar International School</p>
                                <p className="text-gray-500 text-sm mt-2">Apr 2022 - Mar 2023 | Score: 85%</p>
                            </div>
                            <div className="relative pl-8 border-l border-white/20">
                                <span className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white/30"></span>
                                <h3 className="text-2xl font-semibold text-white">High School</h3>
                                <p className="text-blue-400 mt-1 font-medium">St. Thomas School</p>
                                <p className="text-gray-500 text-sm mt-2">2020 - 2021 | Score: 89%</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-white/10">
                            <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-semibold text-blue-400">Tech & Outreach Internship</h3>
                                    <span className="text-gray-400 text-sm">Sep 2025 - Nov 2025</span>
                                </div>
                                <p className="text-white font-medium mb-2">Ai agent bros • Remote</p>
                                <p className="text-gray-400 leading-relaxed text-sm">Focused on Artificial Intelligence (AI) and Graphic Design initiatives.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-white/10">
                            <h2 className="text-3xl md:text-5xl font-bold">Certifications</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-1">Generative AI</h3>
                                <p className="text-blue-400 text-sm">Google • Issued Dec 2025</p>
                            </div>
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-1">AIML Virtual Internship Program</h3>
                                <p className="text-blue-400 text-sm">Kodacy • Issued Dec 2025</p>
                            </div>
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-1 leading-snug">Participation in Basics of AIML</h3>
                                <p className="text-blue-400 text-sm mt-1">GeeksforGeeks / IIT Roorkee • Nov 2024</p>
                            </div>
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-1 leading-snug">Deloitte Australia - Technology Job Simulation</h3>
                                <p className="text-blue-400 text-sm mt-1">Deloitte • Issued 2025</p>
                            </div>
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-1 leading-snug">Kascade, Kshitij 2026</h3>
                                <p className="text-blue-400 text-sm mt-1">Unstop • Issued Jan 2026</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Sidebar */}
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Contact</h2>
                        <ul className="space-y-6 text-gray-300">
                            <li className="flex items-center gap-4 hover:text-white transition-colors">
                                <span className="text-xl">📞</span> +91 9415461111
                            </li>
                            <li className="flex items-center gap-4 hover:text-white transition-colors overflow-hidden">
                                <span className="text-xl shrink-0">✉️</span>
                                <span className="truncate" title="krishnalearning999@gmail.com">krishnalearning999@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 hover:text-white transition-colors">
                                <span className="text-xl">📍</span> Prayagraj, U.P., India
                            </li>
                            <li className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                                <span className="text-xl shrink-0">🔗</span>
                                <a href="https://www.linkedin.com/in/kartikeya--mishra" target="_blank" rel="noreferrer" className="truncate">
                                    LinkedIn Profile
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Skills</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {['Artificial Intelligence (AI)', 'C++', 'Java', 'Python', 'Amazon Web Services (AWS)', 'Node.js', 'Figma', 'Graphic Design', 'Object-Oriented Programming (OOP)'].map((skill) => (
                                <span key={skill} className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-default text-center">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
