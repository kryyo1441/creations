import HeroSection from '@/components/landing-page/hero-page';
import RecentlyLaunchedProducts from '@/components/landing-page/recently-launced';
import TrendingProducts from '@/components/landing-page/trending-products';
export default function Home() {
  return (
    <>
      <HeroSection/>
      <TrendingProducts />
      <RecentlyLaunchedProducts />
    </>
  );
}
