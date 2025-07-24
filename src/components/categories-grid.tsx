import Link from "next/link";
import Image from "next/image";

export function CategoriesGrid() {
    const categories = [
        {
            category: "men's clothing",
            title: 'Moda Masculina',
            description: 'Estilo e elegância para o homem moderno',
            image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
            color: 'from-blue-600 to-blue-800'
        },
        {
            category: "women's clothing",
            title: 'Moda Feminina',
            description: 'Beleza e sofisticação para todas as ocasiões',
            image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
            color: 'from-pink-500 to-pink-700'
        },
        {
            category: "electronics",
            title: 'Eletrônicos',
            description: 'Tecnologia de ponta para facilitar seu dia a dia',
            image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
            color: 'from-gray-700 to-gray-900'
        },
        {
            category: "jewelery",
            title: 'Joias',
            description: 'Luxo e elegância em cada detalhe',
            image: 'https://images.pexels.com/photos/1400046/pexels-photo-1400046.jpeg',
            color: 'from-yellow-400 to-yellow-600'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Nossas Categorias
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Encontre exatamente o que você procura em nossas categorias cuidadosamente selecionadas
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href="/"
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover group -hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-50">
                                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                    <p className="text-white/90 text-sm">{category.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
