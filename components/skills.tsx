//@ts-ignore
"use client";
import Image from "next/image";
import React from "react";
import RandomQuoute from "./motivate/random_quote";

const Skills = () => {
  return (
    <>
      <div className="w-full p-10 bg-gray-950">
        <RandomQuoute />
      </div>
      <div className="mt-2 py-8 px-2 bg-gray-900" id="skills">
        <div className="relative flex flex-col h-full w-full">
          <h2 className="section_title">
            <span>{"<"}</span>
            <span className="title">My Skills</span>
            <span>{"/>"}</span>
          </h2>

          <section className="skills_&_services flex justify-center items-center">
            <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-row items-center justify-center gap-4 xs:px-4 sm:px-4 h-full w-fit text-white">
              <div
                id="skill_card"
                className="flex flex-col justify-center h-[20rem] xs:w-fit sm:w-fit  md:w-[20rem] lg:w-[22rem] px-3 border border-emerald-500 bg-gray-800"
              >
                <h3 className="skill_title text-2xl font-semibold font-mono text-center">
                  Frontend Development <span>{"()"}</span>
                </h3>
                <span className="text-gray-400 py-4">{"{"}</span>

                <p className="font-mono">
                  Passionate about UI/UX. Over 5 years of development experience
                  in <span>HTML</span> <span>CSS</span> <span>JS</span>{" "}
                  <span>React</span> {""} & <span>Next.js</span>frameworks.
                </p>
                <span className="text-gray-400 py-4">{"}"}</span>
              </div>
              <div
                id="skill_card"
                className="flex flex-col justify-center h-[20rem] md:w-[20rem] lg:w-[22rem] px-3 border border-emerald-500 bg-gray-800"
              >
                <h3 className="skill_title text-2xl font-semibold font-mono text-center">
                  Backend Development <span>{"()"}</span>
                </h3>
                <span className="text-gray-400 py-4">{"{"}</span>

                <p className="font-mono">
                  Experienced in both functional and OOP: {""}
                  <span>Python</span> <span>Java</span> <span>JavaScript</span>{" "}
                  <span>TypeScript</span>.
                </p>
                <span className="text-gray-400 py-4">{"}"}</span>
              </div>
              <div
                id="skill_card"
                className="flex flex-col justify-center h-[20rem] md:w-[20rem] lg:w-[22rem] px-3 border border-emerald-500 bg-gray-800"
              >
                <h3 className="skill_title text-2xl font-semibold font-mono text-center">
                  App Development <span>{"()"}</span>
                </h3>
                <span className="text-gray-400 py-4">{"{"}</span>

                <p className="font-mono">
                  Skilled in developing hybrid mobile apps and cross-platform
                  solutions using the <span>React Native</span> framework.
                </p>
                <span className="text-gray-400 py-4">{"}"}</span>
              </div>
            </div>
          </section>

          {/*<section className="flex flex-col justify-center items-center w-full py-5">
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
                    alt={icon.split(".")[0]}
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
              <div
                key={index}
                className="px-4 py-4 flex flex-col gap-2 w-full md:w-[40%] lg:w-[40%] md:text-center"
              >
                <div className="md:flex md:justify-center md:items-center md:text-center w-14 max-w-14 md:mx-auto">
                  <Image
                    src={skill.imageSrc}
                    alt={`${skill.title} icon`}
                    width={50}
                    height={50}
                    className="flex justify-start items-start float-start border border-emerald-500 rounded-full w-full p-1"
                  />
                </div>
                <h3 className="font-bold text-[1.125rem] mb-3">
                  {skill.title}
                </h3>
                <div className="skill_desc md:text-center text-slate-400">
                  {skill.skill_desc}
                </div>
              </div>
            ))}
          </div>
        </section>*/}
        </div>
      </div>
    </>
  );
};

export default Skills;
