import type { ReactNode } from "react";

import Navbar from "../Navbar/Navbar";

import { ScreenBaseWrapper } from "./ScreenBase.style";

const ScreenBase = ({
  children,
  currentMode,
  onToggleTheme,
}: {
  children: ReactNode;
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  return (
    <ScreenBaseWrapper>
      <Navbar currentMode={currentMode} onToggleTheme={onToggleTheme} />
      <div className="content">{children}</div>
    </ScreenBaseWrapper>
  );
};

export default ScreenBase;
