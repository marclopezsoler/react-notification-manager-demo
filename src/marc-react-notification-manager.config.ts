import {
  DEFAULT_DARK,
  DEFAULT_LIGHT,
  setupNotificationConfig,
} from "marc-react-notification-manager";
import { theme } from "./styles/theme";

setupNotificationConfig({
  defaultMode: "dark",
  colored: "border",
  hasIcon: false,
  duration: 7000,
  align: ["bottom", "right"],
  canClose: false,
  lightTheme: {
    ...DEFAULT_LIGHT,
    alert: {
      fontColor: "#FF7700",
      backgroundColor: "#e3e3e3",
      borderColor: "#FFF777",
    },
    none: {
      backgroundColor: theme.light.bg,
      borderColor: theme.light.fg,
      fontColor: theme.light.fg,
    },
  },
  darkTheme: {
    ...DEFAULT_DARK,
    alert: {
      fontColor: "#e3e3e3",
      backgroundColor: "#FF7700",
      borderColor: "#FFF777",
    },
    none: {
      backgroundColor: theme.dark.bg,
      borderColor: theme.dark.fg,
      fontColor: theme.dark.fg,
    },
  },
});
