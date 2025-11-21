import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if locale is in pathname
    const pathnameHasLocale = /^\/(it|en)(\/|$)/.test(pathname);

    if (pathnameHasLocale) return;

    // Default to Italian
    const locale = 'it';
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
    ],
};
