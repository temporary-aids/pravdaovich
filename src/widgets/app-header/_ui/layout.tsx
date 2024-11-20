export function Layout({
  logo,
  nav,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 sm:py-6 lg:py-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {logo}

        <div className="flex items-center gap-4 md:gap-7">
          <div className="hidden lg:flex">{nav}</div>

          <p className="text-sm font-bold text-[#A1A1A1] sm:text-lg lg:text-2xl xl:text-4xl">
            18+
          </p>
        </div>
      </div>
    </header>
  );
}
