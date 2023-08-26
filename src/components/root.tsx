'use client';

import { Avatar, Image } from '@nextui-org/react';
import { Link } from '../types/link.ts';
import LinkList from './link/link-list.tsx';

export default function RootComponent ({ links } : { links: Link[] }) {
  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center items-center px-0 py-16 gap-6">
      <div className="relative my-8 mx-0 flex justify-center items-center">
        <Avatar isBordered src="/me.webp" className="w-52 h-52 text-large" />
        <Image
          alt="dartiles logo"
          src="/logo.webp"
          removeWrapper
          className="absolute m-0 z-50 -bottom-4 p-2 rounded-full w-10 h-10 bg-white border-2 border-solid"
        />
      </div>
      <div className="flex gap-2 flex-col ">
        <h1 className="text-4xl text-center">Diego Artiles</h1>
        <h2 className="text-lg text-center">Frontend Developer</h2>
      </div>
      <LinkList links={links} />
    </div>
  );
}
