"use client";
import Image from "next/image";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { b, main, p } from "framer-motion/client";

//project data template : 
/**
 * 
 const projectsData = [
  {
    id: 1,
    category: 'web/app/Api/etc',
    title: "Title",
    duration: "dateTime",
    description: "Peek________desc_________",
    imageUrl: "url",
    technologies: ["Next.js", "CSS", "JavaScript", "React"],
    liveLink: "webisite_live_link",
    sourceLink: "github_link",
    popupImg: "Image_url",
    popupDescription:
      "Full__________desc____________",
  },
]
 * 
 */
const projectsData = [
  {
    id: 1,
    category: 'web',
    title: "JobHive",
    duration: "2 weeks",
    description: "Job finder app that compiles together a variety of jobboards webviews such ..",
    imageUrl:
      "/images/portfolio/job.png",
    technologies: ["Next.js", "CSS", "JavaScript", "React"],
    liveLink: "",
    sourceLink: "https://github.com/Queror254/JobHive",
    popupImg: "/images/portfolio/job.png",
    popupDescription:
      [
        <b className="text-xl">#Discover Your Dream Career with JobHive</b>,
        <br />,
        <p>Are you tired of juggling multiple job search platforms, spending hours navigating through various websites and apps just to find the perfect job? Look no further – JobHive is here to simplify your job search journey!</p>,
        <br />,
        <b className="text-xl">#Your One-Stop Job Search Solution</b>,
        <br />,
        <p>JobHive is the ultimate job search companion that brings together all the leading job search platforms into one powerful app, providing you with easy and convenient access to an extensive array of job opportunities. With JobHive, you can streamline your job search, save time, and maximize your chances of landing that dream job.
</p>
      ],
  },
  {
    id: 2,
    category: 'web',
    title: "Flipliquidity",
    duration: "2 weeks",
    description: "This is a crypto buy and sell web app that i did for a client using adonisjs",
    imageUrl:
      "/images/portfolio/flipliquidity/flipliquidity.png",
    technologies: ["Node.js", "TensorFlow", "JavaScript"],
    liveLink: "https://example.com/live",
    sourceLink: "https://github.com/Queror254/",
    popupImg: "/images/portfolio/flipliquidity/flipliquidity.png",
    popupDescription:
      [
        "This is a crypto buy and sell web app that i did for a client using adonisjs",
        <br />,
        "As i stated it facilitates the buying and selling of crypto currencies",
      ]
  },
  {
    id: 3,
    category: 'web',
    title: "Kremeland",
    duration: "1 month",
    description: "This is an restraunt website ",
    imageUrl:
       "/images/portfolio/kremeland.png",
    technologies: ["React", "Next.js", "Stripe API", "Tailwind CSS"],
    liveLink: "https://example.com/e-commerce",
    sourceLink: "https://github.com/Queror254/",
    popupImg: 
        "/images/portfolio/kremeland.png",
    popupDescription:
      [
        "This is an restraunt website that i did for a client",
        <br />,
        "It is a static website so no backend",
      ]
    },
  {
    id: 4,
    category: 'app',
    title: "Hot Spot Eatery",
    duration: "2 weeks",
    description: "A simple weather forecasting app built using OpenWeather API",
    imageUrl: "/images/portfolio/hotspoteatery.png",
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS"],
    liveLink: "https://queror254.github.io/",
    sourceLink: "https://github.com/Queror254/",
    popupImg: "/images/portfolio/hotspotmenu.png",
    popupDescription:
     [
      "This is a fast food restaurant website that i did for a client.",
      <br />,
      "Created it with simple html,css & javascript",
     ]
  }
];


export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (project) => {
    setActiveProject(project); // Set the clicked project data
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setActiveProject(null); // Reset active project
  };

  return (
    <main className="py-10">
      <div className="flex justify-start items-start w-max px-4">
        <h1 className="text-white text-2xl md:text-5xl font-mono border-s-2 border-t-2  border-t-emerald-500 border-l-2 border-l-emerald-500 ">Recent Works</h1>
      </div>
    <div className="flex flex-wrap justify-center items-center px-2 md:px-0 py-10 w-full gap-4">
      {projectsData.map((project) => (
        <CardContainer key={project.id} className="w-min inter-var md:w-[430px]">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-fit rounded-xl p-6 border dark:border-emerald-500">
            <button onClick={() => openPopup(project)}> {/* Pass project data here */}
              <CardItem translateZ="70" className="w-full mt-4 mb-4">
                <Image
                  src={project.imageUrl}
                  height="800"
                  width="800"
                  className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem translateZ="50" className="text-sm font-semibold text-neutral-600 dark:text-slate-400">
                {project.duration}
              </CardItem>
              <CardItem as="p" translateZ="50" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2 items-start">
                {project.description}
              </CardItem>
              <CardItem translateZ="50" className="flex flex-wrap gap-4 w-72">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech_stack">{tech}</div>
                ))}
              </CardItem>
              <div className="flex justify-between items-center mt-14">
                <CardItem translateZ={20} as={Link} href={project.liveLink} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Live Preview →
                </CardItem>
                <CardItem translateZ={20} as={Link} href={project.sourceLink} target="__blank" className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  <Image src="/github.png" alt="github logo" width={15} height={15} />
                  Source
                </CardItem>
              </div>
            </button>
          </CardBody>
        </CardContainer>
      ))}

      {isOpen && activeProject && (
        <div id="small-dialog" className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-hidden px-1 md:px-10">
          <div className="relative bg-gray-900 text-slate-200 p-4 md:p-10 rounded-lg w-[100%] md:w-[70%] max-h-[100%] md:max-h-[90%] overflow-y-scroll scrollbar-none">
            <div className="flex justify-end items-end top-4 pt-16 md:pt-8">
              <button onClick={closePopup} className="fixed z-30 bg-red-600 text-white px-4 py-2 mb-10 rounded-lg">
                X
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <img src={activeProject.popupImg} alt={activeProject.title} className="rounded-md" />
              <h2 className="text-4xl font-bold font-mono border-b-2 w-max border-spacing-2 border-dashed border-emerald-500">{activeProject.title}</h2>
              <p>
                {activeProject.popupDescription.map((desc, index) => (
                   <span key={index}>{desc}</span>
                ))}
              </p> {/* Use popupDescription */}
              <a href={activeProject.sourceLink} target="blank" className="p-2 my-4 rounded-full bg-black border border-emerald-500 text-white text-sm w-max flex justify-center items-center">
                Github code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
  );
}
