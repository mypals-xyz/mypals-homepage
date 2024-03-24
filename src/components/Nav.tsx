import currencyEth from "@assets/svg/currency-ethereum.svg";
import MyPalIcon from "@assets/svg/P.svg";
import VectorIcon from "@assets/svg/Vector.svg";
import { useTranslation } from "react-i18next";

import BitButton from "./BitButton";

export default function Nav(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-x-10 py-4 px-6">
      <div className="flex items-center">
        <img
          className="w-[24px] h-[24px] md:w-[56px] md:h-[56px]"
          src={MyPalIcon}
        />
        <span className="text-[20px] leading-[20px] md:text-[32px] md:leading-[32px] ml-3">
          MyPals
        </span>
      </div>
      <a
        href="https://docs.mypals.xyz"
        target="_blank"
        className="flex items-center text-sm md:text-xl hover:opacity-30 hover:cursor-pointer">
        <span>{t("whitepaper")}</span>
        <img className="ml-2 h-2 w-2 md:h-3 md:w-3 md:ml-3" src={VectorIcon} />
      </a>
      <div className="invisible md:visible flex items-center justify-end flex-grow">
        <BitButton>
          <div className="py-3 px-6 font-pixel-bold flex items-center">
            <span>{t("connect")}</span>
            <img src={currencyEth} className="ml-3" />
          </div>
        </BitButton>
      </div>
    </div>
  );
}
