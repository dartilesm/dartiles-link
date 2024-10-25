import links from "../../public/links.json";
import type { Link } from "@/types/link";

const buildRedirect = (accumulator = {}, currentValue: Link) => ({
  ...accumulator,
  [currentValue.slug]: currentValue.href,
});

const linkRedirects = links.reduce(buildRedirect, {});

export default linkRedirects;
