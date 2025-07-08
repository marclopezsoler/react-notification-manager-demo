import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/reducers/utilsReducer";
import type { RootState } from "../redux/store";

import { useNotifications } from "notiflow";

const THEME_KEY = "notiflow-theme";

const useTheme = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.utils.theme);
  const { toggleMode: handleToggleMode } = useNotifications();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mode !== null) return;

    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      dispatch(setTheme(stored));
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialMode = prefersDark ? "dark" : "light";
      dispatch(setTheme(initialMode));
      localStorage.setItem(THEME_KEY, initialMode);
    }
  }, [dispatch, mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mode) {
      localStorage.setItem(THEME_KEY, mode);
    }
  }, [mode]);

  const toggleMode = () => {
    if (!mode) return;
    const newMode = mode === "light" ? "dark" : "light";
    dispatch(setTheme(newMode));
    handleToggleMode();
  };

  return { mode, toggleMode };
};

export default useTheme;
