import React from "react";
import * as S from "./styles";
import Dropdown from "../../common/Dropdown";
import Pagination from "../../common/Pagination";
import { formatDate } from "../utils";

export default function Results({ data }) {
  const limitOptions = [5, 10, 15, 20].map(num => ({
    label: num,
    value: num,
  }));

  const sortByOptions = ["Date", "Category", "Decision", "Company"].map(num => ({
    label: num,
    value: num,
  }));

  return (
    <S.ResultContainer>
      <S.ResultsHeader>
        <div>
          <h1>Results</h1>
          <p>Showing results 1-5 of {data.length}.</p>
        </div>
        <S.SortResult>
          <Dropdown options={limitOptions} value={[]} onChange={() => undefined} label={5} />
          <Dropdown options={sortByOptions} value={[]} onChange={() => undefined} label={"Sort By"} />
        </S.SortResult>
      </S.ResultsHeader>
      <S.ResultsMain>
        {data.map(result => (
          <S.Card key={result.id}>
            <S.CardDate>{formatDate(result.date)}</S.CardDate>
            <S.CardTitle>{result.title}</S.CardTitle>
            <p>{result.content}</p>
            <S.CardFooter>
              <S.CardBottom>
                <span>Category</span>
                <span>{result.category}</span>
              </S.CardBottom>
              <S.CardBottom>
                <span>Decision</span>
                <span>{result.decision}</span>
              </S.CardBottom>
              <S.CardBottom>
                <span>Company</span>
                <span>{result.company}</span>
              </S.CardBottom>
            </S.CardFooter>
          </S.Card>
        ))}
      </S.ResultsMain>
      <S.Resultsfooter>
        <Pagination data={[]} itemsPerPage={3} />
      </S.Resultsfooter>
    </S.ResultContainer>
  );
}
