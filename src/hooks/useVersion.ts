import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setVersion } from "../redux/reducers/utilsReducer";
import type { RootState } from "../redux/store";

const VERSION_KEY = "package-version";

const useVersion = () => {
  const dispatch = useDispatch();
  const version = useSelector((state: RootState) => state.utils.version);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedVersion = localStorage.getItem(VERSION_KEY);
    if (savedVersion) {
      dispatch(setVersion(Number(savedVersion)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(VERSION_KEY, version.toString());
  }, [version]);

  const toggleVersion = (newVersion: number) => {
    dispatch(setVersion(newVersion));
  };

  return { version, toggleVersion };
};

export default useVersion;
