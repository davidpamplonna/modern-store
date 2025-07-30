import ProductCard from "./product-card"
import { Button } from "./ui/button"

export function FeaturedProducts() {
    return (
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="font-bold text-2xl md:text-4xl mb-4">Produtos em Destaques</h1>
                <p className="text-gray-700 text-sm md:text-base">Seleção especial dos produtos mais procurados com os melhores preços</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
             
            </div>
            <div className="w-full flex items-center justify-center p-4 mt-4">
                 <Button className=" w-full md:w-auto mx-auto bg-white text-black hover:bg-black/90 hover:text-white shadow-md px-6 py-4 transition-colors">
                Ver mais produtos
                </Button>
             </div>
        </div>
         
       </section>
    )
}

export default FeaturedProducts