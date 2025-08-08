import { CreditCard, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {

    const footersections = {
        company: {
            title: 'Empresa',
            links: [
                { name: 'Sobre nós', href: '#' },
                { name: 'Nossa História', href: '#' },
                { name: 'Carreiras', href: '#' },
                { name: 'Imprensa', href: '#' },
                { name: 'Sustentabilidade', href: '#' }
            ]
        },
        customer:{
            title: 'Atendimento',
            links: [
                { name: 'central de Ajuda', href: '#' },
                { name: 'Guia de Tamanhos', href: '#' },
                { name: 'Troca e Devoluções', href: '#' },
                { name: 'Entrega e Frete', href: '#' },
                { name: 'Perguntas Frequentes', href: '#' }
            ]
        },
        services: {
      title: "Serviços",
      links: [
        { name: 'Personal Shopper', href: '/personal-shopper' },
        { name: 'Alfaiataria Sob Medida', href: '/custom-tailoring' },
        { name: 'Consultoria de Estilo', href: '/style-consulting' },
        { name: 'Vendas Corporativas', href: '/corporate' },
        { name: 'Gift Cards', href: '/gift-cards' }
      ]
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const paymentMethods = ['VISA', 'Mastercard', 'AMEX', 'PIX', 'Boleto'];



  return (
    <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <Link href='/' className="flex items-center space-x-2 mb-6">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-900 to-gray-600" />
                    <span className="font-light text-xl text-gray-900">Modern Store</span>
                    </Link>
                    <p className="text-gray-600 leading-relaxed mb-6 max-w-md">Tradição e elegância desde 1949. Oferecemos alfaiataria premium 
              e peças atemporais para o homem e mulher modernos que valorizam 
              qualidade e sofisticação.</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-600">
                    <MapPin  className="h-4 w-4"/>
                    <span>Rua Oscar Feire, 1234 - Jardin, São Paulo - SP</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>(11) 1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>contato@modernstore.com.br</span>
                </div>
              </div>
                <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                    <Button key={social.label} 
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bordder-gray-300 hover:border-gray-900"
                    >
                        <Link href={social.href}>
                            <social.icon className="h-4 w-4" />
                        </Link>
                    </Button>
                ))}
                </div>
                </div>
                
                  {Object.entries(footersections).map(([key, section]) => (
                   <div key={key}>
                      <h3 className="font-medium text-gray-900 mb-6">{section.title}</h3>
                      <ul className="space-y-3">
                      {section.links.map((link) =>(
                        <li key={link.name}>
                            <Link href={link.href} className="text-gray-600 hover:text-gray-900 transiiton-colors text-shadow-amber-400">
                              {link.name}
                            </Link>
                        </li>
                      ))}
                      </ul>
                   </div>
                  ))}
            </div>
            <div className="py-8 border-t border-gray-200">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-gray-600">
                      <span>&copy; 2024 ModernStore, todos os direitos reservados</span>
                      <div className="flex gap-4">
                        <Link
                        href='/'
                        className="hover:text-gray-900 transition-colors"
                        >
                          Política de Privacidade
                        </Link>
                         <Link
                        href='/'
                        className="hover:text-gray-900 transition-colors"
                        >
                          Termos de Uso
                        </Link>
                         <Link
                        href='/'
                        className="hover:text-gray-900 transition-colors"
                        >
                          Política de Cookies
                        </Link>
                      </div>
                    </div>
                    <div className="flex  items-center gap-4">
                      <span className="text-sm text-gray-600">Formas de pagamentos</span>
                      <div className="flex gap-2 ">
                        {paymentMethods.map((method) =>(
                          <div key={method}
                          className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700"
                          >
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-2 mt-6 pt-6 border-t border-gray-100">
                          <CreditCard className="h-4 w-4 text-gray-400" />
                          <span className="text-xs text-gray-500">Compra 100% segura e protegida</span>
                    </div>
            </div>
        </div>
    </footer>
  );
}