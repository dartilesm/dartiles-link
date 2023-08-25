import { Avatar, Image } from "@nextui-org/react";
import { Metadata } from "next";
import RootComponent from "../src/components/root";

export const metadata: Metadata = {
  title: `Diego Artiles - Links Center`,
  description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
  icons: {
    icon: "https://dartiles.link/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://dartiles.link",
    title: `Diego Artiles - Links Center`,
    description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
    images: [
      {
        url: "https://dartiles.link/cover.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://dartiles.link",
    title: `Diego Artiles - Links Center`,
    description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
    images: [
      {
        url: "https://dartiles.link/cover.png",
      },
    ],
  },
};

async function getLinks() {
  const res = await fetch("http://localhost:3000/links");
  const data = await res.json();

  return data;
}

export default async function Page() {
  const links = await getLinks();

  return <RootComponent links={links} />;
}
