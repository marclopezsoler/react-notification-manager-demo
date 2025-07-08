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
      key: "configuration",
      label: t("data:menu:configuration"),
    },
    {
      id: 3,
      key: "examples",
      label: t("data:menu:examples"),
    },
  ];

  return { menuItems };
};

export default MenuItems;
