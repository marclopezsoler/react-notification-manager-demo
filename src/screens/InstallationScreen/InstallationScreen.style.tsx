import styled from "styled-components";

export const InstallationScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .description {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.fg};

      a {
        font-weight: 500;
        text-decoration: none;

        color: ${({ theme }) => theme.fg};

        transition: 0.25s ease;

        &:hover {
          color: ${({ theme }) => theme.brand};
        }
      }
    }
  }
`;
