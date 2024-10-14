import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: ${props => (props.width ? props.width : "13rem")};
`;

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`;
