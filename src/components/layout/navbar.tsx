'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Masculino", href: "/masculino" },
    { name: "Feminino", href: "/feminino" },
    { name: "Acessórios", href: "/acessorios" },
    { name: "Contato", href: "/contato" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-black via-gray-900 to-gray-700" />
                        <span className="font-bold text-xl tracking-wide text-black">Modern Store</span>
                    </Link>

                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-gray-700 hover:text-gray-950 transition-colors duration-200 ${pathname === item.href ? 'font-semibold border-b border-gray-900' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* icons menu */}
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-200">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-200">
                            <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-200">
                            <User className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-200">
                            <ShoppingBag className="h-4 w-4" />
                        </Button>

                        {/* mobile menu toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden hover:bg-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Abrir menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* mobile navigation com transição */}
                <div
                    className={`
                        md:hidden overflow-hidden transition-all duration-600 ease-in-out
                        ${isOpen ? 'max-h-[900px] py-4' : 'max-h-0 py-0'}
                    `}
                >
                    <div className="flex flex-col items-right space-y-4 px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-gray-700 hover:text-gray-950 transition-colors duration-200 ${pathname === item.href ? 'font-semibold text-gray-900' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-6 border-t border-gray-200 pt-4">
                           <Button variant="ghost" size="sm" className="hover:bg-gray-200 flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>Conta</span>
                           </Button>
                           <Button variant="ghost" size="sm" className="hover:bg-gray-200 flex items-center space-x-2">
                            <Heart className="h-4 w-4" />
                            <span>Favoritos</span>
                           </Button>
                           <Button variant="ghost" size="sm" className="hover:bg-gray-200 flex items-center space-x-2">
                            <Search className="h-4 w-4" />
                            <span>Buscar</span>
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
