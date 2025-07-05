import { useTranslation } from "react-i18next";

import useVersion from "../../hooks/useVersion";

const InstallationData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const InstallationDataPage = {
    title: t(`data:content:${currentVersion}:installation:title`),
    command: t(`data:content:${currentVersion}:installation:command`),
    commandTitle: t(`data:content:${currentVersion}:installation:commandTitle`),
    npm: t(`data:content:${currentVersion}:installation:npm`),
    npmDescription: t(
      `data:content:${currentVersion}:installation:npmDescription`
    ),
  };

  return { InstallationDataPage };
};

export default InstallationData;
