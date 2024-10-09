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
      width={400}
      height={200}
      className="animate-fade-in opacity-0 w-64 mx-auto md:mt-0 mt-[-10rem]"
    />
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Coming Soon</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Votre formation
      <br className="hidden md:block" /> technologique des le lycée
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Rejoignez le premier programme déstinés aux lycéens francophones
      <br className="hidden md:block" /> d'acceder à des opportunités dans les renseignements
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
