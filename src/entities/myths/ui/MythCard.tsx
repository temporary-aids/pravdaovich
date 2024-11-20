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
      className="border-2 relative border-[#FF0000] p-14 rounded-3xl transition-all cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="flex items-center justify-center gap-4 mb-2">
        <Image
          className={cn(
            "absolute top-0",
            isImageRight ? "left-[5%]" : "right-[5%]",
          )}
          src={image}
          alt={title}
          width={80}
          height={100}
        />
        <h3 className="text-3xl font-medium text-center text-[#FF0000] z-50">
          {title}
        </h3>
      </div>
      <p
        className={`text-2xl text-gray-700 overflow-hidden transition-all text-center ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
