"use client"

import React, { useState, FormEvent } from 'react';
import { Button } from './button';
import { SendIcon, Loader2 } from 'lucide-react';

export const HeroImage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
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
    <div className="w-full max-w-md md:max-w-2xl lg:max-w-6xl mx-auto animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 p-6 md:p-8 shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 text-center text-gradient">
          Inscrivez-vous dès maintenant !
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-2">
            <input
              name="nom"
              type="text"
              placeholder="Nom"
              className="w-full md:w-1/3 px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 input-hover-effect"
              required
            />
            <input
              name="prenom"
              type="text"
              placeholder="Prénom"
              className="w-full md:w-1/3 px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 input-hover-effect"
              required
            />
            <input
              name="ecole"
              type="text"
              placeholder="École"
              className="w-full md:w-1/3 px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 input-hover-effect"
              required
            />
          </div>
          <div className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 input-hover-effect"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Téléphone"
              className="w-full px-4 py-2 md:py-3 text-lg md:text-sm lg:text-md rounded-md bg-white bg-opacity-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 input-hover-effect"
              required
            />
          </div>
          <Button
            className="w-3/4 mx-auto flex items-center justify-center space-x-2 hover:bg-opacity-30 transition-colors duration-300"
            type="submit"
            variant="primary"
            size="large"
          >
            <span>Envoyez</span>
            <SendIcon size={20} className="group-hover:animate-shake" />
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </div>
    </div>
  );
};

export default HeroImage;