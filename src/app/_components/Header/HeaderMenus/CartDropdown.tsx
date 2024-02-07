import Link from "next/link";

import ButtonPrimary from "../../Button/ButtonPrimary";
import HoverDropdown from "../../Dropdown/HoverDropdown";

import { IoIosCart } from "react-icons/io";

export default function CartDropdown({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <HoverDropdown
      header={
        <div className="cursor-pointer rounded-md p-2 group-hover:bg-zinc-100">
          <IoIosCart className="h-5 w-5 text-black/75 group-hover:text-black" />
        </div>
      }
    >
      {isLoggedIn ? (
        <div></div>
      ) : (
        <div className="flex h-72 w-60 flex-col items-center justify-center gap-8 rounded-md border bg-white">
          <div className="font-rubik-extrabold">
            <h4 className="tracking none text-lg">Login to</h4>
            <h2 className="text-xl">See your Cart</h2>
          </div>

          <Link href={"/login"}>
            <ButtonPrimary>Login</ButtonPrimary>
          </Link>
        </div>
      )}
    </HoverDropdown>
  );
}
