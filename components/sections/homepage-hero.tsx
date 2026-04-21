import { Highlight } from "../button";
import Image from 'next/image';

import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";

export const EvaDisclaimer = () => (
  <div className="mx-auto max-w-xl px-6 py-8">
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm px-8 py-7 flex flex-col items-center gap-5">

      {/* Photo */}
      <Image
        src="/img/eva.jpeg"
        alt="Eva Sebban"
        width={64}
        height={64}
        className="rounded-full grayscale ring-2 ring-gray-200 dark:ring-gray-600 shadow-md"
      />

      {/* Header */}
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-1">
          Note de l&apos;équipe
        </p>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Eva Sebban
        </p>
      </div>

      {/* Divider */}
      <div className="w-10 h-px bg-gray-200 dark:bg-gray-700" />

      {/* Body */}
      <div className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 italic text-center space-y-3">
        <p>
          Nous tenons à exprimer, avec une profonde tristesse, qu&apos;Eva Sebban ne fait officiellement plus partie de l&apos;aventure Nitzotz.
        </p>
        <p>
          Cette décision a été particulièrement difficile à accepter pour le fondateur, qui souhaitait sincèrement et de tout cœur intégrer Eva dans ce projet. Mais parfois, il faut savoir reconnaître la main de Hachem dans ces décisions douloureuses.
        </p>
        <p>
          Nous lui souhaitons beaucoup de courage dans sa belle vocation d&apos;enseignante — un métier exigeant et noble, dans lequel nous savons qu&apos;elle va exceller. Tout le bonheur qu&apos;elle mérite pour la suite de son chemin.
        </p>
      </div>

    </div>
  </div>
);

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

    <EvaDisclaimer />

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
