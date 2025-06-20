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
    
    {/* Eva Sebban Congratulations Banner */}
    <div className="animate-fade-in opacity-0 [--animation-delay:100ms] mb-8 mx-auto max-w-2xl">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          <div className="flex-shrink-0">
            <Image
              src="/img/eva.jpeg"
              alt="Eva Sebban"
              width={80}
              height={80}
              className="rounded-full shadow-md"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
              🎉 Félicitations ! 🎉
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <strong>Eva Sebban</strong> rejoint notre équipe en tant que
              <br />
              <span className="text-green-700 dark:text-green-300 font-semibold">
                Directrice des Opérations (c'est genre une secretaire vous inquietes pas les sangs)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

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
