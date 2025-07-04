import useTheme from "../hooks/useTheme";
import useVersion from "../hooks/useVersion";

import Button from "../components/Button/Button";

import largeLogoDark from "../assets/notiflow-large-logo-dark.svg";
import largeLogoLight from "../assets/notiflow-large-logo-light.svg";

import { routes } from "../navigation/routes";

import MainData from "../data/content/v1/main";

import { MainScreenWrapper } from "./MainScreen.style";

const MainScreen = () => {
  const { MainDataPage } = MainData();
  const { mode } = useTheme();
  const { navigateWithVersion } = useVersion();

  return (
    <MainScreenWrapper>
      <section className="main-header">
        <h1>
          {MainDataPage.title}
          <img src={mode === "light" ? largeLogoLight : largeLogoDark} />
        </h1>
        <h2>{MainDataPage.subtitle}</h2>
      </section>
      <section className="resume">
        <span className="resume-title">{MainDataPage.introduction.title}</span>
        <div
          dangerouslySetInnerHTML={{ __html: MainDataPage.introduction.text }}
          className="resume-text"
        />
      </section>
      {MainDataPage.button && (
        <Button
          label={MainDataPage.button}
          onClick={() => navigateWithVersion(routes.installation)}
          variant={1}
        />
      )}
    </MainScreenWrapper>
  );
};

export default MainScreen;
