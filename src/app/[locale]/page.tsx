import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TrainingHighlight from '@/components/sections/TrainingHighlight';
import TrustBar from '@/components/sections/TrustBar';
import CTABannerSection from './CTABannerSection';
import StructuredData, { getOrganizationSchema, getLocalBusinessSchema } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData data={getOrganizationSchema()} />
      <StructuredData data={getLocalBusinessSchema()} />
      <HeroSection />
      <ServicesOverview />
      <FeaturedProducts />
      <TrainingHighlight />
      <TrustBar />
      <CTABannerSection />
    </>
  );
}
