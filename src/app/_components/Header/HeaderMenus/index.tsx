import Link from 'next/link';

import NotificationDropdown from './NotificationDropdown';
import CartDropdown from './CartDropdown';

import { IoIosCart, IoIosNotifications } from 'react-icons/io';

export default function HeaderMenus({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <section className="mx-5 hidden sm:flex lg:mx-10">
      {isLoggedIn && (
        <div className="flex items-center gap-8 lg:hidden">
          <Link href={'/notification'} prefetch={false}>
            <IoIosNotifications className="h-4 w-4" />
          </Link>
          <Link href={'/cart'} prefetch={false}>
            <IoIosCart className="h-4 w-4" />
          </Link>
        </div>
      )}
      <div className="hidden items-center gap-10 lg:flex">
        <NotificationDropdown isLoggedIn={isLoggedIn} />
        <CartDropdown isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
}
