"use client";

import { Avatar, Image } from "@nextui-org/react";
import LinkList from "./link/LinkList";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function RootComponent({ links }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center items-center px-0 py-16 gap-6">
      <div className="relative my-8 mx-0 flex justify-center items-center">
        <Avatar isBordered src="/me.png" className="w-52 h-52 text-large" />
        <Image
          alt="dartiles logo"
          src="/logo.png"
          removeWrapper
          className={
            "absolute m-0 z-50 -bottom-4 p-2 rounded-full w-10 h-10 bg-white border-2 border-solid"
          }
        />
      </div>
      <div className="flex gap-2 flex-col ">
        <h1 className="text-4xl text-center">Diego Artiles</h1>
        <h2 className="text-lg text-center">Frontend Developer</h2>
      </div>
      <LinkList links={links} />
      {/*   <div className="flex flex-col max-w-sm w-full p-4">
        <Button
          as={Link}
          href="https://dartiles.me"
          className="font-medium dark:bg-[#1c1c1c] flex flex-row justify-between"
          size="lg"
          fullWidth
          endContent={
            <span className="inline-flex flex-row gap-2 items-center">
              <IoStar color="#ff8e00" size={20} />
              <FiExternalLink size={18} />
            </span>
          }
        >
          <span className="inline-flex flex-row items-center gap-4">
            <FiLink size={20} />
            Resume
          </span>
        </Button>
      </div> */}
    </div>
  );
}
