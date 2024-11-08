//@ts-ignore
'use client';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className="mt-2 py-2 px-2" id='skills'>
      <div className="relative flex flex-col h-full w-full">
        <h2 className="section_title">
          <span className="underline decoration-emerald-600 text-transparent">---</span>
          <span className="title">My Skills</span>
          <span className="underline decoration-emerald-600 text-transparent">---</span>
        </h2>

        <section className="flex flex-col justify-center items-center w-full py-5">
          <div className="px-2 mt-5 mb-10 limit-max-width text-[1.1rem] text-center text-slate-400">
            Welcome to my skills section! Below is an overview of my expertise across various domains. Each area is critical to my full-stack capabilities, allowing me to design and implement scalable, efficient, and user-friendly systems.
          </div>

          <div className="flex flex-wrap gap-5 w-[100%] max-w-[100%] justify-center items-center md:px-8">
            {[
              "javascript.svg",
              "nodejs.svg",
              "typescript.svg",
              "react.svg",
              "angular.svg",
              "bootstrap5.svg",
              "python.svg",
              "django-alt.svg",
              "solidity.svg",
              "golang.svg",
              "php.svg",
              "postgresql.svg",
              "redis.svg",
              "mongodb.svg",
            ].map((icon, index) => (
              <div key={index} className="px-2 md:px-8">
                <div className="w-[60px] mb-3 lg:mb-5">
                  <Image
                    className="rounded"
                    src={`/tech-icons/${icon}`}
                    alt={icon.split('.')[0]}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="py-5 px-2 flex w-full flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap md:justify-center md:items-center">
            {[
              {
                title: "Web Development",
                imageSrc: "/tech-icons/webdev.png",
                skill_desc: [
                  "With 4 years of experience in front-end and back-end web development, I excel at creating dynamic, responsive web applications. My tech stack includes HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, and AdonisJS.",
                ],
              },
              {
                title: "Database Infrastructure",
                imageSrc: "/tech-icons/dbicon.png",
                skill_desc: [
                  "I have hands-on experience with MongoDB, MySQL, and PostgreSQL. I design and manage scalable database systems, focusing on data security, optimization, and performance. Whether it's relational or NoSQL databases.",
                ],
              },
              {
                title: "Cross-Platform App Development",
                imageSrc: "/tech-icons/appdev.png",
                skill_desc: [
                  "I develop cross-platform mobile applications using React Native, delivering seamless user experiences on both iOS and Android devices. With a focus on performance and consistency, I build apps that leverage a single codebase, ensuring smooth functionality.",
                ],
              },
              {
                title: "DevOps",
                imageSrc: "/tech-icons/devopsx.png",
                skill_desc: [
                  "Skilled in CI/CD, I streamline development pipelines using tools like Docker, Kubernetes, and Jenkins. I ensure that applications are efficiently deployed, monitored, and scaled, with an emphasis on automation and cloud infrastructure using services like AWS and DigitalOcean.",
                ],
              },
            ].map((skill, index) => (
              <div key={index} className="px-4 py-4 flex flex-col gap-2 w-full md:w-[40%] lg:w-[40%] md:text-center">
                <div className="md:flex md:justify-center md:items-center md:text-center w-14 max-w-14 md:mx-auto">
                  <Image
                    src={skill.imageSrc}
                    alt={`${skill.title} icon`}
                    width={50}
                    height={50}
                    className="flex justify-start items-start float-start border border-emerald-500 rounded-full w-full p-1"
                  />
                </div>
                <h3 className="font-bold text-[1.125rem] mb-3">{skill.title}</h3>
                <div className="skill_desc md:text-center text-slate-400">
                  {skill.skill_desc}
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta text-center">
            <a
              className="rounded-full p-3 hover:bg-emerald-500 w-full flex flex-row gap-1 justify-center items-center border border-[#465981]"
              href="contact.html"
            >
              Get In Touch{" "}
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
        </section>
      </div>
    </div>
  );
};

export default Skills;
