import { TracingBeam } from "@/components/ui/tracingBeam";
import { NavBar } from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Featured_projects from "@/components/feature-project";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="h-auto w-full rounded-lg bg-gray-950 md:px-[5rem] lg:px-[15rem] px-1">
      <div className="body_container w-full flex flex-col font-normal overflow-y-scroll scrollbar-none px-0 m-auto">
        <TracingBeam>
          <Hero />
          <Featured_projects />
          <Skills />
          <Contact />
          <NavBar />
        </TracingBeam>
      </div>
    </main>
  );
}
