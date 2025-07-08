import useVersion from "../../hooks/useVersion";

import Button from "../../components/Button/Button";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";

import InstallationData from "../../data/content/installation";

import { routes } from "../../navigation/routes";

import { InstallationScreenWrapper } from "./InstallationScreen.style";

const InstallationScreen = () => {
  const { InstallationDataPage } = InstallationData();
  const { navigateWithVersion } = useVersion();

  return (
    <InstallationScreenWrapper>
      <h1>{InstallationDataPage.title}</h1>
      <CodeSnippet
        text={InstallationDataPage.command}
        title={InstallationDataPage.commandTitle}
        copy
      />
      <div className="footer">
        <Button
          label={InstallationDataPage.button}
          onClick={() => navigateWithVersion(routes.configuration)}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: InstallationDataPage.npmDescription,
          }}
          className="description"
        />
      </div>
    </InstallationScreenWrapper>
  );
};

export default InstallationScreen;
