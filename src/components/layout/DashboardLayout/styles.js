import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-left: 2rem;
  gap: 8rem;
  width: full;
  height: min-content;
  grid-column: 1;
  grid-row: 1/2;
  border-right: 3px solid ${({ theme }) => theme.colors.secondaryGreen};
`;

export const Logo = styled.img`
  height: 3rem;
  width: 3rem;
`;

export const Sidebarlist = styled.ul`
  list-style-type: none;
`;

export const SidebarItem = styled.li``;

export const Main = styled.div`
  grid-column: 2;
  grid-row: 1/2;
  padding: 2rem;
`;
