import ScreenBase from "../components/ScreenBase/ScreenBase";

import { MainScreenWrapper } from "./MainsScreen.style";

const MainScreen = ({
  currentMode,
  onToggleTheme,
}: {
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  return (
    <ScreenBase currentMode={currentMode} onToggleTheme={onToggleTheme}>
      <MainScreenWrapper>
        <p>MAIN</p>
      </MainScreenWrapper>
    </ScreenBase>
  );
};

export default MainScreen;
