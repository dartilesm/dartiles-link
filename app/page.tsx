import { Metadata } from 'next';
import RootComponent from '../src/components/root.tsx';
import getAbsoluteUrl from '../src/utils/get-absolute-url.ts';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(getAbsoluteUrl()),
  title: `Diego Artiles - Links Center`,
  description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
  icons: {
    icon: 'favicon.png'
  },
  openGraph: {
    type: 'website',
    url: 'https://dartiles.link',
    title: `Diego Artiles - Links Center`,
    description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
    images: [
      {
        url: 'cover.png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://dartiles.link',
    title: `Diego Artiles - Links Center`,
    description: `Find all links of Diego Artiles in a single place. Social media, portfolio, blog, resume, educative platforms, mail, and more.`,
    images: [
      {
        url: 'cover.png'
      }
    ]
  }
};

async function getData () {
  console.log({
    url: getAbsoluteUrl('links')
  });
  const res = await fetch(getAbsoluteUrl('links'));
  const data = await res.json();

  console.log({
    data
  });

  return data;
}

export default async function Page () {
  const links = await getData();

  return <RootComponent links={links} />;
}
