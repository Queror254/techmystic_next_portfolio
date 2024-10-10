"use client";
import Image from "next/image";
import {useState} from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function Projects() {
   const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };
  return (
    <div className="mt-2 flex flex-wrap px-2 md:px-0 py-10 w-full gap-4">
    <CardContainer className="inter-var w-[400px] md:w-[430px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-fit rounded-xl p-6 border dark:border-emerald-500  ">
        <CardItem translateZ="70" className="w-full mt-4 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="800"
            width="800"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
                <CardItem
          translateZ="50"
          className="text-sm font-semibold text-neutral-600 dark:text-slate-400"
        >
          2 weeks
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
                <CardItem
          translateZ="50"
          className="flex flex-wrap gap-4 w-72"
        >
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
        </CardItem>
        <div className="flex justify-between items-center mt-14">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Preview →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image 
            src='/github.png'
            alt='github logo'
            width={15}
            height={15}
            />
            Source
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var w-[400px] md:w-[430px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-fit rounded-xl p-6 border dark:border-emerald-500  ">
        <CardItem translateZ="70" className="w-full mt-4 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="800"
            width="800"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
                <CardItem
          translateZ="50"
          className="text-sm font-semibold text-neutral-600 dark:text-slate-400"
        >
          2 weeks
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
                <CardItem
          translateZ="50"
          className="flex flex-wrap gap-4 w-72"
        >
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
        </CardItem>
        <div className="flex justify-between items-center mt-14">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Preview →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image 
            src='/github.png'
            alt='github logo'
            width={15}
            height={15}
            />
            Source
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var w-[400px] md:w-[430px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-fit rounded-xl p-6 border dark:border-emerald-500  ">
        <CardItem translateZ="70" className="w-full mt-4 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="800"
            width="800"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
                <CardItem
          translateZ="50"
          className="text-sm font-semibold text-neutral-600 dark:text-slate-400"
        >
          2 weeks
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
                <CardItem
          translateZ="50"
          className="flex flex-wrap gap-4 w-72"
        >
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
        </CardItem>
        <div className="flex justify-between items-center mt-14">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Preview →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image 
            src='/github.png'
            alt='github logo'
            width={15}
            height={15}
            />
            Source
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var w-[400px] md:w-[430px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-fit rounded-xl p-6 border dark:border-emerald-500  ">
        <CardItem translateZ="70" className="w-full mt-4 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="800"
            width="800"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
                <CardItem
          translateZ="50"
          className="text-sm font-semibold text-neutral-600 dark:text-slate-400"
        >
          2 weeks
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
                <CardItem
          translateZ="50"
          className="flex flex-wrap gap-4 w-72"
        >
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
          <button className="tech_stack">Nextjs</button>
        </CardItem>
        <div className="flex justify-between items-center mt-14">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Preview →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image 
            src='/github.png'
            alt='github logo'
            width={15}
            height={15}
            />
            Source
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
}
