import BitButton from "@/components/BitButton";
import Nav from "@/components/Nav";
import Island from "@assets/gif/island.gif";
import Pal from "@assets/gif/pal.gif";
import DiscordIcon from "@assets/svg/discord.svg";
import MIcon from "@assets/svg/M.svg";
import RocketIcon from "@assets/svg/Rocket.svg";
import Sunline from "@assets/svg/sunline.svg";
import XIcon from "@assets/svg/x.svg";
import cz from "classnames";
import { useTranslation } from "react-i18next";

import "./Home.css";

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
      <img
        src={Sunline}
        className={cz(
          "absolute opacity-30 left-1/2 right-1/2 -translate-x-2/4 -z-20",
          "w-[1200px] h-[1200px] max-h-[1200px] max-w-[1200px] -top-[760px]",
          "md:w-[2400px] md:h-[2400px] md:max-h-[2400px] md:max-w-[2400px] md:-top-[1520px]"
        )}
      />
      <Nav />
      <div className="mx-6 md:mx-auto md:w-[1380px] relative">
        <div className="md:pt-32">
          <div className="flex flex-col items-start gap-y-3 md:gap-y-6 md:w-[681px]">
            <p className="text-4xl md:text-6xl ">{t("slogen")}</p>
            <p className="text-2xl md:text-3xl font-m6x11plus">
              {t("summary")}
            </p>
            <BitButton className="flex items-center py-3 px-3 md:py-5 md:px-6">
              <img className="w-4 h-4 md:w-6 md:h-6" src={RocketIcon} />
              <span className="ml-2 md:ml-4 text-xs md:text-base font-pixel-bold">
                {t("early_access")}
              </span>
            </BitButton>
          </div>

          <div className="relative mt-2 md:mt-0 md:!absolute md:-top-2 md:right-3 md:-z-10">
            <img src={Island} className="md:w-[896px] md:h-[896px]" />
            <img
              src={Pal}
              className="walk-pal absolute w-12 h-12 top-[120px] md:w-[128px] md:h-[128px] md:top-[300px]"
            />
            <div
              className={cz(
                "absolute -z-20 w-full bg-[#AA1FFF] bg-opacity-15 blur-[140px]",
                "top-20 h-[300px] rounded-[200px]",
                "md:top-60 md:h-[648px] md:rounded-[920px]"
              )}
            />
          </div>

          <div className="flex justify-between mt-4 md:mt-[232px]">
            <div className="flex items-center">
              <img className="w-6 h-6 md:h-14 md:w-14" src={MIcon} />
              <p className="ml-6 md:w-[500px] md:text-2xl font-m6x11plus">
                {t("join_community")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 md:mt-48">
          <div className="flex md:gap-x-6">
            <a
              href="https://twitter.com/mypalsxyz"
              target="_blank"
              className="hover:cursor-pointer hover:opacity-30">
              <img className="h-8 w-8 md:h-12 md:w-12" src={XIcon} />
            </a>
            <img className="h-8 w-8 md:h-12 md:w-12" src={DiscordIcon} />
          </div>
          <div className="flex gap-x-2 text-xs md:text-base md:gap-x-6">
            <span>@MyPals 2024</span>
            <span>{t("privacy_policy")}</span>
            <span>{t("terms_of_use")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
