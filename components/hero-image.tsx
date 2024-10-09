"use client"

import React, { useState } from 'react';
import { Button } from './button';
import { SendIcon,Loader2 } from 'lucide-react';
import { Alert, AlertDescription} from '@components/ui/alert'


export const HeroImage = () => {
  const [contactType, setContactType] = useState('email');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Merci pour votre inscription!");
        form.reset();
      } else {
        const errorData = await response.json();
        setStatus(`Erreur: ${errorData.message}`);
      }
    } catch (error) {
      setStatus("Oops! Une erreur s'est produite.");
    }
  };

  return (
    <div className="w-full max-w-md md:max-w-2xl lg:max-w-6xl mx-auto mt-16 animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 p-8 md:p-12 shadow-lg min-h-[300px] md:min-h-[400px]">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-center text-gradient my-6">
          Inscrivez-vous dès maintenant !
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            name="nom"
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md border border-white border-opacity-20 bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            required
          />
          <input
            name="prenom"
            type="text"
            placeholder="Prénom"
            className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md border border-white border-opacity-20 bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            required
          />
          <input
            name="ecole"
            type="text"
            placeholder="École"
            className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md border border-white border-opacity-20 bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            required
          />
          <div className="flex justify-center space-x-4 mb-4 font-bold text-lg md:text-sm lg:text-md">
            <button
              type="button"
              className={`px-10 py-4 rounded-md ${
                contactType === 'email'
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
              onClick={() => setContactType('email')}
            >
              Email
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                contactType === 'phone'
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
              onClick={() => setContactType('phone')}
            >
              Téléphone
            </button>
          </div>
          <input
            name={contactType}
            type={contactType === 'email' ? 'email' : 'tel'}
            placeholder={contactType === 'email' ? "Entrez votre email" : "Entrez votre numéro de téléphone"}
            className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md border border-white border-opacity-20 bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            required
          />
          <Button
            className="w-3/4 mx-auto flex items-center justify-center space-x-2"
            type="submit"
            variant="primary"
            size="large"
          >
            <span>Envoyez</span>
            <SendIcon size={20} className="group-hover:animate-shake" />
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-white ">{status}</p>}
      </div>
    </div>
  );
};

export default HeroImage;