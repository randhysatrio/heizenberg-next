import { NextResponse, type NextRequest } from 'next/server';

import { COOKIE_NAME, PROTECTED_PATHS } from '@/app/_config/constanst';

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.has(COOKIE_NAME);
  if (isLoggedIn && PROTECTED_PATHS.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|background|images).*)',
  ],
};
