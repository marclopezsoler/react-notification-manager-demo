import { Outlet, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

import ExamplesScreen from "../screens/ExamplesScreen/ExamplesScreen";
import InstallationScreen from "../screens/InstallationScreen/InstallationScreen";
import MainScreen from "../screens/MainScreen";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";
import CustomizationScreen from "../screens/CustomizationScreen/CustomizationScreen";

const AppNavigation = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Outlet />}>
        <Route index element={<MainScreen />} />
        <Route path={routes.installation} element={<InstallationScreen />} />
        <Route path={routes.examples} element={<ExamplesScreen />} />
        <Route path={routes.customization} element={<CustomizationScreen />} />
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default AppNavigation;
