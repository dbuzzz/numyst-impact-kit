import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import JourneySection from '@/components/JourneySection';
import CollectionSection from '@/components/CollectionSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProductGallery from '@/components/ProductGallery';
import ProductDetails from '@/components/ProductDetails';
import TrustBadges from '@/components/TrustBadges';
import ScratchDiscount from '@/components/ScratchDiscount';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoSection from '@/components/VideoSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import SpinWheel from '@/components/SpinWheel';
import NiviChatWidget from '@/components/NiviChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Header />
      
      {/* Sections 6-15 Flow */}
      <HeroSection />
      <ExperienceSection />
      <JourneySection />
      <CollectionSection />
      <WhyChooseSection />
      
      {/* Product Detail Section (Original/Screenshot 15) */}
      <div id="shop" className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <ProductGallery />
            <TrustBadges />
          </div>
          <div>
            <ProductDetails />
          </div>
        </div>
      </div>

      <ScratchDiscount />
      <TestimonialsSection />
      
      {/* Requested Additions */}
      <VideoSection />
      <Reviews />
      <FAQSection />
      <FinalCTA />
      
      <Footer />
      <SpinWheel />
      <NiviChatWidget />
    </main>
  );
}
