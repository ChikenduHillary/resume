import { icons } from "lucide-react";
import Link from "next/link";
import path from "path";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ChikenduHillary" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/hillary-chikendu-472422256/",
  },
  { icon: <FaTwitter />, path: "https://x.com/ChikenduHillary" },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((link, index) => (
        <Link key={index} href={link.path} className={iconStyles}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
