import styled from "styled-components";

export const ExamplesScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;

  width: 100%;

  .snippets {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 24px;

    width: 100%;

    .snippet {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      gap: 8px;

      width: 100%;

      padding: 24px;

      .snippet-description {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.brand};
      }
    }
  }
`;
