"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="my-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Hillary<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={cn(
                "text-xl capitalize hover:text-accent transition-all",
                link.path === pathname && "text-accent border-b-2 border-accent"
              )}
            >
              <SheetClose>{link.name}</SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
