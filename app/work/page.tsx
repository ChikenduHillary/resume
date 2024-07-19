"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend project",
    title: "Project 1",
    description:
      "Developed a responsive clone of the Nike website to replicate its design and functionality",
    stack: [
      { name: "ReactJs" },
      { name: "TailwindCss" },
      { name: "javascript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://nike-five-snowy.vercel.app",
    github: "https://github.com/ChikenduHillary/nike",
  },
  {
    num: "02",
    category: "Solana Balance Checker",
    title: "Project 2",
    description:
      "Built a tool to check and display the balance of Solana wallets.",
    stack: [{ name: "NextJs" }, { name: "Shadcn" }, { name: "Typescript" }],
    image: "/assets/work/thumb2.png",
    live: "https://sol-balance.vercel.app/",
    github: "https://github.com/ChikenduHillary/sol_balance",
  },
  {
    num: "03",
    category: "Threads Clone",
    title: "Project 3",
    description:
      " Developed a clone of the Threads application, focusing on social networking features.",
    stack: [
      { name: "NextJs" },
      { name: "TailwindCss" },
      { name: "MongoDB" },
      { name: "Clerk" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://threads-kappa-lovat.vercel.app/",
    github: "https://github.com/ChikenduHillary/Threads",
  },
];

const Page = () => {
  const [project, setProject] = useState<any>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 w-full flex-wrap">
                {project.stack.map((item: any, i: number) => (
                  <li key={item.name} className="text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center ">
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
