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
    description: "A job finder app that integrates multiple job boards into one user-friendly interface.",
    imageUrl: "/images/portfolio/job.png",
    technologies: ["Next.js", "CSS", "JavaScript", "React"],
    liveLink: "",
    sourceLink: "https://github.com/Queror254/JobHive",
    popupImg: "/images/portfolio/job.png",
    popupDescription: [
      <p key="jobhive-1" className="mt-8 mb-2"><b className="text-xl">Discover Your Dream Career with JobHive</b></p>,
      <p key="jobhive-2">JobHive simplifies your job search by compiling various job platforms into one seamless app. No more switching between multiple job boards—everything you need is in one place.</p>,
      <br key="jobhive-br-2" />,
      <p key="jobhive-3" className="mb-2"><b className="text-xl">Effortless Job Searching</b></p>,
      <p key="jobhive-4">This app provides easy access to a vast range of job opportunities. With JobHive, you can streamline your search process, apply quickly, and increase your chances of finding the ideal job.</p>,
      <p key="jobhive-5">Whether you're looking for remote work or on-site positions, JobHive offers filters and smart recommendations tailored to your preferences. Your dream job is just a few clicks away!</p>
    ],
  },
  {
    id: 2,
    category: 'web',
    title: "Flipliquidity",
    duration: "2 weeks",
    description: "A cryptocurrency trading platform that facilitates seamless buying and selling of crypto assets.",
    imageUrl: "/images/portfolio/flipliquidity/flipliquidity.png",
    technologies: ["Node.js", "TensorFlow", "JavaScript"],
    liveLink: "https://example.com/live",
    sourceLink: "https://github.com/Queror254/",
    popupImg: "/images/portfolio/flipliquidity/flipliquidity.png",
    popupDescription: [
      <p key="flip-1" className="mt-8 mb-2"><b className="text-xl">Flipliquidity: Simplifying Cryptocurrency Trading</b></p>,
      <p key="flip-2">Flipliquidity is designed for both beginner and seasoned crypto traders, offering an intuitive platform to buy and sell digital currencies. With real-time market analysis, this app ensures that users make informed decisions when trading.</p>,
      <br key="flip-br-2" />,
      <p key="flip-3" className="mb-2"><b className="text-xl">Cutting-Edge Technology for Real-Time Trades</b></p>,
      <p key="flip-4">Leveraging TensorFlow for data-driven insights, Flipliquidity helps users analyze trends and optimize trading strategies. The app guarantees a secure and transparent trading environment, ensuring user trust and satisfaction.</p>
    ]
  },
  {
    id: 3,
    category: 'web',
    title: "Kremeland",
    duration: "1 month",
    description: "A restaurant website designed to offer a sleek and modern interface for customers.",
    imageUrl: "/images/portfolio/kremeland.png",
    technologies: ["React", "Next.js", "Stripe API", "Tailwind CSS"],
    liveLink: "https://kremeland.vercel.app/",
    sourceLink: "https://github.com/Queror254/",
    popupImg: "/images/portfolio/kremeland.png",
    popupDescription: [
      <p key="kremeland-1" className="mt-8 mb-2"><b className="text-xl">Kremeland: Where Taste Meets Technology</b></p>,
      <p key="kremeland-2">Kremeland is a vibrant website for a restaurant, providing a seamless user experience for customers. The design emphasizes simplicity and functionality, allowing users to easily browse menus, make reservations, and place orders online.</p>,
      <br key="kremeland-br-2" />,
      <p key="kremeland-3" className="mb-2"><b className="text-xl">Seamless Payment Integration</b></p>,
      <p key="kremeland-4">The integration with Stripe ensures a secure and easy payment process. Whether customers are dining in or ordering takeout, Kremeland offers a complete solution for managing online orders and payments efficiently.</p>
    ]
  },
  {
    id: 4,
    category: 'app',
    title: "Hot Spot Eatery",
    duration: "2 weeks",
    description: "A weather forecasting app designed with simplicity and accuracy in mind.",
    imageUrl: "/images/portfolio/hotspoteatery.png",
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS"],
    liveLink: "https://queror254.github.io/",
    sourceLink: "https://github.com/Queror254/",
    popupImg: "/images/portfolio/hotspotmenu.png",
    popupDescription: [
      <p key="hotspot-1" className="mt-8 mb-2"><b className="text-xl">Hot Spot Eatery: A Quick Service Restaurant Site</b></p>,
      <p key="hotspot-2">This fast-food restaurant website was created to provide a modern and fast-loading interface, allowing users to easily navigate the menu, check the location, and place orders.</p>,
      <br key="hotspot-br-2" />,
      <p key="hotspot-3" className="mb-2"><b className="text-xl">Fast, Reliable & Responsive</b></p>,
      <p key="hotspot-4">Built with simple HTML, CSS, and JavaScript, the website prioritizes user experience, ensuring quick load times and a responsive design across devices.</p>
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
    <div key={index} className="tech_stack">{tech}</div> // Add `key` here
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
              <div className="flex flex-row gap-4 ">
                <a href={activeProject.liveLink} target="blank" className="p-2 my-4 rounded-full bg-black border border-emerald-500 text-white text-sm w-max flex justify-center items-center">
                 Live Preiview
                </a>
                <a href={activeProject.sourceLink} target="blank" className="p-2 my-4 rounded-full bg-black border border-emerald-500 text-white text-sm w-max flex justify-center items-center">
                 Github code
                </a>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
  );
}
