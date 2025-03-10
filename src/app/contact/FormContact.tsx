import React, { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';


export const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="text-amber-600 text-2xl mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export default function FormContact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        userType: 'client'
      });
      const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation d'envoi du formulaire
        setTimeout(() => {
          setFormStatus({
            success: true,
            message: 'Votre message a été envoyé avec succès. Notre équipe vous répondra dans les plus brefs délais.'
          });
          // Réinitialiser le formulaire
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            userType: 'client'
          });
        }, 1000);
      };
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Formulaire de Contact */}
        <div className="bg-amber-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h2>
          
          {formStatus && (
            <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="userType" className="block mb-2 font-medium text-gray-700">
                Vous êtes :
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="client">Un client</option>
                <option value="artisan">Un artisan</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="Votre nom"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="Sujet de votre message"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="Détaillez votre demande ici..."
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  J&apos;accepte que mes données soient traitées conformément à la{' '}
                  <Link href="/politique-confidentialite" className="text-amber-600 hover:text-amber-800 underline">
                    politique de confidentialité
                  </Link>
                  .
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
            >
              Envoyer le message
            </button>
          </form>
        </div>
        
        {/* Informations de Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Nos coordonnées</h2>
          
          <div className="bg-amber-50 p-8 rounded-lg shadow-md mb-8">
            <ContactInfo
              icon={<span><MapPin /></span>}
              title="Adresse"
              content={
                <>
                  <p>15 Rue des Artisans</p>
                  <p>75011 Paris, France</p>
                </>
              }
            />
            
            <ContactInfo
              icon={<span><Phone /></span>}
              title="Téléphone"
              content={
                <>
                  <p>Service client: +33 1 23 45 67 89</p>
                  <p>Support artisans: +33 1 23 45 67 90</p>
                </>
              }
            />
            
            <ContactInfo
              icon={<span><Mail /></span>}
              title="Email"
              content={
                <>
                  <p>info@artisanmarket.fr</p>
                  <p>support@artisanmarket.fr</p>
                </>
              }
            />
            
            <ContactInfo
              icon={<span><Clock /></span>}
              title="Horaires d'ouverture"
              content={
                <>
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 10h00 - 15h00</p>
                  <p>Dimanche: Fermé</p>
                </>
              }
            />
          </div>
          
          {/* Carte ou Image d'emplacement
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-64 rounded-md overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Carte d'emplacement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <span className="text-white text-sm font-medium px-3 py-1 bg-amber-600 rounded">
                  Carte interactive indisponible en prévisualisation
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  )
}