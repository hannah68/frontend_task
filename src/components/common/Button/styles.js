import styled, { css } from "styled-components";

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
    background-color: white;
    color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    &:hover {
      color: #1d9563;
    }
  `,
  secondaryColorStyles: css`
    background-color: white;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.primaryGreen : "black")};
    border: none;
  `,
  tertiary: css`
    color: black;
    padding: 6px;
  `,
};

const secondaryWidthStyles = css`
  width: ${({ size }) => (size === "small" ? "1.5rem" : "5rem")};
`;

const tertiaryBorderStyles = css`
  background-color: ${({ disabled }) => (!disabled ? "white" : "#f8f9fa")};
  border-radius: ${({ type }) => (type === "next" ? "0 5px 5px 0" : "5px 0 0 5px")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  border: 2px solid ${({ disabled, theme }) => (!disabled ? theme.colors.secondaryBlack : "#f8f9fa")};
  &:hover {
    background-color: ${({ disabled, theme }) => (!disabled ? theme.colors.secondaryGreen : "gray")};
  }
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
