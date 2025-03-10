'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Testimonial, ValueCard } from './About';
import { artisantData, questionData } from '@/data/aboutData';
import HeroSection from './Hero';
import { GiEcology, GiWorld } from "react-icons/gi";
import { FaHandshake, FaSearch } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <div className="bg-amber-50">
      {/* Section Hero */}
        <HeroSection />

      {/* Section Notre Histoire */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-6">
            ArtisanMarket est née en 2020 d&apos;une passion pour l&apos;artisanat et d&apos;un désir de créer une plateforme 
            qui valorise le travail manuel et les techniques traditionnelles à l&apos;ère du numérique.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Tout a commencé lorsque notre fondatrice, Sophie Martin, s&apos;est rendu compte que de nombreux artisans 
            talentueux n&apos;avaient pas les moyens ou les connaissances pour vendre leurs créations en ligne.
          </p>
          <p className="text-lg text-gray-700">
            Aujourd&apos;hui, nous sommes fiers de soutenir plus de 500 artisans à travers le monde et de contribuer à 
            la préservation de savoir-faire ancestraux tout en permettant à nos créateurs de vivre de leur passion.
          </p>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ces principes guident toutes nos actions et décisions pour créer une marketplace équitable et inspirante.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ValueCard 
              icon={<span><GiEcology /></span>}
              title="Durabilité"
              description="Nous encourageons l'artisanat respectueux de l'environnement et les pratiques durables dans toute notre communauté."
            />
            <ValueCard 
              icon={<span><FaHandshake /></span>}
              title="Équité"
              description="Nous assurons une rémunération juste pour nos artisans et prônons des relations commerciales transparentes."
            />
            <ValueCard 
              icon={<span><FaSearch /></span>}
              title="Authenticité"
              description="Chaque produit sur notre plateforme a une histoire, une origine vérifiée et représente un savoir-faire authentique."
            />
            <ValueCard 
              icon={<span><GiWorld /></span>}
              title="Diversité culturelle"
              description="Nous célébrons les traditions artisanales du monde entier et favorisons le partage interculturel."
            />
          </div>
        </div>
      </section>

      {/* Section L'équipe */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une équipe passionnée qui travaille chaque jour pour soutenir les artisans et offrir une expérience exceptionnelle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artisantData.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/api/placeholder/200/200" 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Impact</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <p className="text-gray-700">Artisans soutenus</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">35</div>
              <p className="text-gray-700">Pays représentés</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">20+</div>
              <p className="text-gray-700">Techniques traditionnelles préservées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos artisans</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              text="Rejoindre ArtisanMarket a transformé mon activité. J'ai maintenant des clients du monde entier et je peux me consacrer pleinement à mon art."
              author="Isabelle Durand"
              role="Céramiste, France"
            />
            <Testimonial
              text="La plateforme est intuitive et l'équipe toujours disponible pour m'aider. Mes ventes ont augmenté de 200% en six mois!"
              author="Miguel Rodriguez"
              role="Ébéniste, Espagne"
            />
            <Testimonial
              text="Grâce à ArtisanMarket, j'ai pu faire revivre des techniques de tissage traditionnelles de ma région et les partager avec le monde."
              author="Adeola Okafor"
              role="Tisserande, Nigeria"
            />
          </div>
        </div>
      </section>

      {/* Section Rejoignez-nous */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre communauté d&apos;artisans</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Vous êtes un artisan passionné? Vendez vos créations sur ArtisanMarket et rejoignez une 
            communauté qui valorise votre savoir-faire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/devenir-vendeur" 
              className="bg-white text-amber-700 hover:bg-amber-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Devenir vendeur
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-amber-800 border border-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          <div className="space-y-6">
            {questionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}