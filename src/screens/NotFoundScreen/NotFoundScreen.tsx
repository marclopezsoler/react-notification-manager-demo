import ScreenBase from "../../components/ScreenBase/ScreenBase";

import { NotFoundScreenWrapper } from "./NotFoundScreen.style";

const NotFoundScreen = ({
  currentMode,
  onToggleTheme,
}: {
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  return (
    <ScreenBase currentMode={currentMode} onToggleTheme={onToggleTheme}>
      <NotFoundScreenWrapper>
        <span>Not Found</span>
      </NotFoundScreenWrapper>
    </ScreenBase>
  );
};

export default NotFoundScreen;
