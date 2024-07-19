"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Blockchain Developer (Ethereum and Solana)",
    description:
      "As a blockchain developer, I specialize in creating decentralized applications (dApps) on Ethereum and Solana. My expertise includes writing and deploying smart contracts, integrating blockchain technology into various platforms, and ensuring secure and efficient transaction processing. With a deep understanding of blockchain principles, I am adept at leveraging these technologies to build innovative solutions that drive transparency and decentralization.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Website Developer",
    description:
      "With extensive experience in website development, I craft responsive and user-friendly websites that meet the unique needs of clients. From conceptualization to deployment, I ensure every aspect of the website is optimized for performance and aesthetics. My skill set includes HTML, CSS, JavaScript, and various content management systems, allowing me to deliver websites that are both visually appealing and highly functional.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Frontend Developer (ReactJS and NextJS)",
    description:
      "As a frontend developer, I specialize in building dynamic and interactive user interfaces using ReactJS and NextJS. My focus is on creating seamless user experiences through efficient state management, component-based architecture, and performance optimization. I am adept at transforming complex requirements into intuitive and engaging web applications, ensuring they are scalable and maintainable.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Backend Developer (Node.js and NestJS)",
    description:
      "In the realm of backend development, I leverage Node.js and NestJS to build robust and scalable server-side applications. My expertise lies in designing RESTful APIs, managing databases, and ensuring secure and efficient data flow. By utilizing the power of these frameworks, I create backend solutions that are both reliable and performant, capable of handling high traffic and complex business logic.",
    href: "/contact",
  },
  {
    num: "05",
    title: "Mobile Developer (React Native)",
    description:
      "As a mobile developer, I use React Native to create cross-platform mobile applications that deliver a native-like experience on both iOS and Android devices. My approach focuses on code reusability, performance optimization, and seamless integration with various APIs and third-party services. Whether it's a simple app or a complex mobile solution, I ensure a smooth and engaging user experience across all devices.",
    href: "/contact",
  },
];

const Page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/*  */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="p-3 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
