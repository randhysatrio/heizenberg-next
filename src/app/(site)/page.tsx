import MainBanner from '../_components/Banner/MainBanner';

import type { BannerSlide } from '../_components/Banner/MainBanner';

const SLIDES: BannerSlide[] = [
  {
    id: 1,
    imageUrl: '/images/banner/home/banner-1.jpeg',
  },
  {
    id: 2,
    imageUrl: '/images/banner/home/banner-2.jpeg',
  },
  {
    id: 3,
    imageUrl: '/images/banner/home/banner-3.jpeg',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainBanner slides={SLIDES} />
    </div>
  );
}
