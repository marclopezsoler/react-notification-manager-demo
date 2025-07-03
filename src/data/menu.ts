import { useTranslation } from "react-i18next";

import type { MenuItemType } from "../types/menu";

const MenuItems = () => {
  const { t } = useTranslation();

  const menuItems: MenuItemType[] = [
    {
      id: 1,
      key: "installation",
      label: t("data:menu:installation"),
    },
    {
      id: 2,
      key: "examples",
      label: t("data:menu:examples"),
    },
    {
      id: 3,
      key: "theme",
      label: t("data:menu:theme"),
    },
  ];

  return { menuItems };
};

export default MenuItems;
