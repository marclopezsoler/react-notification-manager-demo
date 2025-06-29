import {
  DEFAULT_DARK,
  DEFAULT_LIGHT,
  setupNotificationConfig,
} from "marc-react-notification-manager";

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
      backgroundColor: "#FFFFFF",
      borderColor: "#FFF777",
    },
  },
  darkTheme: {
    ...DEFAULT_DARK,
    alert: {
      fontColor: "#FFFFFF",
      backgroundColor: "#FF7700",
      borderColor: "#FFF777",
    },
  },
});
