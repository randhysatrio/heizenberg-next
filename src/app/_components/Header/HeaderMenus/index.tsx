import { cookies } from "next/headers";

import NotificationDropdown from "./NotificationDropdown";
import CartDropdown from "./CartDropdown";

import { COOKIE_NAME } from "@/app/_config/constanst";

export default function HeaderMenus() {
  // COOKIES
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has(COOKIE_NAME);

  return (
    <section className="mx-10 hidden items-center gap-6 lg:flex">
      <NotificationDropdown isLoggedIn={isLoggedIn} />
      <CartDropdown isLoggedIn={isLoggedIn} />
    </section>
  );
}
