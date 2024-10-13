import styled, { css } from "styled-components";

// background-color: ${({ theme }) => theme.colors.primaryGreen};

export const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: white;
    width: 10rem;
    border-radius: 5px;
    border: none;
    padding: 1rem;
    &:hover {
      background-color: #1d9563;
    }
  `,
  secondary: css`
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    &:hover {
      color: #1d9563;
    }
  `,
  tertiary: css`
    background-color: white;
    color: black;
    border: 2px solid ${({ theme }) => theme.colors.secondaryBlack};
    padding: 6px;
    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
};

const secondaryWidthStyles = css`
  width: ${({ size }) => (size === "small" ? "1.5rem" : "5rem")};
`;

const tertiaryBorderStyles = css`
  border-radius: ${({ type }) => (type === "previous" ? "5px 0 0 5px" : "0 5px 5px 0")};
`;

export const BaseButton = styled.button`
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  ${({ variant }) => variant === "secondary" && secondaryWidthStyles}
  ${({ variant }) => variant === "tertiary" && tertiaryBorderStyles}
  ${({ variant }) => variantStyles[variant]}
`;
