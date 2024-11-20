import { HIVIllustration } from "@/shared/ui/illustrations/HIVIllustration";
import { FC } from "react";

export const HIVBlock: FC = () => {
  return (
    <section id="top" className="container mx-auto py-8 px-4">
      <h1 className="text-4xl md:text-9xl font-bold mb-8 tracking-tighter text-center">
        Правда о <span className="text-[#FF0000]">ВИЧ</span>
      </h1>
      <div className="flex justify-center mb-8">
        <HIVIllustration width={515} height={262} />
      </div>
      <p className="text-2xl max-w-5xl mx-auto mb-3.5">
        Проблема ВИЧ может коснуться каждого. По данным ВОЗ, в 2023 году{" "}
        <span className="text-[#FF0000]">
          число людей, живущих с ВИЧ в России перевалило за миллион
        </span>
        . Это люди разных возрастов, национальностей, привычек, разного достатка
        и разных взглядов на жизнь. Больше половины из них — это
        гетеросексуальные люди, которые никогда не принимали наркотики.
      </p>
      <p className="text-2xl max-w-5xl mx-auto mb-9">
        Это значит, что понятие «группа риска» размылось и утратило
        актуальность.
      </p>
      <div className="bg-[#F6F6F8] text-[#FF0000] text-4xl px-8 py-6 rounded-lg mb-9 max-w-5xl mx-auto">
        Стереотипы больше не работают, и только актуальные знания о ВИЧ помогут
        вам обезопасить себя.
      </div>
      <p className="text-2xl max-w-5xl mx-auto">
        Команда Фонда «СПИД.ЦЕНТР» собрала здесь всю важную информацию, которая
        поможет вам в этом.
      </p>
    </section>
  );
};
