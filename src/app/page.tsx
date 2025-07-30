import { CategoriesGrid } from "@/components/categories-grid";
import { DealsSection } from "@/components/deals-section";
import FeaturedProducts from "@/components/featured-products";
import HeroBanner from "@/components/hero-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <CategoriesGrid />
      <FeaturedProducts />
      <DealsSection />
    </div>
  );
}
