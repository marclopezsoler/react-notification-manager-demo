import useTheme from "../hooks/useTheme";

import largeLogoDark from "../assets/notiflow-large-logo-dark.svg";
import largeLogoLight from "../assets/notiflow-large-logo-light.svg";

import MainData from "../data/content/v1/main";

import { MainScreenWrapper } from "./MainScreen.style";

const MainScreen = () => {
  const { MainDataPage } = MainData();
  const { mode } = useTheme();

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
    </MainScreenWrapper>
  );
};

export default MainScreen;
