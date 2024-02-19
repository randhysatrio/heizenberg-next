import { NextResponse, type NextRequest } from 'next/server';

import {
  COOKIE_NAME,
  COOKIE_TOKEN_NAME,
  PROTECTED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from '@/app/_config/constanst';

export function middleware(req: NextRequest) {
  const isLoggedIn =
    req.cookies.has(COOKIE_NAME) && req.cookies.has(COOKIE_TOKEN_NAME);
  const currentPath = req.nextUrl.pathname;

  if (isLoggedIn && UNAUTHENTICATED_ROUTES.includes(currentPath)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (!isLoggedIn && PROTECTED_ROUTES.includes(currentPath)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|background|images).*)',
  ],
};
