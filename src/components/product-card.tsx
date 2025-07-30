

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";

export function ProductCard() {


  return (
    <Card className="group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2  bg-white">
        <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Link href="/product/1">
                <Image
                src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
                alt="Product Image"
                width={300}
                height={300}
                loading="lazy"
                className="w-full group-hover:scale-110 transition-transform duration-500 "
                />
            </Link>
            <div className="absolute top-4 left-3 w-[330px] ">
               <div className="flex items-center justify-between gap-2 top-2">
                 <Badge className="bg-red-500/90 text-white">50%</Badge>
                  <Heart className="w-6 h-6 text-gray-100 cursor-pointer" />
               </div>
            </div>
        </div>
        <CardContent className="p-4">
            <div className="space-y-2">
                <div className="text-[11px] text-gray-500 uppercase tracking-wide font-medium">
                   Mens`s Clothing
                </div>
                <Link href='/'>
                <h3 className="font-semibold text-[18px] leadind-tigth hover:text-black transition-colors line-clamp-2 text-gray-900">
                    Mens Casual Premium Slim Fit T-Shirts
                </h3>
                </Link>
                <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center space-x-0.25">
                        <Star className="w-4 h-4"/>
                        <Star className="w-4 h-4"/>
                        <Star className="w-4 h-4"/>
                        <Star className="w-4 h-4"/>

                    </div>
                    <span>(450)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">R$ 12.50</span>
                     <span className="text-gray-500 line-through">R$ 25.00</span>
                </div>
                <Button
                variant="ghost"
                className="w-full bg-black text-white hover:bg-black/90 transition-colors p-3 cursor-pointer">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                   Adicionar ao carrinho
                </Button>
            </div>
        </CardContent>
        
    </Card>
  );
}

export default ProductCard;
