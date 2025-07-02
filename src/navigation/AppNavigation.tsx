import { Route, Routes } from "react-router-dom";

import { routes } from "../screens/routes";

import MainScreen from "../screens/MainScreen";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";

const AppNavigation = ({
  currentMode,
  onToggleTheme,
}: {
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  return (
    <Routes>
      <Route
        path={routes.main}
        element={
          <MainScreen currentMode={currentMode} onToggleTheme={onToggleTheme} />
        }
      >
        <Route
          path={routes.installation}
          element={
            <MainScreen
              currentMode={currentMode}
              onToggleTheme={onToggleTheme}
            />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <NotFoundScreen
            currentMode={currentMode}
            onToggleTheme={onToggleTheme}
          />
        }
      />
    </Routes>
  );
};

export default AppNavigation;
