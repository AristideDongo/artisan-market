'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulation d'une requête API
    try {
      // Ici, vous implémenteriez l'appel à votre API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              {/* Logo de la marketplace */}
              <Image 
                src="/api/placeholder/120/80" 
                alt="ArtisanMarket Logo" 
                width={120} 
                height={80} 
                className="h-20 w-auto" 
              />
            </div>
            
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Mot de passe oublié</h2>
                <p className="text-gray-600">
                  Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">E-mail envoyé</h2>
                <p className="text-gray-600">
                  Si un compte existe avec l&apos;adresse <span className='font-extrabold uppercase text-black'>{email}</span>, vous recevrez un e-mail avec les instructions pour réinitialiser votre mot de passe.
                </p>
              </>
            )}
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="votre@email.com"
                />
              </div>
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Traitement en cours...
                  </>
                ) : (
                  'Envoyer les instructions'
                )}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-800 focus:outline-none focus:underline"
              >
                Renvoyer un e-mail
              </button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Link
              href="/auth/login" 
              className="text-sm cursor-pointer font-medium text-amber-600 hover:text-amber-800"
            >
              Retour à la page de connexion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}