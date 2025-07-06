import { useTranslation } from "react-i18next";

import useVersion from "../../hooks/useVersion";

import { makeSnippet, type DemoSnippet } from "../../utils/notification";

import type { NotifyArgs } from "../../types/notification";
import Icon from "../../components/icon";

const ExamplesData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const rawSamples: (NotifyArgs & { descKey: string })[] = [
    /* ——— SUCCESS ——— */
    {
      descKey: "successCustom",
      message: "Success!",
      subMessage: "Operation completed successfully.",
      type: "success",
      duration: -1,
      canClose: true,
    },
    {
      descKey: "successBorder",
      message: "Success Border",
      type: "success",
      duration: 5000,
      hasIcon: true,
      canClose: true,
      colored: "border",
      align: ["bottom", "middle"],
    },
    {
      descKey: "successNone",
      message: "Success None",
      type: "success",
      duration: 5000,
      hasIcon: false,
      colored: "none",
      align: ["top", "right"],
    },

    /* ——— ERROR ——— */
    {
      descKey: "errorFull",
      message: "Error!",
      type: "error",
      duration: 5000,
      hasIcon: true,
      canClose: true,
      colored: "full",
      align: ["bottom", "left"],
    },
    {
      descKey: "errorBorder",
      message: "Error Border",
      type: "error",
      duration: 5000,
      hasIcon: true,
      colored: "border",
      align: ["top", "middle"],
    },
    {
      descKey: "errorNone",
      message: "Error None",
      type: "error",
      duration: 5000,
      hasIcon: false,
      colored: "none",
      align: ["bottom", "right"],
    },

    /* ——— INFO ——— */
    {
      descKey: "infoFull",
      message: "Info Full",
      type: "info",
      duration: 5000,
      hasIcon: true,
      canClose: true,
      colored: "full",
      align: ["top", "left"],
    },
    {
      descKey: "infoBorder",
      message: "Info Border",
      type: "info",
      duration: 5000,
      hasIcon: true,
      colored: "border",
      align: ["bottom", "middle"],
    },
    {
      descKey: "infoNone",
      message: "Info None",
      type: "info",
      duration: 5000,
      hasIcon: false,
      colored: "none",
      align: ["top", "right"],
    },

    /* ——— ALERT (with custom palette) ——— */
    {
      descKey: "alertCustom",
      message: "Alert!",
      type: "alert",
      duration: 5000,
      hasIcon: true,
      canClose: true,
      colored: "full",
      align: ["bottom", "left"],
    },
    {
      descKey: "alertBorder",
      message: "Alert Border",
      type: "alert",
      duration: 5000,
      hasIcon: true,
      colored: "border",
      align: ["top", "middle"],
    },
    {
      descKey: "alertNone",
      message: "Alert None",
      type: "alert",
      duration: 5000,
      hasIcon: true,
      colored: "none",
      align: ["bottom", "right"],
    },

    /* ——— NONE type ——— */
    {
      descKey: "noneType",
      message: "No Type",
      subMessage: "Just a message without styling.",
      type: "none",
      duration: 5000,
      canClose: true,
      align: ["top", "middle"],
    },
    {
      descKey: "noneNoDuration",
      message: "No duration",
      subMessage: "Just a message that won't close automatically.",
      type: "none",
      duration: -1,
      canClose: true,
      align: ["top", "middle"],
    },

    /* ——— CUSTOM ICON ——— */
    {
      descKey: "customIcon",
      message: "Custom Icon",
      type: "info",
      duration: 5000,
      hasIcon: true,
      canClose: true,
      colored: "none",
      align: ["top", "middle"],
      customIcon: <Icon />,
    },
  ];

  const snippets: DemoSnippet[] = rawSamples.map(
    ({ descKey, ...notify }): DemoSnippet => ({
      ...makeSnippet(notify),
      descKey,
    })
  );
  const ExamplesDataPage = {
    title: t(`data:content:${currentVersion}:examples:title`),
    description: t(`data:content:${currentVersion}:examples:description`),
    button: t(`data:content:${currentVersion}:examples:button`),
    snippets,
  };

  return { ExamplesDataPage, snippets, currentVersion, t };
};

export default ExamplesData;
