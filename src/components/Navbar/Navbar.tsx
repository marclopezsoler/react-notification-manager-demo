import { IconBrightnessFilled } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

import { theme } from "../../theme";

import icon from "../../assets/notiflow-icon.svg";

import { routes } from "../../screens/routes";

import { menuItems } from "../../data/menu";

import type { MenuItemType } from "../../types/menu";

import { MenuItem, NavbarWrapper } from "./Navbar.style";

const Navbar = ({
  currentMode,
  onToggleTheme,
}: {
  currentMode: "light" | "dark";
  onToggleTheme: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavbarWrapper>
      <div className="row">
        <img
          src={icon}
          alt="notiflow icon"
          onClick={() => navigate(routes.main)}
        />
        <div className="right">
          <button
            onClick={onToggleTheme}
            className={currentMode === "dark" ? "dark" : "light"}
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
            onClick={() => navigate(routes[item.key])}
          >
            {item.label}
          </MenuItem>
        ))}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
