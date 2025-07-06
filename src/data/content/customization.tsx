import { useTranslation } from "react-i18next";

import useVersion from "../../hooks/useVersion";

const CustomizationData = () => {
  const { t } = useTranslation();

  const { version } = useVersion();

  const currentVersion = `v${version}`;

  const CustomizationDataPage = {
    title: t(`data:content:${currentVersion}:customization:title`),
    description: t(`data:content:${currentVersion}:customization:description`),
  };

  return { CustomizationDataPage };
};

export default CustomizationData;
