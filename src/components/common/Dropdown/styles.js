import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 13rem;
`;

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`;

// Base dropdown style
export const Select = styled.select`
  min-width: 6rem;
  padding: 10px;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  outline: none;
  border-color: ${({ theme }) => theme.colors.secondaryBlack};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondaryGreen};
    outline: none;
    box-shadow: 0 0 0 1px green;
  }

  &:hover {
    bordercolor: ${({ theme }) => theme.colors.secondaryBlack};
  }

  option {
    padding: 10px;
    
    &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};

  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none; /* Prevent interaction */
`;
