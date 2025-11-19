"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { Brain, Code, Database, Network, Search, ShieldQuestion } from "lucide-react";
import React from "react";
const questionOptions = [
  {
    question: "Qu'est-ce que Nitzotz et quel est son objectif ?",
    icon: Brain,
    response: "Nitzotz est un programme de formation technologique pour les jeunes francophones, créé par des anciens d'unités technologiques israéliennes. Notre but est de faciliter l'intégration des francophones dans les unités technologiques."
  },
  {
    question: "Comment se déroule le programme Nitzotz?",
    icon: Code,
    response: "Le programme dure 3 ans :\n\n1ère année - Python et bases techniques\n2ème année - C/C++ et développement bas niveau\n3ème année - projets pratiques. Formation complémentaire en hébreu et français."
  },
  {
    question: "Comment rejoindre le programme Nitzotz?",
    icon: Database,
    response: "Inscription en 3 étapes : 1) Inscription sur nitzotz.org 2) Entretien individuel 3) Rencontre avec les parents. Nous recherchons des jeunes motivés et prêts à s'investir."
  },
  {
    question: "Quels sont les avantages uniques de Nitzotz?",
    icon: Network,
    response: "Formation complète avec mentorat personnalisé, réseau professionnel et préparation intensive."
  },
  {
    question: "Je ne veux pas rentrer dans une unité technologique, est-ce que je peux faire Nitzotz ?",
    icon: ShieldQuestion,
    response: "Bien sûr, Nitzotz donnera les outils en main pour préparer une future carrière dans le monde de la tech et apprendre des compétences qui serviront à vie."
  }
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

      if (!isInsideMenu && opened) {
        setOpened(false);
        setSearchValue("");
        setSelectedQuestion(null);
        return;
      }

      if (isInsideMenu && !opened) {
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

  const formatResponse = (response: string) => {
    return response.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < response.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-0 md:left-[calc(50%+2rem)] flex w-full md:w-[90vw] max-w-[64rem] max-h-[70vh] md:max-h-none overflow-y-auto -translate-x-0 md:-translate-x-1/2 flex-col items-start rounded-lg md:rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity]",
          opened && "translate-y-[2rem] md:translate-y-[14.4rem] opacity-100",
          !opened && "translate-y-[10rem] md:translate-y-[14.4rem] opacity-60"
        )}
      >
        <div className="flex w-full items-center justify-between p-4 md:p-4 md:hidden">
          <span className="text-lg font-medium text-white">FAQ</span>
          {selectedQuestion !== null && (
            <button
              onClick={handleBackClick}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              ← Retour
            </button>
          )}
        </div>

        <span className="hidden md:inline-block ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/80">
          FAQ - Questions fréquentes
        </span>

        {selectedQuestion === null && (
          <div className="hidden md:flex w-full items-center p-4">
            <Search className="h-5 w-5 text-white/80 mr-3" />
            <input
              placeholder="Rechercher une question..."
              className="w-full bg-transparent text-lg text-white placeholder-white/60 outline-none"
              value={searchValue}
              onChange={(ev) => setSearchValue(ev.target.value)}
            />
          </div>
        )}

        <div className="flex w-full flex-col">
          {selectedQuestion !== null ? (
            <div className="p-4 md:p-4">
              <button
                onClick={handleBackClick}
                className="hidden md:block text-white/80 mb-4 hover:text-white transition-colors"
              >
                ← Retour aux questions
              </button>
              <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-white leading-tight">
                {questionOptions[selectedQuestion].question}
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed">
                {formatResponse(questionOptions[selectedQuestion].response)}
              </p>
            </div>
          ) : (
            filteredQuestions.map(({ question, icon: Icon }, index) => (
              <button
                key={question}
                onClick={(e) => handleQuestionClick(index, e)}
                className="command-menu-button flex min-h-[4rem] md:h-[4.6rem] w-full items-center gap-3 px-4 md:px-5 py-3 md:py-0 text-white hover:bg-white/[0.05] transition-colors"
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base text-left leading-tight">{question}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;