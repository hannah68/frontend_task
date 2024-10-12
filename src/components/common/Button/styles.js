import styled, { css } from "styled-components";

// background-color: ${({ theme }) => theme.colors.primaryGreen};

export const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: white;
    width: 10rem;
    border-radius: 5px;
    &:hover {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    background-color: #ffffff;
    width: 10rem;
    color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    &:hover {
      background-color: #5a6268;
    }
  `,
  tertiary: css`
    background-color: transparent;
    color: black;
    border: 2px solid #007bff;
    border-radius: 5px;
    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
};

export const BaseButton = styled.button`
  text-align: center;
  ${({ variant }) => variantStyles[variant]}
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
`;
