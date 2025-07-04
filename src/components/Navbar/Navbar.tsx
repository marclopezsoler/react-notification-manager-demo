import { IconBrightnessFilled } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

import useVersion from "../../hooks/useVersion";

import { theme } from "../../styles/theme";

import icon from "../../assets/notiflow-icon.svg";

import { routes } from "../../navigation/routes";

import LanguageSelector from "../LanguageSelector/LanguageSelector";
import VersionSelector from "../VersionSelector/VersionSelector";

import MenuItems from "../../data/menu";

import type { MenuItemType } from "../../types/menu";

import { MenuItem, NavbarWrapper } from "./Navbar.style";

const Navbar = ({
  currentMode,
  onToggleTheme,
}: {
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  const location = useLocation();
  const { menuItems } = MenuItems();
  const { navigateWithVersion } = useVersion();

  return (
    <NavbarWrapper>
      <div className="row">
        <img
          src={icon}
          alt="notiflow icon"
          onClick={() => navigateWithVersion(routes.main)}
        />
        <div className="right">
          <LanguageSelector />
          <VersionSelector />
          <button
            onClick={onToggleTheme}
            className={`button ${currentMode === "dark" ? "dark" : "light"}`}
          >
            <IconBrightnessFilled color={theme[currentMode].fg} width={20} />
          </button>
        </div>
      </div>
      <div className="column">
        {menuItems.map((item: MenuItemType) => (
          <MenuItem
            $isActive={location.pathname.includes(item.key)}
            key={item.id}
            onClick={() => navigateWithVersion(routes[item.key])}
          >
            {item.label}
          </MenuItem>
        ))}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
