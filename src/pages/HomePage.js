import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesStrip from '../components/FeaturesStrip/FeaturesStrip';
import CategorySection from '../components/CategorySection/CategorySection';
import PromotionBanners from '../components/PromotionBanners/PromotionBanners';
import BestSelling from '../components/BestSelling/BestSelling';
import StatsSection from '../components/StatsSection/StatsSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import SupplementBanner from '../components/SupplementBanner/SupplementBanner';
import Newsletter from '../components/Newsletter/Newsletter';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HomePage = () => {
  useScrollAnimation();

  return (
    <main id="main-content">
      <HeroSection />
      <FeaturesStrip />
      <CategorySection />
      <PromotionBanners />
      <BestSelling />
      <StatsSection />
      <BrandsSection />
      <SupplementBanner />
      <Newsletter />
    </main>
  );
};

export default HomePage;
