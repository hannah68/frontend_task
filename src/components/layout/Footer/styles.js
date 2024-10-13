import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  grid-column: 1/3;
  grid-row: 2/3;
  width: 100%;
  padding: 2rem 2rem 2rem 100px;
  color: ${({ theme }) => theme.colors.tertiaryBlack};
`;

export const FooterTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.secondaryBlack};
`;

export const FooterTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  img {
    width: 40px;
  }

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: bold;
  }
`;

export const FooterTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

export const FooterLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li:first-child {
    font-weight: bold;
    color: black;
  }
`;

export const FooterLegals = styled.ul`
  list-style-type: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li:first-child {
    font-weight: bold;
    color: black;
  }
`;

export const SocialMedia = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;
