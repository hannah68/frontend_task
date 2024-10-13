import styled from "styled-components";

export const SearchEngineConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 100px 2rem;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primaryblack};
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const DropdownList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ResultsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const ResultsMain = styled.div``;
export const Resultsfooter = styled.div``;
export const SortResult = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryBlack};
  cursor: pointer;
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  span:nth-of-type(2) {
    font-weight: bold;
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const CardDate = styled.span`
  font-weight: bold;
`;
