import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;

  padding-top: 48px;
  margin-top: 24px;

  border-top: 1px solid ${({ theme }) => theme.border};

  a,
  p {
    font-size: 14px;
    font-weight: 400;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.brand};
    text-decoration: none;

    transition: 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.brandHover};
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;
