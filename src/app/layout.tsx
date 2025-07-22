import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";

const inter = Inter ({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: "Modern Store - Elegancia e Modernidade",
  description: "Descubra a Modern Store, onde elegância e modernidade se encontram. Explore nossa coleção de produtos exclusivos que transformam seu estilo de vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Navbar />
       <main>
         {children}
       </main>
      </body>
    </html>
  );
}
