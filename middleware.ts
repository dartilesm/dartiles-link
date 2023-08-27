import links from './public/links.json'

export const config = {
    matcher: [
        "/github",
        "/linkedin",
        "/twitter",
        "/cv",
        "/portfolio",
        "/blog",
        "/platzi",
        "/workana"
    ]
}

export default function middleware(request: Request) {
    const url = new URL(request.url);

    const matchedUrl = links.find(link => url.pathname.includes(link.slug))

    if (matchedUrl) {
        url.href = matchedUrl.href;
    }

    return Response.redirect(url.href, 301)
}