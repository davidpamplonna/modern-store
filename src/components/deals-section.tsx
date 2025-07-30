import { Clock, Gift, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function DealsSection() {

    const deals = [
         {
      id: 1,
      title: "Flash Sale",
      subtitle: "Até 80% OFF",
      description: "Ofertas relâmpago por tempo limitado",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      icon: Zap,
      color: "from-red-500 to-red-700",
      timeLeft: "2h 15m"
    },
    {
      id: 2,
      title: "Liquidação",
      subtitle: "Últimas Peças",
      description: "Aproveite os últimos itens com super desconto",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      icon: Clock,
      color: "from-orange-500 to-red-500",
      timeLeft: "5 dias"
    },
    {
      id: 3,
      title: "Combo Especial",
      subtitle: "Leve 3 Pague 2",
      description: "Oferta especial em produtos selecionados",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
      icon: Gift,
      color: "from-green-500 to-green-700",
      timeLeft: "Limitado"
    }
    ]


  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ofertas Imperdíveis</h2>
             <p className="text-lg text-gray-600">Aproveite nossas promoções especiais antes que acabem</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {deals.map((deal) => (
                    <div
                    key={deal.id}
                    className="group relative overflow-hidden rounded-2xl shodow-lh hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-[4/5] relative">
                            <Image 
                            src={deal.image}
                            alt={deal.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${deal.color} opacity-60`} />
                        </div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                            <div className="flex items-center justify-between">
                                <deal.icon className="w-8 h-8" />
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                    {deal.timeLeft}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                                <p className="text-3xl font-black mb-2">{deal.subtitle}</p>
                                <p className="text-white/90 mb-6">{deal.description}</p>
                                <Link href='/'>
                                <Button variant="secondary" className="w-full">
                                    Ver Ofertas
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

           </div>

        </div>
       
    </section>
  );
}
