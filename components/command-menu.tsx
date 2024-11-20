"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { Brain, Code, Database, Network, Search } from "lucide-react";

const questionOptions = [
  {
    question: "Qu'est-ce que Nitzotz et quel est son objectif?",
    icon: Brain,
    response: "Nitzotz est un programme de formation technologique conçu pour les jeunes francophones, créé par d'anciens membres des unités de renseignement israéliennes. Son objectif est de réduire le fossé culturel, social et technologique qui freine l'intégration des francophones dans les unités technologiques d'élite en Israël comme les unités 8200, 9900 et 81."
  },
  {
    question: "Comment se déroule le programme Nitzotz?",
    icon: Code,
    response: "Le programme se déroule sur trois ans : La première année est consacrée à l'initiation à Python et aux fondamentaux techniques. La deuxième année approfondit avec C/C++ et le développement 'low-level'. La troisième année est dédiée à la réalisation de projets concrets. Le programme inclut aussi un double apprentissage linguistique (hébreu/français) et des exercices de présentation orale."
  },
  {
    question: "Comment rejoindre le programme Nitzotz?",
    icon: Database,
    response: "Le processus d'inscription se fait en trois étapes : 1) Une inscription sur le site nitzotz.org, 2) Un entretien individuel pour évaluer la motivation et le potentiel de l'élève, 3) Une rencontre avec les parents pour s'assurer de leur soutien. Le programme recherche des jeunes déterminés, motivés et prêts à s'investir pleinement en équipe."
  },
  {
    question: "Quels sont les avantages uniques de Nitzotz?",
    icon: Network,
    response: "Nitzotz offre une préparation complète avec un accent sur la confiance en soi, des présentations en hébreu, un réseau de mentors et des connexions avec les groupes Nitzotz français et israéliens. C'est une véritable passerelle entre le lycée et le monde professionnel en Israël, donnant aux participants toutes les clés pour réussir dans le secteur technologique israélien."
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isInsideMenu = commandMenuRef.current.contains(e.target as Node);
      const isMenuButton = e.target instanceof Element && 
        (e.target.classList.contains("command-menu-button") || 
         e.target.closest(".command-menu-button"));

      if (!isInsideMenu && opened) {
        setOpened(false);
        setSearchValue("");
        setSelectedQuestion(null);
        return;
      }

      if (isInsideMenu && !isMenuButton) {
        setOpened(true);
        return;
      }

      if (isMenuButton) {
        e.stopPropagation();
        setOpened(true);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [opened]);

  const filteredQuestions = useMemo(() => {
    if (searchValue === "") return questionOptions;
    return questionOptions.filter((option) =>
      option.question.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const handleQuestionClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedQuestion(index);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedQuestion(null);
  };

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
          opened && "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/80">
          FAQ - Questions fréquentes
        </span>
        {selectedQuestion === null && (
          <div className="flex w-full items-center p-4">
            <Search className="h-5 w-5 text-white/80 mr-3" />
            <input
              placeholder="Rechercher une question..."
              className="w-full bg-transparent text-lg text-white placeholder-white/60 outline-none"
              value={searchValue}
              onChange={(ev) => setSearchValue(ev.target.value)}
            />
          </div>
        )}
        <div className="flex w-full flex-col text-sm">
          {selectedQuestion !== null ? (
            <div className="p-4">
              <button
                onClick={handleBackClick}
                className="text-white/80 mb-4 hover:text-white transition-colors"
              >
                ← Retour aux questions
              </button>
              <h3 className="text-lg font-medium mb-3 text-white">
                {questionOptions[selectedQuestion].question}
              </h3>
              <p className="text-white text-base leading-relaxed">
                {questionOptions[selectedQuestion].response}
              </p>
            </div>
          ) : (
            filteredQuestions.map(({ question, icon: Icon }, index) => (
              <button
                key={question}
                onClick={(e) => handleQuestionClick(index, e)}
                className="command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 text-white hover:bg-white/[0.05] transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-base">{question}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
