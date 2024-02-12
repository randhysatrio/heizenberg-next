import { NextResponse, type NextRequest } from 'next/server';

import { COOKIE_NAME, UNAUTHENTICATED_ROUTES } from '@/app/_config/constanst';

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.has(COOKIE_NAME);

  if (isLoggedIn && UNAUTHENTICATED_ROUTES.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|background|images).*)',
  ],
};
