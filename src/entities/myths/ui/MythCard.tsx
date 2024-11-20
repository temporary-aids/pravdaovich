"use client";

import { cn } from "@/shared/ui/utils";
import Image from "next/image";
import { FC, useState } from "react";

interface MythCardProps {
  title: string;
  image: string;
  text: string;
  isImageRight?: boolean;
}

export const MythCard: FC<MythCardProps> = ({
  title,
  image,
  text,
  isImageRight,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="border-2 relative border-[#FF0000] p-5 md:p-14 rounded-3xl transition-all cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="flex items-center md:justify-center gap-4 mb-2">
        <Image
          className={cn(
            "absolute top-0 w-[40px] md:w-[80px]",
            isImageRight
              ? "right-[5%] md:left-[5%]"
              : "right-[2%] md:right-[5%]",
            image === "/icons/pin.svg" && "right-[1%] md:right-[5%]",
            image === "/icons/drops.svg" && "right-[5%] md:left-[0%]",
          )}
          src={image}
          alt={title}
          width={50}
          height={100}
        />
        <h3 className="text-xl md:text-3xl font-medium md:text-center text-[#FF0000] z-49">
          {title}
        </h3>
      </div>
      <p
        className={`text-sm md:text-2xl overflow-hidden transition-all ,md:text-center ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
