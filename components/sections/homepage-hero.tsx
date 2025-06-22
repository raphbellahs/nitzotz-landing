"use client";

import { Button, Highlight } from "../button";
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

const RecruitmentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recruits = [
    {
      name: "Eva Sebban",
      role: "Directrice des Opérations",
      image: "/img/eva.jpeg",
      description: "rejoint notre équipe en tant que"
    },
    {
      name: "Sarah",
      role: "Directrice de la Hasbara",
      image: "/img/sarah.jpeg",
      description: "défendra les intérêts de l'Aliyah meme si actuellement elle vit sa best life en sirotant du vin à Paris 🍷"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recruits.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [recruits.length]);

  const currentRecruit = recruits[currentSlide];

  return (
    <div className="animate-fade-in opacity-0 [--animation-delay:100ms] mb-8 mx-auto max-w-2xl">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6 shadow-lg transition-all duration-500">
        <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          <div className="flex-shrink-0">
            <Image
              src={currentRecruit.image}
              alt={currentRecruit.name}
              width={80}
              height={80}
              className="rounded-full shadow-md transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
              🎉 Félicitations ! 🎉
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <strong>{currentRecruit.name}</strong> {currentRecruit.description}
              <br />
              <span className="text-green-700 dark:text-green-300 font-semibold">
                {currentRecruit.role}
              </span>
            </div>
          </div>
        </div>
        
        {/* Slider indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {recruits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-green-600 dark:bg-green-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomepageHero = () => (
  <Hero>
    <Image
      src="/Nitzotz_logo.png"
      alt="Nitzotz Logo"
      width={200}
      height={200}
      className="animate-fade-in opacity-0 w-40 md:w-64 mx-auto md:mt-0 mb-10 md:mb-8"
     />
    
    {/* Recruitment Slider */}
    <RecruitmentSlider />

    <div
      className="translate-y-[-1rem] animate-fade-in opacity-0 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-transparent-white border border-transparent-white"
    >
      <span>Coming Soon</span>
      <Highlight>→</Highlight>
    </div>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Votre formation
      <br className="hidden md:block" /> High-Tech dès le lycée
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Rejoignez le premier programme permettant aux lycéens francophones
      <br className="hidden md:block" /> d'accéder à des opportunités dans les renseignements
    </HeroSubtitle>
    {/* <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Get Started </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button> */}
    <HeroImage />
  </Hero>
);
