import styled from "styled-components";

export const CodeSnippetWrapper = styled.div<{
  $clickable: boolean;
  $copyStatus: boolean | undefined;
}>`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 480px;

  background-color: transparent;

  .snippet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4px;

    width: 100%;
    min-width: 240px;

    border-bottom: 1px solid ${({ theme }) => theme.border};

    border-radius: 8px 8px 0 0;

    background-color: ${({ theme }) => theme.lightBg};

    span {
      font-size: 12px;
      font-weight: 300;
      margin-left: 8px;
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4px;

      font-size: 12px;
      font-weight: 400;

      cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

      color: ${({ $copyStatus, theme }) =>
        $copyStatus === true || $copyStatus === undefined ? theme.fg : "red"};

      cursor: ${({ $copyStatus }) =>
        $copyStatus === true || $copyStatus === false ? "default" : "pointer"};

      background: transparent;
      border: none;
      border-radius: 4px;
      padding: 6px;

      transition: 0.25s ease;

      &:hover {
        background-color: ${({ theme }) => theme.lightBrand};
      }
    }
  }

  .snippet-content {
    display: flex;

    width: 100%;

    font-family: monospace;

    padding: 8px 12px;

    white-space: pre;
    overflow-x: auto;
  }
`;
