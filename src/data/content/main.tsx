import { useTranslation } from "react-i18next";

import useVersion from "../../hooks/useVersion";

const MainData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const MainDataPage = {
    title: t(`data:content:${currentVersion}:home:title`),
    subtitle: t(`data:content:${currentVersion}:home:subtitle`),
    introduction: {
      title: t(`data:content:${currentVersion}:home:introduction:title`),
      text: t(`data:content:${currentVersion}:home:introduction:text`),
    },
    button: t(`data:content:${currentVersion}:home:button`),
  };

  return { MainDataPage };
};

export default MainData;
