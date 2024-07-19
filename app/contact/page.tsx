"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 903 635 9000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cikenduhill@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "FUTO",
  },
];

const Page = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSelectChange = (value: any) => {
    setForm((prevForm) => ({ ...prevForm, service: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        {
          from_name: `${form.firstname} ${form.lastname}`,
          to_name: "Hillary",
          from_email: form.email,
          to_email: "cikenduhill@gmail.com",
          message: form.message,
          service: form.service,
          number: form.phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m always excited to take on new challenges and
                collaborate on innovative projects. Whether you need a
                blockchain developer, a fullstack web developer, or a mobile app
                developer, I&apos;m here to help turn your ideas into reality.
                With my diverse skill set and passion for technology, I am
                committed to delivering high-quality solutions that meet your
                needs.
              </p>
              <p className="text-white/60 mt-5">
                Feel free to reach out to discuss potential opportunities, ask
                questions, or just say hello. Let&apos;s create something
                amazing together!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Website Development</SelectItem>
                    <SelectItem value="blockchain">
                      Blockchain Development
                    </SelectItem>
                    <SelectItem value="front">Front-End Development</SelectItem>
                    <SelectItem value="back">Back-End Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="h-[200px]"
                required
              />

              <Button
                type="submit"
                size="lg"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
