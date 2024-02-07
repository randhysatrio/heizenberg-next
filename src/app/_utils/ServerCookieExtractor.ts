// CORE
import { cookies } from "next/headers";

// CONSTANTS
import { COOKIE_NAME } from "../_config/constanst";

// INTERFACES
import type { User } from "../_types/User";

export function ServerCookieExtractor(): {
  isLoggedIn: boolean;
  userData: User | undefined;
} {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has(COOKIE_NAME);
  const userData: User | undefined = isLoggedIn
    ? JSON.parse(cookieStore.get(COOKIE_NAME)?.value as string)
    : undefined;

  return { isLoggedIn, userData };
}
