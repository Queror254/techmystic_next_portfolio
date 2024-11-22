//@ts-ignore
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { div } from "framer-motion/client";
import QuoteFetcher from "./motivate/quote_fetcher";

// Carousel Component
export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectsData = [
    {
      id: 1,
      category: "web",
      title: "JobHive",
      duration: "2 weeks",
      description:
        "A job finder app that integrates multiple job boards into one user-friendly interface.",
      imageUrl: "/images/portfolio/jobapp.png",
      technologies: ["Next.js", "CSS", "JavaScript", "React"],
      liveLink: "",
      sourceLink: "https://github.com/Queror254/JobHive",
      popupImg: "/images/portfolio/job.png",
      popupDescription: [
        <p key="jobhive-1" className="mt-8 mb-2">
          <b className="text-xl">Discover Your Dream Career with JobHive</b>
        </p>,
        <p key="jobhive-2">
          JobHive simplifies your job search by compiling various job platforms
          into one seamless app. No more switching between multiple job
          boards—everything you need is in one place.
        </p>,
        <br key="jobhive-br-2" />,
        <p key="jobhive-3" className="mb-2">
          <b className="text-xl">Effortless Job Searching</b>
        </p>,
        <p key="jobhive-4">
          This app provides easy access to a vast range of job opportunities.
          With JobHive, you can streamline your search process, apply quickly,
          and increase your chances of finding the ideal job.
        </p>,
        <p key="jobhive-5">
          Whether you're looking for remote work or on-site positions, JobHive
          offers filters and smart recommendations tailored to your preferences.
          Your dream job is just a few clicks away!
        </p>,
      ],
    },
    {
      id: 2,
      category: "web",
      title: "Flipliquidity",
      duration: "2 weeks",
      description:
        "A cryptocurrency trading platform that facilitates seamless buying and selling of crypto assets.",
      imageUrl: "/images/portfolio/flipliquidity/flipliquidity.png",
      technologies: ["Node.js", "TensorFlow", "JavaScript"],
      liveLink: "https://example.com/live",
      sourceLink: "https://github.com/Queror254/",
      popupImg: "/images/portfolio/flipliquidity/flipliquidity.png",
      popupDescription: [
        <p key="flip-1" className="mt-8 mb-2">
          <b className="text-xl">
            Flipliquidity: Simplifying Cryptocurrency Trading
          </b>
        </p>,
        <p key="flip-2">
          Flipliquidity is designed for both beginner and seasoned crypto
          traders, offering an intuitive platform to buy and sell digital
          currencies. With real-time market analysis, this app ensures that
          users make informed decisions when trading.
        </p>,
        <br key="flip-br-2" />,
        <p key="flip-3" className="mb-2">
          <b className="text-xl">
            Cutting-Edge Technology for Real-Time Trades
          </b>
        </p>,
        <p key="flip-4">
          Leveraging TensorFlow for data-driven insights, Flipliquidity helps
          users analyze trends and optimize trading strategies. The app
          guarantees a secure and transparent trading environment, ensuring user
          trust and satisfaction.
        </p>,
      ],
    },
    {
      id: 3,
      category: "web",
      title: "Kremeland",
      duration: "1 month",
      description:
        "A restaurant website designed to offer a sleek and modern interface for customers.",
      imageUrl: "/images/portfolio/kremeland.png",
      technologies: ["React", "Next.js", "Stripe API", "Tailwind CSS"],
      liveLink: "https://kremeland.vercel.app/",
      sourceLink: "https://github.com/Queror254/",
      popupImg: "/images/portfolio/kremeland.png",
      popupDescription: [
        <p key="kremeland-1" className="mt-8 mb-2">
          <b className="text-xl">Kremeland: Where Taste Meets Technology</b>
        </p>,
        <p key="kremeland-2">
          Kremeland is a vibrant website for a restaurant, providing a seamless
          user experience for customers. The design emphasizes simplicity and
          functionality, allowing users to easily browse menus, make
          reservations, and place orders online.
        </p>,
        <br key="kremeland-br-2" />,
        <p key="kremeland-3" className="mb-2">
          <b className="text-xl">Seamless Payment Integration</b>
        </p>,
        <p key="kremeland-4">
          The integration with Stripe ensures a secure and easy payment process.
          Whether customers are dining in or ordering takeout, Kremeland offers
          a complete solution for managing online orders and payments
          efficiently.
        </p>,
      ],
    },
    {
      id: 4,
      category: "app",
      title: "Hot Spot Eatery",
      duration: "2 weeks",
      description:
        "A weather forecasting app designed with simplicity and accuracy in mind.",
      imageUrl: "/images/portfolio/hotspoteatery.png",
      technologies: ["React", "OpenWeather API", "JavaScript", "CSS"],
      liveLink: "https://queror254.github.io/",
      sourceLink: "https://github.com/Queror254/",
      popupImg: "/images/portfolio/hotspotmenu.png",
      popupDescription: [
        <p key="hotspot-1" className="mt-8 mb-2">
          <b className="text-xl">
            Hot Spot Eatery: A Quick Service Restaurant Site
          </b>
        </p>,
        <p key="hotspot-2">
          This fast-food restaurant website was created to provide a modern and
          fast-loading interface, allowing users to easily navigate the menu,
          check the location, and place orders.
        </p>,
        <br key="hotspot-br-2" />,
        <p key="hotspot-3" className="mb-2">
          <b className="text-xl">Fast, Reliable & Responsive</b>
        </p>,
        <p key="hotspot-4">
          Built with simple HTML, CSS, and JavaScript, the website prioritizes
          user experience, ensuring quick load times and a responsive design
          across devices.
        </p>,
      ],
    },
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
    <>
      <div className="w-full p-10 bg-gray-950">
        <QuoteFetcher />
      </div>
      <main className="py-10 px-4 sm:px-2 bg-gray-900" id="projects">
        <h2 className="section_title">
          <span>{"<"}</span>
          <span className="title">Featured Projects</span>
          <span>{"/>"}</span>
        </h2>

        <div className="relative w-full flex justify-center items-center px-2 py-10">
          {/* Carousel Container */}
          <div className="flex flex-wrap flex-row justify-evenly xs:gap-2 sm:gap-2 gap-3 items-center w-full">
            {/* <button
            onClick={prevSlide}
            className="absolute left-0 p-2 m-auto bg-black text-white rounded-full hover:bg-emerald-500"
          >
            {"<"}
          </button> */}

            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`slide transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? "slide-active" : "slide-inactive"
                }`}
              >
                {/** style={{ display: index === currentSlide ? "block" : "none" }} **/}
                <CardContainer className="w-full inter-var">
                  <CardBody className="flex flex-col justify-center items-center relative group/card dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] xs:w-auto sm:w-[400px] md:w-[500px]  h-[400px] md:h-[500px] md:max-h-[500px] rounded-xl xs:p-4 sm:p-2 md:py-2 md:px-6 border border-emerald-900 hover:border-emerald-500">
                    <div className="flex justify-start items-start w-full text-white text-xl font-semibold">
                      <span>{project.title}</span>
                    </div>
                    <CardItem translateZ="20" className="w-full mt-4 mb-4">
                      <Image
                        src={project.imageUrl}
                        height="700"
                        width="700"
                        className="h-[12rem] md:h-[15rem] sm:w-[22rem] xs:w-auto md:w-[28rem] object-cover rounded-xl mx-auto"
                        alt={project.title}
                      />
                    </CardItem>
                    <div className="text-white/70">
                      <span>{project.description}</span>
                    </div>
                    <div className="flex justify-between xs:gap-36 sm:gap-48 md:gap-48 lg:gap-48 items-center mt-5">
                      <CardItem
                        translateZ={20}
                        onClick={() => openPopup(project)}
                        className="flex justify-center items-center gap-2 xs:px-1 xs:ml-2 px-4 py-1 hover:shadow-lg hover:shadow-emerald-500 rounded-md font-bold text-white hover:cursor-pointer"
                      >
                        <Image
                          src="/details_link.png"
                          alt="github logo"
                          width={20}
                          height={20}
                        />
                        More
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.sourceLink}
                        target="__blank"
                        className="flex flex-row justify-center items-center gap-2 hover:shadow-lg hover:shadow-emerald-500 xs:px-2 px-4 py-1 rounded-xl bg-white text-black text-xs font-bold"
                      >
                        <Image
                          src="/github.png"
                          alt="github logo"
                          width={20}
                          height={20}
                        />
                        Source
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
            {/*<button
            onClick={nextSlide}
            className="absolute right-0 p-2 m-auto bg-black text-white rounded-full hover:bg-emerald-500"
          >
            {">"}
          </button>*/}
          </div>

          {/* Popup Modal */}
          {isOpen && activeProject && (
            <div
              id="small-dialog"
              className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-hidden px-1 md:px-10"
            >
              <div className="relative bg-gray-900 text-slate-200 p-4 md:p-10 rounded-lg w-[100%] md:w-[70%] max-h-[100%] md:max-h-[90%] overflow-y-scroll scrollbar-none">
                <div className="flex justify-end items-end top-4 pt-16 md:pt-8">
                  <button
                    onClick={closePopup}
                    className="fixed z-30 bg-red-600 text-white px-4 py-2 mb-10 rounded-lg"
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={activeProject.popupImg}
                    alt={activeProject.title}
                    width={1000}
                    height={1000}
                    className="relative w-auto h-auto rounded-md"
                  />
                  <h2 className="text-4xl font-bold font-mono border-b-2 w-max border-spacing-2 border-dashed border-emerald-500">
                    {activeProject.title}
                  </h2>
                  <p>
                    {activeProject.popupDescription.map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))}
                  </p>{" "}
                  {/* Use popupDescription */}
                  <div className="flex flex-row gap-4 ">
                    <a
                      href={activeProject.liveLink}
                      target="blank"
                      className="p-2 my-4 rounded-md bg-black border border-emerald-700 hover:border-emerald-500 hover:translate text-white text-sm w-max flex justify-center items-center"
                    >
                      Live Preiview
                    </a>
                    <a
                      href={activeProject.sourceLink}
                      target="blank"
                      className="p-2 my-4 rounded-md bg-black border border-emerald-700 hover:border-emerald-500 text-white text-sm w-max flex justify-center items-center"
                    >
                      Github code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <a
            className="rounded-full p-3 w-max hover:border-emerald-00 hover:bg-emerald-500 bg-black  flex flex-row gap-1 justify-center items-center border text-white border-emerald-500"
            href="/project"
          >
            More Projects{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}
