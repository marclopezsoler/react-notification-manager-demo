import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
    font-family: sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
