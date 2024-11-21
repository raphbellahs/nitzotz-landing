"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { Brain, Code, Database, Network, Search } from "lucide-react";

const questionOptions = [
  {
    question: "Qu'est-ce que Nitzotz et quel est son objectif?",
    icon: Brain,
    response: "Nitzotz est un programme de formation technologique pour les jeunes francophones, créé par des vétérans des unités d'élite israéliennes. Notre but est de faciliter l'intégration des francophones dans les unités technologiques comme la 8200."
  },
  {
    question: "Comment se déroule le programme Nitzotz?",
    icon: Code,
    response: "Le programme dure 3 ans : 1ère année - Python et bases techniques, 2ème année - C/C++ et développement bas niveau, 3ème année - projets pratiques. Formation complémentaire en hébreu et français."
  },
  {
    question: "Comment rejoindre le programme Nitzotz?",
    icon: Database,
    response: "Inscription en 3 étapes : 1) Inscription sur nitzotz.org 2) Entretien individuel 3) Rencontre avec les parents. Nous recherchons des jeunes motivés et prêts à s'investir."
  },
  {
    question: "Quels sont les avantages uniques de Nitzotz?",
    icon: Network,
    response: "Formation complète avec mentorat personnalisé, réseau professionnel et préparation intensive à l'intégration dans le secteur technologique israélien. Une vraie passerelle entre la France et Israël."
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
          "absolute left-0 md:left-[calc(50%+2rem)] flex w-full md:w-[90vw] max-w-[64rem] -translate-x-0 md:-translate-x-1/2 flex-col items-start rounded-lg md:rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity]",
          opened && "translate-y-[10rem] md:translate-y-[14.4rem] opacity-100",
          !opened && "translate-y-[10rem] md:translate-y-[14.4rem] opacity-60"
        )}
      >
        {/* Mobile Header */}
        <div className="flex w-full items-center justify-between p-4 md:hidden">
          <span className="text-sm font-medium text-white">FAQ</span>
          {selectedQuestion !== null && (
            <button
              onClick={handleBackClick}
              className="text-white/80 hover:text-white transition-colors"
            >
              ← Retour
            </button>
          )}
        </div>

        {/* Desktop Header */}
        <span className="hidden md:inline-block ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/80">
          FAQ - Questions fréquentes
        </span>

        {/* Search - Desktop only */}
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
            <div className="p-4">
              {/* Desktop Back Button */}
              <button
                onClick={handleBackClick}
                className="hidden md:block text-white/80 mb-4 hover:text-white transition-colors"
              >
                ← Retour aux questions
              </button>
              <h3 className="text-base md:text-lg font-medium mb-3 text-white">
                {questionOptions[selectedQuestion].question}
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed">
                {questionOptions[selectedQuestion].response}
              </p>
            </div>
          ) : (
            filteredQuestions.map(({ question, icon: Icon }, index) => (
              <button
                key={question}
                onClick={(e) => handleQuestionClick(index, e)}
                className="command-menu-button flex h-14 md:h-[4.6rem] w-full items-center gap-3 px-4 md:px-5 text-white hover:bg-white/[0.05] transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm md:text-base text-left">{question}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};