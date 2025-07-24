import { CategoriesGrid } from "@/components/categories-grid";
import HeroBanner from "@/components/hero-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <CategoriesGrid />
    </div>
  );
}
