"use client";

import React from "react";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";

const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hillary Chikendu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 903 635 9000",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "cikenduhill@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "available",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "As a versatile developer, I have extensive experience in blockchain development on Ethereum and Solana, where I've developed smart contracts and dApps. In frontend development, I use ReactJS and NextJS to build dynamic, responsive web applications. My backend work with Node.js and NestJS involves designing RESTful APIs, managing databases, and developing scalable applications. Additionally, I've created cross-platform mobile apps with React Native, focusing on performance and user experience. As a website developer, I craft responsive websites using HTML, CSS, and JavaScript, implement content management systems, and deliver customized web solutions. My multifaceted experience ensures high-quality, comprehensive solutions across various development domains.",
  items: [
    {
      company: "SuperteamNG",
      position: "Blockchain Developer",
      duration: "2023 - present",
    },
    {
      company: "Inclusive Talks",
      position: "Fullstack Developer",
      duration: "2023 - present",
    },
    {
      company: "Theraswift  Inc",
      position: "Front-End Developer",
      duration: "2023 - present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am currently pursuing a degree in Electrical Electronics Engineering at the Federal University Of Technology Owerri, where I am building a strong foundation in engineering principles and technologies. Additionally, I have studied fullstack development at Zero to Mastery Academy, gaining practical skills in both frontend and backend development. This combination of formal education and specialized training equips me with a diverse skill set to tackle complex projects in various domains.",
  items: [
    {
      institution: "Zero To Mastery Academy",
      degree: "Senior Fullstack Developer",
      duration: "2019 - presents",
    },
    {
      institution: "SuperteamNG",
      degree: "Blockchain Developer",
      duration: "2023 - present",
    },
    {
      institution: "Federal University Of Tecnhnology Owerri",
      degree: "Electrical/Electronics Engineering",
      duration: "2021 - present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: [
    {
      name: "Programming Languages",
      content: "JavaScript, TypeScript, Rust, HTML, CSS",
    },
    {
      name: "Blockchain Development",
      content: [
        "Ethereum, Solana, Smart Contracts, Decentralized Applications",
      ],
    },
    {
      name: "Frontend Development",
      content: "ReactJS, Redux, NextJS, HTML5, TailwindCSS",
    },
    {
      name: "Backend Development",
      content:
        "Node.js, NestJS, RESTful APIs, Database Management (MongoDB, PostgreSQL)",
    },
    {
      name: "Mobile Development",
      content: "React Native, Cross-Platform Mobile Applications",
    },
    {
      name: "Tools and Technologies",
      content: "Git, Docker, Kubernetes, CI/CD, Agile/Scrum Methodologies",
    },
    {
      name: "Soft Skills",
      content:
        "Problem-solving, Collaboration, Project Management, Communication",
    },
  ],
  skillsList: [
    { icon: <FaHtml5 />, name: "html %" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "reactjs" },
    { icon: <FaNodeJs />, name: "nodejs" },
    { icon: <SiNextdotjs />, name: "nextjs" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutMe">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item) => (
                      <li
                        key={item.company}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => (
                      <li
                        key={item.institution}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 space-y-5 mx-auto xl:mx-0">
                    {skills.description.map((item) => (
                      <ul key={item.name}>
                        <p className="text-white/90 font-semibold text-xl">
                          {item.name}
                        </p>
                        <li>{item.content}</li>
                      </ul>
                    ))}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill) => (
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl group grid place-items-center">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutMe"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => (
                    <li
                      key={item.fieldName}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
