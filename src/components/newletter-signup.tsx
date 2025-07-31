import { Gift, Mail, Percent, Truck } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function NewsletterSignup() {

    
  const benefits = [
    { icon: Percent, title: "10% de desconto", description: "Na primeira compra" },
    { icon: Gift, title: "Ofertas exclusivas", description: "Só para assinantes" },
    { icon: Truck, title: "Frete grátis", description: "Em compras acima de R$ 199" }
  ];



  return (
    <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Fique por dentro das novidades</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">Receba ofertas exclusivas, lançamentos e dicas de moda diretamente no seu e-mail</p>
                </div>
                <form className="max-w-xl mx-auto mb-12">
                    <div className="flex gap-3">
                        <Input 
                        type="email"
                        placeholder="Digite seu e-mail"
                        className="bg-white/10 border-white/20 placeholder:text-white/60 focus:border-white/40 flex-1"
                        required
                        />
                        <Button
                        type="submit"
                        variant="secondary"
                        className="px-8 
                        "
                        >
                            Inscreva-se
                        </Button>
                    </div>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}