import { Button, Highlight } from "../button";
import { CommandMenu } from "../command-menu";
import { Container } from "../container";
import { HeroSubtitle, HeroTitle } from "../hero";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";
import { NitzotzLogo } from "../illustrations/nitzotz";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <HeroTitle className="text-gradient-green text-3xl md:text-5xl">
          Innovez avec le Premier Programme
          <br className="hidden md:inline-block" /> Technologique Francophone
        </HeroTitle>
        <HeroSubtitle className="mx-auto mb-8 md:mb-12 max-w-[68rem] text-base md:text-xl px-4">
          Formez-vous pour rejoindre les unités d'élite et développez vos compétences tech.
        </HeroSubtitle>
      </div>
    </Container>
    <div className="min-h-screen md:h-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 px-4 md:px-8 pb-8 md:pb-12">
        <div className="relative flex min-h-[40rem] md:min-h-[48rem] w-full shrink-0 flex-col items-center justify-end overflow-hidden rounded-[2rem] md:rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-6 md:p-14 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)]">
          <KeyboardShortcuts />
          <p className="mb-4 text-2xl md:text-3xl">Un programme de formation sur mesure</p>
          <p className="text-sm md:text-md text-primary-text">
            Commencez dès le lycée avec une formation complete sur les meilleurs pratiques technologiques.
          </p>
        </div>
        
        <div className="relative flex min-h-[40rem] md:min-h-[48rem] w-full shrink-0 flex-col items-center justify-end overflow-hidden rounded-[2rem] md:rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-6 md:p-14 text-center md:basis-[calc(33.33%-12px)]">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-2xl md:text-3xl">Un apprentissage accéléré</p>
          <p className="text-sm md:text-md text-primary-text">
            Un suivi personnalisé pour vous accompagner dans votre parcours.
          </p>
        </div>
        
        <div className="relative flex min-h-[40rem] md:min-h-[48rem] w-full shrink-0 flex-col items-center justify-end overflow-hidden rounded-[2rem] md:rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-6 md:p-14 text-center md:basis-[calc(33.33%-12px)]">
          <div className="pointer-events-none mb-9 top-[0rem] w-[100%] opacity-90">
            <NitzotzLogo />
          </div>
          <div className="mt-8">
            <p className="mb-4 text-2xl md:text-3xl">Une vision pour integrer les Francophones</p>
            <p className="text-sm md:text-md text-primary-text">
              De la France a Israel, Nitzotz a pour but de faire briller les jeunes Francophones.
            </p>
          </div>
        </div>
        
        <div className="relative flex min-h-[40rem] md:min-h-[48rem] w-full shrink-0 flex-col items-center justify-start overflow-hidden rounded-[2rem] md:rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-6 md:p-14 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)]">
          <CommandMenu />
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-2xl md:text-3xl">F.A.Q</p>
            <p className="text-sm md:text-md text-primary-text">
              Des questions ? Des réponses !
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
