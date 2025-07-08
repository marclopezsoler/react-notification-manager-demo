export const enUs = {
  components: {
    codeSnippet: {
      copy: "Copy",
      shortCopy: "Copied",
      shortError: "Error",
      copied: "Copied to clipbaord",
      error: "Error copying to clipboard",
    },
    footer: {
      credits: "A project by",
    },
  },
  data: {
    content: {
      v1: {
        home: {
          title: "Welcome to",
          subtitle: "This is package's documentation page.",
          introduction: {
            title: "What is notiflow?",
            text: "<p>It's a lightweight <strong>React notification</strong> and <strong>notification system</strong> built with Context and Hooks, allowing you to easily display customizable notifications anywhere in your app.<br/><br/>It supports global theming with <strong>light and dark modes</strong>, customizable colors, default or custom JSX icons, and flexible positioning in any screen corner.<br/><br/>The library provides a simple API via the <strong>useNotifications</strong> hook to trigger toasts with messages, submessages, and durations, and its global configuration lets you set defaults for theme, position, duration, and icon display to match your app's design seamlessly.</p>",
          },
          button: "Get started",
        },
        installation: {
          title: "Download and install",
          command: "npm install notiflow",
          commandTitle: "Installation command",
          npm: "https://www.npmjs.com/package/notiflow",
          npmDescription:
            "To obtain other details about the package, click <a href={{url}} target='_blank'>here</a>",
          button: "Continue to configuration",
        },
        configuration: {
          title: "How to use and customize",
          description:
            "On this section set up and further customizations for a correct configuration of the package are specified.",
          sections: [
            {
              title: "Basic configuration",
              description:
                "Wrap your app with the provider and add NotificationManager at the root level of your project",
              commandTitle: "Set up of the package",
            },
            {
              description:
                "Anywhere in your component tree, call the useNotifications() hook to send notifications",
              commandTitle: "How to notify",
            },
            {
              title: "Global Configuration",
              description:
                "To set global defaults, create a config file (recommended naming: notiflow.config.ts)",
              commandTitle: "notiflow.config.ts",
            },
            {
              description:
                "Then, import this config file at the top of your entry file (where you add the provider) to ensure it runs before your app uses the notifications",
              commandTitle: "Root of the project",
              note: "Note: If duration is set to -1, notifications will remain visible until manually dismissed using the close button or programmatically.",
            },
            {
              title: "Customization",
              description:
                "Global defaults: use setupNotificationConfig() to set mode, theme, duration, and other defaults.",
            },
            {
              description:
                "Theming: pass theme to notify to override border, background, and text colors.",
            },
            {
              description:
                "Position: control screen corner via align (e.g., ['bottom', 'right']).",
            },
            {
              title: "Icons",
              description: "Use hasIcon to show default icon shapes.",
            },
            {
              description:
                "Pass a customIcon or component to render your own icon or JSX element inside the notification.",
            },
          ],
          button: "See examples",
        },
        examples: {
          title: "Configuration examples",
          description:
            "Below are examples containing the necessary code in order to display some variants of package's notifications.",
          button: "Notify",
          successCustom: "Success toast with sub-message and no auto-close.",
          successBorder: "Success style with coloured border and icon.",
          successNone: "Borderless success toast without icon.",
          errorFull: "Full-background error toast, closable.",
          errorBorder: "Error style using a coloured border.",
          errorNone: "Plain error text, no colour.",
          infoFull: "Information toast with full colour.",
          infoBorder: "Info toast outlined with a border.",
          infoNone: "Minimal info toast - text only.",
          alertCustom: "Alert style (palette customised in package config).",
          alertBorder: "Alert with border only.",
          alertNone: "Alert message without colour.",
          noneType: 'Generic message using `type: "none"`.',
          noneNoDuration: "Message with `duration: -1` (stays open).",
          customIcon: "Toast using your own SVG as icon.",
        },
      },
    },
    menu: {
      installation: "Installation",
      configuration: "Configuration",
      examples: "Examples",
    },
  },
};

export type LangSchema = typeof enUs;
