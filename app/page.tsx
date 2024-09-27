import { TracingBeam } from "@/components/ui/tracingBeam";
import { NavBar } from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="h-auto w-full rounded-lg bg-background border md:px-10 px-0">
        <div className="body_container flex flex-col font-normal overflow-y-hidden">
          <TracingBeam className="px-10">
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
          </TracingBeam>
          </div>
    </main>
  );
}
