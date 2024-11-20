import { Button } from "@/shared/ui/button";
import { Horse } from "@/shared/ui/illustrations/Horse";
import Link from "next/link";
import { FC } from "react";

const TestingBlock: FC = () => {
  return (
    <section
      id="get-tested"
      className="container flex flex-col items-center py-16 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-5xl md:text-6xl font-medium text-center leading-tight mb-16">
        Пройдите тестирование на ВИЧ <br /> бесплатно и анонимно
      </h2>

      <Link
        href="https://spid.center/ru/test"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-[#FF0000] hover:bg-red-600 text-white text-2xl lg:text-6xl font-normal rounded-full pt-2 pb-4 lg:px-20 shadow-lg transition h-20 lg:h-36 w-full mb-12">
          Я хочу протестироваться
        </Button>
      </Link>

      <div
        id="knowledge-base"
        className="flex items-center bg-[#F6F6F8] gap-14 p-6 rounded-lg w-full max-w-5xl justify-end"
      >
        <div>
          <p className="text-gray-600 text-xl md:text-2xl mb-5">
            Помогите нам уберечь от ВИЧ больше людей
          </p>
          <Link
            href="https://spid.center/ru/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#00A5DB] hover:bg-[#1faddc] text-white text-2xl md:text-4xl font-normal rounded-full px-6 py-2 transition w-full h-16 uppercase">
              Помочь
            </Button>
          </Link>
        </div>

        <Horse className="ml-1 md:ml-4" />
      </div>
    </section>
  );
};

export default TestingBlock;
