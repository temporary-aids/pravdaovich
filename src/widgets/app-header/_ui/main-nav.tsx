"use client";

import { BurgerMenu } from "@/features/burger-menu/ui/BurgerMenu";
import { cn } from "@/shared/ui/utils";

interface MainNavProps {
  isMenuOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
}

export function MainNav({ isMenuOpen, onMenuToggle }: MainNavProps) {
  const HEADER_HEIGHT = 128;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "gap-5 2xl:gap-16 font-medium text-xs xl:text-xl 2xl:text-2xl flex-col md:flex-row mr-9 xl:mr-20 items-center",
          isMenuOpen ? "flex" : "hidden",
        )}
      >
        <a
          className="transition-colors hover:text-[#FF0000] text-foreground/60 uppercase"
          href="#top"
          onClick={handleClick}
        >
          Наверх
        </a>
        <a
          className="transition-colors hover:text-[#FF0000] text-foreground/60 uppercase"
          href="#myths"
          onClick={handleClick}
        >
          Мифы
        </a>
        <a
          className="transition-colors hover:text-[#FF0000] text-foreground/60 uppercase"
          href="#facts"
          onClick={handleClick}
        >
          Факты
        </a>
        <a
          className="transition-colors hover:text-[#FF0000] text-foreground/60 uppercase"
          href="https://spid.center/ru/test"
          rel="noopener noreferrer"
          target="_blank"
        >
          Протестироваться
        </a>
        <a
          className="transition-colors hover:text-[#FF0000] text-foreground/60 uppercase"
          href="https://spid.center/ru/hiv"
          rel="noopener noreferrer"
          target="_blank"
        >
          База знаний
        </a>
      </nav>

      <BurgerMenu onMenuToggle={onMenuToggle} />
    </>
  );
}
