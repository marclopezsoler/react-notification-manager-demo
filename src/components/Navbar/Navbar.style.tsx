import styled from "styled-components";

import { globals } from "../../globals";

const { xSize, ySize } = globals;

export const NavbarWrapper = styled.nav`
  position: relative;
  z-index: 1;

  .row {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: ${ySize}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 24px;

    pointer-events: auto;

    img {
      width: 42px;
      height: 42px;

      cursor: pointer;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      .button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        border: none;
        background-color: transparent;

        cursor: pointer;

        &.dark {
          transform: rotate(180deg);
        }
      }
    }
  }

  .column {
    position: fixed;
    top: ${ySize}px;
    left: 0;
    width: ${xSize}px;
    height: calc(100vh - ${ySize}px);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 24px;

    gap: 16px;

    pointer-events: auto;
  }
`;

export const MenuItem = styled.a<{ $isActive: boolean }>`
  cursor: pointer;

  color: ${({ $isActive, theme }) => ($isActive ? theme.brand : theme.fg)};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.65)};

  font-size: 18px;
  font-weight: 400;

  transition: 0.25s ease;

  &:hover {
    opacity: 1;
  }
`;
