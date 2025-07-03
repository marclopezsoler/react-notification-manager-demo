interface UtilsState {
  version: number;
  theme: "light" | "dark";
}

const THEME_KEY = "notiflow-theme";

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const initialUtilsState: UtilsState = {
  version: 1,
  theme: getInitialTheme(),
};

const setVersionAction = (state: UtilsState, action: { payload: number }) => ({
  ...state,
  version: action.payload,
});

const setThemeAction = (
  state: UtilsState,
  action: { payload: "light" | "dark" }
) => ({
  ...state,
  theme: action.payload,
});

export { initialUtilsState, setVersionAction, setThemeAction };
