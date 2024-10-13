import styled from "styled-components";

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;

export const UserPicture = styled.div`
  width: 50px;
  height: 50px;
  background-color: #9fdf9f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 16px;
  cursor: pointer;

  span {
    text-align: center;
  }
`;
