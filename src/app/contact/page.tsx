'use client';
import React from 'react';
import { socialMedia } from '@/data/contactData';
import FormContact from './FormContact';

export default function ContactPage() {

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Des questions, des suggestions ou besoin d&apos;aide ? Notre équipe est à votre écoute pour vous accompagner dans votre expérience sur ArtisanMarket.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire et Informations de Contact */}
      <FormContact/>

      {/* Section Réseaux sociaux */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Suivez-nous</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-8">
            Rejoignez-nous sur les réseaux sociaux pour découvrir nos artisans, nos événements et nos actualités.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialMedia.map((social, index) => {
                const Icon = social.icon
                return (
                    <a
                key={index}
                href="#"
                className="flex items-center bg-amber-50 hover:bg-amber-100 p-4 rounded-lg shadow-sm transition-colors duration-300"
              >
                <span className="text-2xl mr-3"><Icon /></span>
                <span className="font-medium">{social.name}</span>
              </a>
                )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}