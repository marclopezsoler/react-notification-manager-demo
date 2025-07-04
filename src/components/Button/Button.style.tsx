import styled, { css } from "styled-components";

const variantStyles = {
  0: css`
    background: ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.bg};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.brandHover};
    }
  `,
  1: css`
    background: transparent;
    color: ${({ theme }) => theme.brand};
    border: 1px solid ${({ theme }) => theme.brand};

    &:hover {
      background: ${({ theme }) => theme.lightBrand};
    }
  `,
} as const;

export const ButtonWrapper = styled.button<{ variant?: number }>`
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;

  cursor: pointer;

  font-size: 16px;
  font-weight: 400;

  ${({ variant = 0 }) => variantStyles[variant as keyof typeof variantStyles]}
  ${({ variant = 1 }) => variantStyles[variant as keyof typeof variantStyles]}
`;
