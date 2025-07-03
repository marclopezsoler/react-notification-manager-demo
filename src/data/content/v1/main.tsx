import { useTranslation } from "react-i18next";

import useVersion from "../../../hooks/useVersion";

const MainData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const MainDataPage = {
    title: t(`data:content:${currentVersion}:title`),
    subtitle: t(`data:content:${currentVersion}:subtitle`),
    introduction: {
      title: t(`data:content:${currentVersion}:introduction:title`),
      text: t(`data:content:${currentVersion}:introduction:text`),
    },
    button: t(`data:content:${currentVersion}:button`),
  };

  return { MainDataPage };
};

export default MainData;
