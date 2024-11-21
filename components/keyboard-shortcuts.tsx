"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { HeroTitle, HeroSubtitle } from "./hero";
import { Code, Terminal, Rocket } from "lucide-react";

const shortcuts = [
  { 
    text: "Initiation aux bases de la programmation avec Python et acquisition des fondamentaux techniques.", 
    keys: "1ère année",
    icon: Code
  },
  { 
    text: "Approfondissement avec des langages comme C ou C++ et des notions de développement \"low-level\".", 
    keys: "2ème année",
    icon: Terminal
  },
  { 
    text: "Les étudiants réalisent des projets concrets qui mettent en application tout ce qu'ils ont appris.", 
    keys: "3ème année",
    icon: Rocket
  },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcutIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [activeText, setActiveText] = useState(shortcuts[0].text);

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextShortcut, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToShortcut = (index: number) => {
    clearTimeout(timeoutRef.current);
    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    activeShortcutIndex.current = index;
    setActiveText(shortcuts[index].text);
    scheduleTimeout();
  };

  const goToNextShortcut = () =>
    goToShortcut((activeShortcutIndex.current + 1) % shortcuts.length);

  const onShortcutButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    goToShortcut(Number(ev.currentTarget.dataset.index));
  };

  return (
    <>
      <div className="text-center mb-12">
        <HeroTitle className="text-gradient text-xl md:text-2xl lg:text-5xl">
          {activeText}
        </HeroTitle>
      </div>

      <div className="my-7 h-[4rem] min-h-[4rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex h-[6rem] max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide"
        >
          {shortcuts.map((shortcut, index) => {
            const Icon = shortcut.icon;
            return (
              <Button
                className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw] min-w-[200px] px-8"
                key={shortcut.text}
                data-index={index}
                data-keys={shortcut.keys}
                onClick={onShortcutButtonClick}
                variant="secondary"
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-lg">{shortcut.keys}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};