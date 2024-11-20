"use client";

import { useState } from "react";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />}
      onMenuToggle={handleMenuToggle}
    />
  );
}
