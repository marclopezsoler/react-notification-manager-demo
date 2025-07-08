import styled from "styled-components";

export const ConfigurationScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 24px;

  gap: 36px;

  .screen-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 36px;

    width: 100%;

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      gap: 8px;

      .title {
        font-size: 18px;
        font-weight: 500;
        color: ${({ theme }) => theme.brand};
      }

      .description {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.fg};
      }

      .note {
        font-size: 14px;
        font-weight: 500;
        font-style: italic;
        color: ${({ theme }) => theme.brandHover};
      }
    }
  }
`;
