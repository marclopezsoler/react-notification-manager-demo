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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

      h1,
    h2 {
      margin: 0;
      padding: 0;
    }


      h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      line-height: 24px;

      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.fg};

      img {
        width: 240px;
      }
    }

    h2 {
      font-size: 18px;
      font-weight: 300;
      color: ${({ theme }) => theme.fg};
    }
`;
