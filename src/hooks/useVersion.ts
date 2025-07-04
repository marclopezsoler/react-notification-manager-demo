import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setVersion } from "../redux/reducers/utilsReducer";
import type { RootState } from "../redux/store";

const VERSION_KEY = "package-version";
export const versions = Array.from({ length: 1 }, (_, i) => i + 1); // [1,2,3,...,10]

const useVersion = () => {
  const dispatch = useDispatch();
  const version = useSelector((state: RootState) => state.utils.version);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(location.search);
    const urlVersion = searchParams.get("v");

    if (urlVersion && versions.includes(Number(urlVersion))) {
      dispatch(setVersion(Number(urlVersion)));
      localStorage.setItem(VERSION_KEY, urlVersion);
    } else {
      const savedVersion = localStorage.getItem(VERSION_KEY);
      if (savedVersion && versions.includes(Number(savedVersion))) {
        dispatch(setVersion(Number(savedVersion)));
      } else {
        dispatch(setVersion(1));
        localStorage.setItem(VERSION_KEY, "1");
      }
    }
  }, [dispatch, location.search]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(VERSION_KEY, version.toString());
  }, [version]);

  const toggleVersion = (newVersion: number) => {
    if (!versions.includes(newVersion)) return;

    dispatch(setVersion(newVersion));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("v", newVersion.toString());

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const navigateWithVersion = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    const version = searchParams.get("v");

    if (version) {
      navigate(`${path}?v=${version}`);
    } else {
      navigate(path);
    }
  };

  return { version, toggleVersion, versions, navigateWithVersion };
};

export default useVersion;
