import { HIVBlock } from "@/entities/hiv-info/ui/HIVBlock";
import TestingBlock from "@/entities/testing/ui/TestingBlock";
import { InfoSection } from "@/widgets/InfoSection/ui/InfoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-8">
      <HIVBlock />
      <InfoSection />
      <TestingBlock />
    </main>
  );
}
