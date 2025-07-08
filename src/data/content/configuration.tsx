import { useTranslation } from "react-i18next";

import useVersion from "../../hooks/useVersion";

type Section = {
  title?: string;
  description?: string;
  commandTitle?: string;
  command?: string;
  note?: string;
};

const configurationCommands = [
  {
    command: `
import React from "react";

import {
	NotificationsProvider,
	useNotifications,
	NotificationManager,
} from "notiflow"

function App() {
	return (
		<NotificationsProvider>
			<Main />
			<NotificationManager />
		</NotificationsProvider>
	);
}

function Main() {
	const { notify } = useNotifications();
	return (
		<button
			onClick={() =>
				notify({
					message: "Data saved successfully!",
					type: "success",
					duration: 3000,
				})
			}
		>
			Save Data
		</button>
	);
}`,
  },
  {
    command: `
const { notify } = useNotifications();

notify({
	message: "Oops, something went wrong.",
	type: "error",
	duration: 5000,
	hasIcon: true,
	canClose: true,
	subMessage: "Please retry.",
	align: ["bottom", "right"],
});`,
  },
  {
    command: `
import {
  setupNotificationConfig,
  DEFAULT_LIGHT,
  DEFAULT_DARK,
} from "notiflow";

setupNotificationConfig({
  defaultMode: "dark", // "light" | "dark"
  colored: "border", // "full" | "border" | "none"
  hasIcon: false, // show icon by default
  canClose: true, // show close button by default
  duration: 7000, // default duration in ms (-1 = stays until manually closed)
  align: ["bottom", "right"], // default position
  lightTheme: {
    ...DEFAULT_LIGHT,
    alert: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FF7777",
      fontColor: "#000000",
    },
  },
  darkTheme: {
    ...DEFAULT_DARK,
    alert: {
      backgroundColor: "#000000",
      borderColor: "#FF7777",
      fontColor: "#FFFFFF",
    },
  },
});`,
  },
  {
    command: `
import "./notiflow.config.ts";

import React from "react";
import {
  NotificationsProvider,
  NotificationManager,
} from "notiflow";

function App() {
  return (
    <NotificationsProvider>
      <Main />
      <NotificationManager />
    </NotificationsProvider>
  );
}`,
  },
];

const ConfigurationData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const raw = t(`data:content:${currentVersion}:configuration:sections`, {
    returnObjects: true,
    defaultValue: [],
  }) as unknown;

  const sections: {
    title: string;
    description: string;
    commandTitle?: string;
  }[] = Array.isArray(raw) ? raw : Object.values(raw ?? {});

  const sectionsWithCommands: Section[] = sections.map((section, idx) => ({
    ...section,
    command: configurationCommands[idx]?.command ?? "",
  }));

  const ConfigurationDataPage = {
    title: t(`data:content:${currentVersion}:configuration:title`),
    description: t(`data:content:${currentVersion}:configuration:description`),
    sections: sectionsWithCommands,
    note: t(`data:content:${currentVersion}:configuration:note`),
    button: t(`data:content:${currentVersion}:configuration:button`),
  };

  return { ConfigurationDataPage };
};

export default ConfigurationData;
