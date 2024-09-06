import React from "react";
import { FloatingDock } from "../components/ui/FloatingDock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandGoogleDrive,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kunal-s-1ab248264/",
    },
    {
      title: "Resume",
      icon: (
        <IconBrandGoogleDrive className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://drive.google.com/file/d/1WT9E17m1DVcZvpVREjCWQdFY2yfb7I6x/view?usp=drive_link",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:kunalshinde0612@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Kunals0612",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[5px] w-full ">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
