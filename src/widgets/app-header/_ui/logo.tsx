"use client";

import { LogoIcon } from "@/shared/ui/logo-icon";
import { useEffect, useState } from "react";

export function Logo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleScreenChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, []);

  return (
    <a href="https://spid.center" target="_blank" rel="noopener noreferrer">
      <LogoIcon width={isMobile ? 102 : undefined} />
    </a>
  );
}
