'use client';

import { Avatar, Image } from "@nextui-org/react";
import LinkList from "./link/LinkList";

export default function RootComponent({ links }) {
    return <div className="min-h-screen flex-1 flex flex-col justify-center items-center px-0 py-16">
        <div className="relative my-8 mx-0 flex justify-center items-center">
            <Avatar isBordered src="/me.png" className="w-52 h-52 text-large" />
            <Image
                alt="dartiles logo"
                src="/logo.png"
                removeWrapper
                className="absolute m-0 z-50 -bottom-4 p-2 rounded-full w-10 h-10 bg-white border-2 border-solid border-default-200"
            />
        </div>
        <div className="flex gap-2 flex-col ">
            <h1 className="text-4xl text-center">Diego Artiles</h1>
            <h2 className="text-lg text-center">Frontend Developer</h2>
        </div>
        <LinkList links={links} />
    </div>
}