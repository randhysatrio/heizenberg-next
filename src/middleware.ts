import { NextResponse, type NextRequest } from "next/server";

import { COOKIE_NAME } from "@/app/_config/constanst";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.has(COOKIE_NAME);
  if (isLoggedIn) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|background|images).*)",
  ],
};
