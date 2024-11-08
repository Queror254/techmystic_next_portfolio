//@ts-ignore
"use client";
import Image from "next/image";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

// Carousel Component
export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const openPopup = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="py-10 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/**top-0 cover hero */}
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Projects and Craft
        </p>
        {/**end of hero */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
