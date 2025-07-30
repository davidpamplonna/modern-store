import ProductCard from "./product-card"

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
        </div>
         
       </section>
    )
}

export default FeaturedProducts