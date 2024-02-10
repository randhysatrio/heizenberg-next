import Link from "next/link";

import HoverDropdown from "@/app/_components/Dropdown/HoverDropdown";
import ButtonPrimary from "@/app/_components/Button/ButtonPrimary";
import ClickableText from "@/app/_components/UI/ClickableText";

import { IoIosCart } from "react-icons/io";

import { MOCK_CARTS as carts } from "@/app/_mockData/Carts";

export default function CartDropdown({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <HoverDropdown
      header={
        <div className="cursor-pointer rounded-md p-2 group-hover:bg-zinc-100">
          <IoIosCart className="h-6 w-6 text-black/75 group-hover:text-black" />
        </div>
      }
    >
      <div className="h-fit w-80 rounded-lg border bg-white">
        {isLoggedIn ? (
          <div className="flex max-h-[300px]">
            {carts.length ? (
              <div className="flex w-full flex-col">
                <section className="flex w-full items-center px-3 py-2">
                  <p className="font-rubik-bold text-sm">
                    Total Cart ({carts.length})
                  </p>
                </section>
                <section className="flex w-full flex-col overflow-y-auto overscroll-contain">
                  {carts.map((c) => (
                    <article
                      key={c.id}
                      className="flex w-full cursor-default gap-2 py-1 pl-2 pr-3 hover:bg-zinc-100"
                    >
                      <div className="aspect-square h-14 overflow-hidden rounded-lg bg-white p-1 ring-1 ring-inset ring-zinc-200">
                        <img
                          src={c.product.images[0].imageUrl}
                          alt={c.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <p>{c.product.subcategory?.category?.name}</p>
                          <p>-</p>
                          <p>{c.product.subcategory?.name}</p>
                        </div>
                        <div className="flex w-full items-center justify-between gap-[3px] text-lg">
                          <h3 className="font-rubik-extrabold max-w-full truncate">
                            {c.product.name}
                          </h3>
                          <p>x{c.quantity}</p>
                        </div>
                        <div className="w-full text-right">
                          <p className="font-rubik-bold">
                            Rp{" "}
                            {(c.product.price * c.quantity).toLocaleString(
                              "id",
                            )}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </section>
                <section className="flex w-full items-center justify-end py-2 pr-2">
                  <Link href="/carts">
                    <ClickableText
                      whileTap={{ scale: 0.95 }}
                      className="font-rubik-bold cursor-pointer text-xs text-sky-500 hover:text-sky-400"
                    >
                      Show All Carts
                    </ClickableText>
                  </Link>
                </section>
              </div>
            ) : (
              <div className="font-rubik-bold flex h-40 w-full flex-col items-center justify-center">
                <p className="text-lg">You don't have</p>
                <p className="text-xl">Anything in your Cart</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-60 flex-col items-center justify-center gap-5">
            <div className="font-rubik-extrabold">
              <h4 className="tracking none text-lg">Login to</h4>
              <h2 className="text-xl">See your Cart</h2>
            </div>

            <Link href={"/login"}>
              <ButtonPrimary>Login</ButtonPrimary>
            </Link>
          </div>
        )}
      </div>
    </HoverDropdown>
  );
}
