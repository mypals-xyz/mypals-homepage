import cx from "classnames";
import { useState } from "react";

export type Props = {
  children?: React.ReactNode;
  borderColor: string;
};

type LR = "left" | "right";
type TB = "top" | "bottom";

function borderClass(lrtb: LR | TB): string {
  switch (lrtb) {
    case "left":
      return `border-l-2`;
    case "right":
      return `border-r-2`;
    case "top":
      return `border-t-2`;
    case "bottom":
      return `border-b-2`;
  }
}

export default function BitFrame({
  children,
  borderColor,
}: Props): JSX.Element {
  const [expand, setExpand] = useState<boolean>();
  const size = "w-2 h-2";

  const onHover = () => {
    setExpand(true);
  };

  const onHoverLeave = () => {
    setExpand(false);
  };

  const calBorderClass = (lr: LR, tb: TB): string => {
    return cx(
      "absolute",
      borderColor,
      size,
      borderClass(lr),
      borderClass(tb),
      // need add all classes will be used to tailwind safelist
      {
        [`-${lr}-1`]: expand,
        [`-${tb}-1`]: expand,
        [`${lr}-0`]: !expand,
        [`${tb}-0`]: !expand,
      }
    );
  };

  return (
    <div
      className="relative inline-block"
      onMouseOver={onHover}
      onMouseLeave={onHoverLeave}
    >
      <div className={calBorderClass("left", "top")} />
      <div className={calBorderClass("left", "bottom")} />
      <div className={calBorderClass("right", "top")} />
      <div className={calBorderClass("right", "bottom")} />
      <div>{children}</div>
    </div>
  );
}
