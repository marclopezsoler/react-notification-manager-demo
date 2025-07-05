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
          npmDescription: "",
        },
      },
    },
    menu: {
      installation: "Installation",
      examples: "Examples",
      theme: "Theme",
    },
  },
};

export type LangSchema = typeof enUs;
