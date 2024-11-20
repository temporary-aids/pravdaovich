import { FC } from "react";

interface LogoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LogoIcon: FC<LogoIconProps> = ({
  width = 304,
  height = 32,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 304 32"
      fill="none"
    >
      <path
        d="M53.8091 0.65282V22.3962H47.7502V6.78557H35.0818V22.3533H29.023V0.65282H53.8091ZM67.4096 0.65282V14.5051L81.0102 0.65282H87.069V22.3962H81.0102V8.62968L67.4096 22.3962H61.3508V0.65282H67.4096ZM116.092 22.3962H96.7716L96.5597 28.143H90.9246L90.5856 16.6065H93.382C96.3479 13.3901 98.3816 8.75834 98.3816 0.65282H117.787V16.6065H122.278L121.939 28.143H116.346L116.092 22.3962ZM111.686 16.6065V6.78557H103.72C103.508 10.9027 101.941 14.8053 100.373 16.5637H111.686V16.6065ZM177.019 22.3962H153.377V0.65282H159.436V16.2206H172.062V0.65282H178.121V16.2206H182.612L182.273 28.1001H177.231L177.019 22.3962ZM206.551 9.35875C205.661 6.82845 202.525 5.54186 198.924 5.54186C195.323 5.54186 192.103 6.82845 191.298 9.35875H206.551ZM224.515 0.65282V8.45813H238.37V0.65282H244.429V22.3962H238.37V14.5909H224.515V22.3962H218.456V0.65282H224.515ZM271.46 6.78557H263.325V22.3533H256.97V6.78557H248.878V0.65282H271.46V6.78557ZM131.684 18.0218C131.684 20.8094 133.972 23.1253 136.726 23.1253C139.48 23.1253 141.768 20.8094 141.768 18.0218C141.768 15.2342 139.48 12.9183 136.726 12.9183C133.972 12.9183 131.684 15.2342 131.684 18.0218ZM191.298 13.2614C192.357 16.0919 196.043 17.3356 200.873 17.3356C206.169 17.3356 210.321 15.7488 212.27 14.4622V19.6944C211.211 20.8952 206.932 22.9537 200.068 22.9537C192.314 22.9537 185.069 19.2655 185.069 11.5459C185.069 4.12661 191.467 0.138184 198.797 0.138184C206.847 0.138184 213.584 5.32743 212.355 13.2614H191.298ZM0 11.5459C0 4.08373 6.65199 0.138184 14.0243 0.138184C19.4052 0.138184 22.9218 2.19673 23.981 3.61198V8.97277C22.2015 7.64329 19.2357 5.88495 14.2785 5.88495C10.4229 5.88495 6.27066 7.64329 6.27066 11.5459C6.27066 15.4486 10.3805 17.2069 14.2785 17.2069C19.278 17.2069 22.2439 15.4486 23.981 14.1191V19.4799C22.9218 20.8952 19.3628 22.9537 14.0243 22.9537C6.65199 22.9537 0 19.0082 0 11.5459ZM304 11.5459C304 19.0082 297.814 22.9537 290.442 22.9537C286.586 22.9537 283.578 21.9244 282.18 20.9381V31.5739H275.952V0.65282H282.01V2.45405C283.409 1.38189 286.586 0.138184 290.442 0.138184C297.772 0.138184 304 4.08373 304 11.5459ZM289.425 17.3785C293.281 17.3785 297.687 15.5344 297.687 11.6317C297.687 7.72907 293.281 5.88495 289.425 5.88495C286.205 5.88495 283.451 6.78557 281.968 7.98638V15.3628C283.324 16.5637 286.205 17.3785 289.425 17.3785Z"
        fill="#FF0000"
      />
    </svg>
  );
};