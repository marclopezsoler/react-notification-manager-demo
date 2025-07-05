import InstallationData from "../../data/content/installation";

import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import { InstallationScreenWrapper } from "./InstallationScreen.style";

const InstallationScreen = () => {
  const { InstallationDataPage } = InstallationData();

  return (
    <InstallationScreenWrapper>
      <h1>{InstallationDataPage.title}</h1>
      <CodeSnippet
        text={InstallationDataPage.command}
        title={InstallationDataPage.commandTitle}
        copy
      />
    </InstallationScreenWrapper>
  );
};

export default InstallationScreen;
