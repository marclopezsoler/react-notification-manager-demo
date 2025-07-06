export const enUs = {
  components: {
    codeSnippet: {
      copy: "Copy",
      shortCopy: "Copied",
      shortError: "Error",
      copied: "Copied to clipbaord",
      error: "Error copying to clipboard",
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
            text: "<p>It's a lightweight <strong>React notification</strong> and <strong>toast system</strong> built with Context and Hooks, allowing you to easily display customizable notifications anywhere in your app.<br/><br/>It supports global theming with <strong>light and dark modes</strong>, customizable colors, default or custom JSX icons, and flexible positioning in any screen corner.<br/><br/>The library provides a simple API via the <strong>useNotifications</strong> hook to trigger toasts with messages, submessages, and durations, and its global configuration lets you set defaults for theme, position, duration, and icon display to match your app's design seamlessly.</p>",
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
          button: "Continue to customization",
        },
        customization: {
          title: "Coming soon",
          description: "Section under construction",
        },
        examples: {
          title: "Usage examples",
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
      customization: "Customization",
      examples: "Examples",
    },
  },
};

export type LangSchema = typeof enUs;
