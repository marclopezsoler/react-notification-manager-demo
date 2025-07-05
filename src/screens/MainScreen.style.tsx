import styled from "styled-components";

export const MainScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;

  .main-header {
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }

  .resume {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    .resume-title {
      font-size: 18px;
      font-weight: 400;

      color: ${({ theme }) => theme.brand};
    }

    .resume-text {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.fg};
      text-align: center;

      max-width: min(660%, 600px);
    }
  }
`;
