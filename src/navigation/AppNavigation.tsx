import { useEffect } from "react";

import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import { routes } from "./routes";

import ExamplesScreen from "../screens/ExamplesScreen/ExamplesScreen";
import InstallationScreen from "../screens/InstallationScreen/InstallationScreen";
import MainScreen from "../screens/MainScreen";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";
import ConfigurationScreen from "../screens/ConfigurationScreen/ConfigurationScreen";

const AppNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path={routes.main} element={<Outlet />}>
        <Route index element={<MainScreen />} />
        <Route path={routes.installation} element={<InstallationScreen />} />
        <Route path={routes.examples} element={<ExamplesScreen />} />
        <Route path={routes.configuration} element={<ConfigurationScreen />} />
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default AppNavigation;
