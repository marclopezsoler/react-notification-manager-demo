import styled from "styled-components";

import { globals } from "../../globals";

const { xSize, ySize } = globals;

export const ScreenBaseWrapper = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  .content {
    position: absolute;
    left: ${xSize}px;
    width: calc(100vw - ${xSize}px);
    top: ${ySize}px;
    height: calc(100vh - ${ySize}px);
  }
`;
