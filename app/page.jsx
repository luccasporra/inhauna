
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-purple-900 text-white">
        <h1 className="text-3xl font-bold tracking-wide">Inhauna</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Início</a>
          <a href="#produtos" className="hover:underline">Produtos</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      {/* Banner */}
      <section id="home" className="bg-gradient-to-r from-purple-900 to-pink-400 text-white text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-4">O estilo que combina com você</h2>
        <p className="max-w-xl mx-auto text-lg">Cigarros eletrônicos com design moderno, sabores marcantes e qualidade garantida.</p>
        <Button className="mt-8 bg-white text-purple-900 hover:bg-gray-100 font-semibold px-6 py-3">Conheça nossos produtos</Button>
      </section>

      {/* Produtos */}
      <section id="produtos" className="px-6 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">Produtos em destaque</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <img src="/vape-placeholder.png" alt="Produto" className="mb-4 w-full h-48 object-cover rounded-md" />
                <h4 className="text-xl font-semibold">Vape Premium {item}</h4>
                <p className="text-sm text-gray-600 mt-2">Design sofisticado e sabor único.</p>
                <Button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white w-full">Comprar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-purple-900 text-white text-center py-8">
        <p className="text-sm">© 2025 Inhauna. Todos os direitos reservados.</p>
        <p className="text-sm">Siga-nos no Instagram: <a href="https://instagram.com/inhauna.store" className="underline">@inhauna.store</a></p>
      </footer>
    </div>
  );
}
