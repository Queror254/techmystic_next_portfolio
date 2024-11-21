import { TracingBeam } from "@/components/ui/tracingBeam";
import { NavBar } from "@/components/Nav";
import Projects from "@/components/projects_and_crafts";

export default function Home() {
  return (
    <main className="h-auto w-full rounded-lg bg-gray-950">
        <div className="w-fit flex flex-col font-normal overflow-y-scroll scrollbar-none px-4 py-2 mx-auto">
          <TracingBeam>
          <Projects />
          <NavBar />
          </TracingBeam>
          </div>
    </main>
  );
}
