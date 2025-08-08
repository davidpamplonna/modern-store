import { BrandsCarousel } from "@/components/brands-carousel";
import { CategoriesGrid } from "@/components/categories-grid";
import { DealsSection } from "@/components/deals-section";
import FeaturedProducts from "@/components/featured-products";
import HeroBanner from "@/components/hero-banner";
import { Footer } from "@/components/layout/footer";
import { NewsletterSignup } from "@/components/newletter-signup";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <CategoriesGrid />
      <FeaturedProducts />
      <DealsSection />
      <BrandsCarousel />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
