import "./marc-react-notification-manager.config.ts";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  NotificationManager,
  NotificationsProvider,
} from "marc-react-notification-manager";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotificationsProvider>
      <NotificationManager />
      <App />
    </NotificationsProvider>
  </StrictMode>
);
