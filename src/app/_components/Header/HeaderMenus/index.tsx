import NotificationDropdown from "./NotificationDropdown";
import CartDropdown from "./CartDropdown";

export default function HeaderMenus({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <section className="mx-10 hidden items-center gap-6 lg:flex">
      <NotificationDropdown isLoggedIn={isLoggedIn} />
      <CartDropdown isLoggedIn={isLoggedIn} />
    </section>
  );
}
