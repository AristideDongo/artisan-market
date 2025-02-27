import { advantages } from '@/data/advantages';
import React from 'react'



export default function ChooseUs() {
  return (
    <div className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir notre Marketplace pour vendre ou acheter ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avantages qui font de notre plateforme le choix idéal pour tous vos échanges en ligne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


const AdvantageCard = ({ icon: Icon, title, description }) => {
    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="p-3 bg-blue-50 rounded-full mb-4">
          <Icon className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    );
  };