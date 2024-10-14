import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  span {
    position: absolute;
    left: 1rem;
    top: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: ${({ padding }) => padding};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondaryBlack};
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    outline: none;
  }
`;
