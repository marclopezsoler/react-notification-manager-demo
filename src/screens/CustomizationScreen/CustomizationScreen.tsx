import CustomizationData from "../../data/content/customization";

import { CustomizationScreenWrapper } from "./CustomizationScreen.style";

const CustomizationScreen = () => {
  const { CustomizationDataPage } = CustomizationData();
  return (
    <CustomizationScreenWrapper>
      <h1>{CustomizationDataPage.title}</h1>
      <h2>{CustomizationDataPage.description}</h2>
    </CustomizationScreenWrapper>
  );
};

export default CustomizationScreen;
