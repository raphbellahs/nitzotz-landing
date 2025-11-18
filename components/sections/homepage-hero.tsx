"use client";

import { Button, Highlight } from "../button";
import Image from 'next/image';

import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Image
      src="/Nitzotz_logo.png"
      alt="Nitzotz Logo"
      width={200}
      height={200}
      className="animate-fade-in opacity-0 w-40 md:w-64 mx-auto md:mt-0 mb-10 md:mb-8"
    />

    <div
      className="translate-y-[-1rem] animate-fade-in opacity-0 inline-flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm transition-colors hover:bg-white/20"
    >
      <span className="text-gray-100">Coming Soon</span>
      <Highlight className="text-gray-300">→</Highlight>
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
