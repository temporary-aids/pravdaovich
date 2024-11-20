import { MenuIcon } from "@/shared/ui/menu-icon";
import { FC } from "react";

interface BurgerMenuProps {
  onMenuToggle: (isOpen: boolean) => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onMenuToggle }) => {
  return (
    <div className="relative">
      <MenuIcon className="w-11 h-11" onMouseEnter={() => onMenuToggle(true)} />
    </div>
  );
};
