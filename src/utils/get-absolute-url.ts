// utils/getURL.ts
const IS_SERVER = typeof window === 'undefined';

function getServerUrl () {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL || 'localhost:3000';

  return `${protocol}://${host}`;
}

export default function getAbsoluteUrl (path: string = '') {
  const baseURL = IS_SERVER
    ? getServerUrl()
    : window.location.origin;
  return new URL(path, baseURL).toString();
}
