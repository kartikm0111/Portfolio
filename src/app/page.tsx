import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col relative">
      <Background />
      {/* 
        The ScrollyCanvas takes 500vh to allow for enough scroll distance
        The Overlay sits inside the ScrollyCanvas as a child or sibling depending on architecture.
        In this implementation, ScrollyCanvas accepts children to place inside the sticky wrapper.
      */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* 
        The Projects grid is placed naturally in the document flow *after* the 500vh container.
        This provides a seamless transition from the scrollytelling experience into the standard scrolling page.
      */}
      <About />
      <Projects />
    </main>
  );
}
