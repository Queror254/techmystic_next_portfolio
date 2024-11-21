//@ts-ignore
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import coverImg from '@/public/p-cover3.gif'


export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

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
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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


  const openPopup = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
   <main className="w-full">
    <div className="flex flex-col gap-4">
<div className="header_cover py-2 px-1">
  <div className="relative flex flex-col justify-center items-center h-full w-full">
    {/*-- Cover Image --*/}
    <Image
      src={coverImg}
      alt="Cover Image"
      className="w-full xs:h-40  h-56 object-center object-cover opacity-60"
    />

    {/*-- Overlay Content --*/}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold">My Projects & Crafts</h1>
      {/*<p className="text-sm mt-2 underline">Explore various projects ranging from web applications to personal creative works, highlighting the intersection of technology and design.</p>*/}
    </div>
  </div>
</div>

    <div className="relative flex justify-center items-center pt-5 pb-5 px-4 w-full">
        <div className="categories_container">
        <Link href="#" className="categories_nav">All</Link>
        <Link href="#" className="categories_nav">Website</Link>
        <Link href="#" className="categories_nav">App</Link>
        <Link href="#" className="categories_nav">Cards</Link>
        <Link href="#" className="categories_nav">Api</Link>
        <Link href="#" className="categories_nav">Browser Extensions</Link>
        </div>
    </div>

      <div className="flex flex-wrap gap-4 justify-center mt-5 pb-20">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col items-center bg-black border-black/[0.1] w-[320px] h-[290px] rounded-xl border border-emerald-900 hover:border-emerald-500 hover:shadow-lg transition-shadow">
            {/* Image Section */}
            <div className="w-full mt-4 mb-4 p-4">
              <Image
                src={project.imageUrl}
                height="700"
                width="700"
                className="h-40 w-80 object-cover rounded-xl group-hover:shadow-xl"
                alt={project.title}
              />
            </div>

            {/* Buttons Section */}
            <div className="flex justify-between gap-4 items-center mt-5 rounded-b-md w-full hover:bg-gray-900 p-2">
              <div
                onClick={() => openPopup(project)}
                className="flex justify-center items-center bg-black gap-2 xs:px-0 px-4 py-1 hover:shadow-lg hover:shadow-emerald-500 rounded-md font-bold text-white hover:cursor-pointer"
              >
                <Image src="/details_link.png" alt="More details" width={20} height={20} />
                More
              </div>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1 text-black rounded-md bg-white font-bold text-xs hover:shadow-lg"
              >
                <Image src="/github.png" alt="GitHub logo" width={20} height={20} />
                Source
              </a>
            </div>
          </div>
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
              <Image src={activeProject.popupImg} alt={activeProject.title} width={1000} height={1000} className="relative w-auto h-auto rounded-md" />
              <h2 className="text-4xl font-bold font-mono border-b-2 w-max border-spacing-2 border-dashed border-emerald-500">{activeProject.title}</h2>
              <p>
                {activeProject.popupDescription.map((desc, index) => (
                   <span key={index}>{desc}</span>
                ))}
              </p> {/* Use popupDescription */}
              <div className="flex flex-row gap-4 ">
                <a href={activeProject.liveLink} target="blank" className="p-2 my-4 rounded-md bg-black border border-emerald-700 hover:border-emerald-500 hover:translate text-white text-sm w-max flex justify-center items-center">
                 Live Preiview
                </a>
                <a href={activeProject.sourceLink} target="blank" className="p-2 my-4 rounded-md bg-black border border-emerald-700 hover:border-emerald-500 text-white text-sm w-max flex justify-center items-center">
                 Github code
                </a>
              </div>
              
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
    </main>
  );
}
