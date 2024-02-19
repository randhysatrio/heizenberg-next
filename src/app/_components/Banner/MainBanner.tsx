'use client';

import Image from 'next/image';

import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ClickableText from '../UI/ClickableText';

export type BannerSlide = {
  id?: number | string | undefined;
  imageUrl: string;
};

export default function MainBanner({ slides }: { slides: BannerSlide[] }) {
  return (
    <section className="group relative h-80 w-full sm:h-96 lg:h-[650px]">
      <button
        id="__mb-prev-arrow"
        className="absolute left-0 top-0 z-10 flex h-full w-20 cursor-pointer flex-col items-center justify-center sm:w-28 lg:w-40"
      >
        <ClickableText whileTap={{ scale: 0.95 }}>
          <IoChevronBackCircle className="h-7 w-7 cursor-pointer text-zinc-100 transition-all sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100" />
        </ClickableText>
      </button>

      <Swiper
        rewind
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '#__mb-prev-arrow',
          nextEl: '#__mb-next-arrow',
        }}
        pagination={{
          clickable: true,
          el: '#__mb-pagination',
          bulletClass:
            'h-2 w-8 bg-zinc-400/50 hover:bg-zinc-400/75 sm:w-9 lg:w-10 cursor-pointer',
          bulletActiveClass: 'bg-green-500',
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id} className="relative h-full w-full">
            <Image
              src={s.imageUrl}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section
        id="__mb-pagination"
        className="absolute bottom-0 z-10 flex w-full items-center justify-center gap-2 pb-2 sm:gap-3 sm:pb-4 lg:pb-5"
      ></section>

      <button
        id="__mb-next-arrow"
        className="absolute right-0 top-0 z-10 flex h-full w-20 cursor-pointer flex-col items-center justify-center sm:w-28 lg:w-40"
      >
        <ClickableText whileTap={{ scale: 0.95 }}>
          <IoChevronForwardCircle className="h-7 w-7 cursor-pointer text-zinc-100 transition-all sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:-translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100" />
        </ClickableText>
      </button>
    </section>
  );
}
