import { TracingBeam } from "@/components/ui/tracingBeam";
import { NavBar } from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import PopupForm from "@/components/test";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="h-auto w-full rounded-lg bg-background md:px-10 px-1">
        <div className="body_container w-full flex flex-col font-normal overflow-y-hidden px-0 m-auto">
          <TracingBeam>
          <Hero />
          <Skills />
          <Projects />
          <PopupForm />
          <Contact />
          <NavBar />
          </TracingBeam>
          </div>
    </main>
  );
}
