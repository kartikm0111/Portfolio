# Modern Scrollytelling Portfolio

[![Framework - Next.js](https://img.shields.io/badge/Framework-Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Styling - TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Animation - Framer Motion](https://img.shields.io/badge/Animation-Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Language - TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deploy - Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A premium, high-performance personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This application showcases a custom-built HTML5 `<canvas>` scrollytelling engine that synchronizes scroll progress with a preloaded high-fidelity 120-frame image sequence, producing an interactive, film-like landing experience.

🔗 **Live Website:** [portfolio-tau-one-78.vercel.app](https://portfolio-tau-one-78.vercel.app/)

---

## 🌟 Key Features

* **High-Performance Canvas Scrollytelling:** Maps 120 high-resolution image frames to viewport scroll depth via React hooks and Framer Motion's `useScroll`. Implements custom ratio math for a perfect CSS-like `object-fit: cover` scaling on resize.
* **Interactive Project Showcase:** Responsive glassmorphism project cards featuring direct links to source code and presentations/demos:
  * **Clutch - Last-Minute Life Saver** (React 19, Vite 6, Tailwind CSS v4, Motion, Node.js, Google GenAI SDK, GCP Cloud Run, Docker). [GitHub Repo](https://github.com/kartikm0111/Last-Minute-Life-Saver) | [Live Demo](https://last-minute-life-saver-66486866208.asia-southeast1.run.app/).
  * **Multi-Room Real-Time Chat Application** (TCP Sockets, Multithreading, custom protocol, Tkinter GUI, Pinggy Tunneling). [GitHub Repository](https://github.com/hrittik702/Chat-Room).
  * **SIH Smart Allocation Engine** (C++ logic matching backend, React/Node frontend, AWS, Figma). [GitHub Repo](https://github.com/kartikm0111/Smart-allotcation-engine-) | [Live Demo](https://smart-allotcation-engine-esuk37k98.vercel.app/).
* **Parallax Text Overlays:** Dynamic section headers using `mix-blend-difference` to maintain contrast over light and dark segments of the background image playback.
* **Aesthetic Ambient Background:** Floating `framer-motion` neon orbs overlaying an interactive, responsive grid mask to give a premium, breathing tech vibe.

---

## 🛠️ Tech Stack

* **Core:** [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
* **Asset Loading:** Preloaded buffering for sequence files to eliminate lagging or flickering on scroll.

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Make sure you have Node.js installed (v18.x or later is recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kartikm0111/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

To build the application for production deployment:

```bash
npm run build
npm run start
```

---

## 🤝 Contact & Profiles

* **LinkedIn:** [Kartikeya Mishra](https://www.linkedin.com/in/kartikeya--mishra)
* **Email:** krishnalearning999@gmail.com
* **Phone:** +91 9415461111
* **Location:** Prayagraj, Uttar Pradesh, India
