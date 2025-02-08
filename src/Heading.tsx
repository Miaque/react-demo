import { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContext.tsx";

export default function Heading({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error("Heading 必须在 Section 内部！");
    case 1:
      return (
        <h1 className={"text-2xl antialiased md:subpixel-antialiased"}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={"text-xl antialiased md:subpixel-antialiased"}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={"text-lg antialiased md:subpixel-antialiased"}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={"text-base antialiased md:subpixel-antialiased"}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={"text-sm antialiased md:subpixel-antialiased"}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={"text-xs antialiased md:subpixel-antialiased"}>
          {children}
        </h6>
      );
    default:
      throw Error("未知的 level：" + level);
  }
}
