import ClickableText from '../UI/ClickableText';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaComputer, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="flex w-full justify-between gap-6 border-t px-5 py-8 sm:px-20 lg:px-80 lg:py-12">
      <section className="grid grid-cols-2 gap-6 sm:gap-20">
        <div className="col-span-1 flex flex-col gap-4 lg:gap-6">
          <h3 className="font-rubik-bold text-xl sm:text-2xl lg:text-3xl">
            HZN
          </h3>

          <section className="flex w-full flex-col gap-1 lg:gap-3">
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              About Us
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Blog
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Careers
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Policy
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Sell Product
            </ClickableText>
          </section>
        </div>
        <div className="col-span-1 flex flex-col gap-4 lg:gap-6">
          <h3 className="font-rubik-bold text-xl sm:text-2xl">HELP</h3>

          <section className="flex w-full flex-col gap-1 lg:gap-3">
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Help Center
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Track Order
            </ClickableText>
            <ClickableText
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-black/75 hover:text-sky-400 sm:text-lg lg:text-xl"
            >
              Payment
            </ClickableText>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center gap-3 sm:gap-5">
        <div className="flex flex-col items-center sm:gap-1">
          <FaComputer className="h-10 w-10 sm:h-20 sm:w-20" />
          <h2 className="font-rubik-bold text-2xl sm:text-4xl">HZN</h2>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <FaInstagram className="h-6 w-6 cursor-pointer text-black/75 hover:text-sky-400 sm:h-8 sm:w-8" />
          <FaXTwitter className="h-6 w-6 cursor-pointer text-black/75 hover:text-sky-400 sm:h-8 sm:w-8" />
          <FaFacebookSquare className="h-6 w-6 cursor-pointer text-black/75 hover:text-sky-400 sm:h-8 sm:w-8" />
        </div>
      </section>
    </footer>
  );
}
