import links from '@/public/links.json'

const paths = links.map(link => `/${link.slug}`)

export const config = {
    matcher: paths
}

export default function middleware(request: Request) {
    const url = new URL(request.url);

    const matchedUrl = links.find(link => url.pathname.includes(link.slug))

    if (matchedUrl) {
        url.href = matchedUrl.href;
    }

    return Response.redirect(url.href, 301)
}