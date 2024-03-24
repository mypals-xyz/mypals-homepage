import cz from "classnames";

import BitFrame from "./BitFrame";

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function BitButton({ children, className }: Props): JSX.Element {
  return (
    <BitFrame borderColor="border-primary">
      <div
        className={cz(
          "cursor-pointer text-primary bg-primary/[.04] hover:bg-primary/[.08]",
          className
        )}>
        {children}
      </div>
    </BitFrame>
  );
}
