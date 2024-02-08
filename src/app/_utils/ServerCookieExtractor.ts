import "server-only";

// CORE
import { cookies } from "next/headers";

// CONSTANTS
import { COOKIE_NAME } from "../_config/constanst";

// INTERFACES
import type { AuthData } from "../_types/Auth";

export function ServerCookieExtractor(): {
  isLoggedIn: boolean;
  userData: AuthData;
} {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has(COOKIE_NAME);
  const userData: AuthData = isLoggedIn
    ? JSON.parse(cookieStore.get(COOKIE_NAME)?.value as string)
    : undefined;

  return { isLoggedIn, userData };
}
