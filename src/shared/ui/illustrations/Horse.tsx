import { FC } from "react";

interface HorseProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Horse: FC<HorseProps> = ({
  width = 167,
  height = 224,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 167 224"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M167 139.905H85.2505C79.8306 150.045 46.6815 223.896 46.6815 223.896H38.8488L63.0812 125.918H33.0092L7.90263 181.656H0C0 181.656 9.2314 144.066 14.5814 122.456C18.3929 107.105 25.6661 103.224 40.2475 103.224C40.2475 103.224 56.1577 103.224 61.5077 103.224L47.9403 47.8004L17.134 58.1508C17.134 58.1508 8.28728 61.158 4.8255 54.8289C1.32876 48.4648 8.98662 42.4854 8.98662 42.4854L37.7648 16.9942V0C41.5063 0.314707 48.255 3.28694 48.29 16.085L53.605 16.05V0C53.605 0 64.1302 0 64.1652 16.085C91.7894 20.1063 112.071 39.1285 120.148 70.0047H167V139.905Z"
        fill="#FF0000"
      />
    </svg>
  );
};
