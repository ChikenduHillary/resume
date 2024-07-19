"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={link.name}
          className={cn(
            "capitalize font-medium hover:text-accent transition-all",
            link.path === pathname && "text-accent border-b-2 border-accent"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
