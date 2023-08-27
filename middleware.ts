import links from '@/public/links.json'

export const config = {
    matcher: /^\/(mail|github|linkedin|twitter|cv|blog|platzi|workana)\/?$/,
}

export default function middleware(request: Request) {
    const url = new URL(request.url);

    const matchedUrl = links.find(link => url.pathname.includes(link.slug))

    if (matchedUrl) {
        url.href = matchedUrl.href;
    }

    return Response.redirect(url.href, 301)
}