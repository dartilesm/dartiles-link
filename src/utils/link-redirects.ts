import links from '../../public/links.json';
import type { Link } from '@/types/link';

const buildRedirect = (accumulator = {}, currentValue: Link) => ({
    ...accumulator,
    [currentValue.slug]: {
        status: 302,
        destination: currentValue.href
    }
})

const linkRedirects = links.reduce(buildRedirect, {});

export default linkRedirects;