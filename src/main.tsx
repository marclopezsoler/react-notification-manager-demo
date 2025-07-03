// src/index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./marc-react-notification-manager.config.ts";

import {
  NotificationManager,
  NotificationsProvider,
} from "marc-react-notification-manager";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import i18n from "./localization/i18n.ts";

import { Provider } from "react-redux";
import appStore from "./redux/store.ts";

import { GlobalStyle } from "./styles/globalStyle.tsx";
import AppNavigation from "./navigation/AppNavigation.tsx";

import useTheme from "./hooks/useTheme.ts";

import ScreenBase from "./components/ScreenBase/ScreenBase.tsx";

import { theme } from "./styles/theme.ts";

export function Root() {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <AppWithTheme />
      </Provider>
    </BrowserRouter>
  );
}

const AppWithTheme = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      <I18nextProvider i18n={i18n}>
        <NotificationsProvider>
          <NotificationManager />
          <ScreenBase currentMode={mode} onToggleTheme={toggleMode}>
            <AppNavigation />
          </ScreenBase>
        </NotificationsProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
