// src/index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./marc-react-notification-manager.config.ts";

import {
  NotificationManager,
  NotificationsProvider,
} from "marc-react-notification-manager";

import AppNavigation from "./navigation/AppNavigation.tsx";
import "./index.css";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import useTheme from "./hooks/useTheme.ts";

export function Root() {
  const { mode, toggleMode } = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[mode]}>
        <NotificationsProvider>
          <NotificationManager />
          <AppNavigation currentMode={mode} onToggleTheme={toggleMode} />
        </NotificationsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
