"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119
const SEQUENCE_PATH = "/sequence/frame_";
const SEQUENCE_EXT = "_delay-0.066s.png";

function padIndex(index: number) {
  return index.toString().padStart(3, "0");
}

export default function ScrollyCanvas({
  children,
}: {
  children?: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${SEQUENCE_PATH}${padIndex(i)}${SEQUENCE_EXT}`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Frame calculation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Map 0-1 to 0-119
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );

    const img = images[frameIndex];

    if (img && img.complete) {
      // Logic for object-fit: cover
      const canvas = canvasRef.current;
      const { width, height } = canvas;
      const xRatio = width / img.width;
      const yRatio = height / img.height;
      const ratio = Math.max(xRatio, yRatio);

      const centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  });

  // Handle Resize
  useEffect(() => {
    function handleResize() {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      // Trigger a re-render of the current frame on resize
      // We do this by slightly modifying the scroll or re-applying the current frame
      // For a robust implementation, redraw the current frame:
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollYProgress.get() * FRAME_COUNT))
      );
      const img = images[frameIndex];
      if (img && img.complete) {
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        const width = canvasRef.current.width;
        const height = canvasRef.current.height;
        const xRatio = width / img.width;
        const yRatio = height / img.height;
        const ratio = Math.max(xRatio, yRatio);

        const centerShift_x = (width - img.width * ratio) / 2;
        const centerShift_y = (height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    }

    if (images.length > 0) {
        handleResize();
    }
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Parallax Overlay wrapper */}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>
    </div>
  );
}
