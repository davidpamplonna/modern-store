'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Heart, Search, User } from "lucide-react";



const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Masculino", href: "/masculino" },
    { name: "Femenino", href: "/femenino" },
    { name: "Acessórios", href: "/acessorios" },
    { name: "Contato", href: "/contato" },
]

export default function Navbar() {

    const pathname = usePathname();


    return (
        <nav className="fixex top-0 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* logo */}
                    <Link href='/' className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-black to-gray-700" />
                        <span className="font-bold text-xl tracking-wide text-black">Modern Store</span>
                    </Link>
                    {/* destkop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={'text-gray-700 hover:text-gray-950 transition-colors duration-200' + (pathname === item.href ? ' font-semibold border-b border-gray-900' : '')}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* icons menu */}
                    <div className="flex items-center space-x-3">
                        {/* icon pesquisa */}
                        <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex hover:bg-gray-200"
                        >
                            <Search className="h-4 w-4" />
                        </Button>
                        {/* icon favorito */}
                         <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex hover:bg-gray-200"
                        >
                            <Heart className="h-4 w-4" />
                        </Button>
                        {/* icon user */}
                         <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex hover:bg-gray-200"
                        >
                            <User className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}