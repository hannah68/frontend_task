import { useState } from "react";
import { TfiFaceSad } from "react-icons/tfi";

import * as S from "./styles";
import Pagination from "../../common/Pagination";
import { formatDate } from "../utils";
import Dropdown from "../../common/Dropdown";

export default function Results({ data, setData }) {
  const [sortOption, setSortOption] = useState({ value: "", label: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState({ label: 5, value: 5 });

  const totalPages = Math.ceil(data.length / itemsPerPage.value);
  const startIndex = (currentPage - 1) * itemsPerPage.value + 1;
  const endIndex = Math.min(startIndex + itemsPerPage.value - 1, data.length);

  const handleItemsPerPageChange = selectedOption => {
    setItemsPerPage(selectedOption);
    // Reset to first page when items per page changes
    setCurrentPage(1);
  };

  const sortByTitle = (data, order = "asc") => {
    return [...data].sort((a, b) => {
      if (order === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const sortByDate = (data, order = "desc") => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (order === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  const handleSortChange = selectedOption => {
    setSortOption(selectedOption);

    switch (selectedOption.value) {
      case "title-asc":
        setData(sortByTitle(data, "asc"));
        break;
      case "title-desc":
        setData(sortByTitle(data, "desc"));
        break;
      case "date-asc":
        setData(sortByDate(data, "asc"));
        break;
      case "date-desc":
        setData(sortByDate(data, "desc"));
        break;
      default:
        setData(data);
        break;
    }
  };

  // Get the current items based on the current page and itemsPerPage
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return data.slice(startIndex, endIndex);
  };

  const itemsPerPageOptions = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
  ];

  const sortOptions = [
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "date-asc", label: "Date (Oldest to Newest)" },
    { value: "date-desc", label: "Date (Newest to Oldest)" },
  ];
  console.log(getPaginatedData());
  return (
    <S.ResultContainer>
      <S.ResultsHeader>
        <S.ResultTitle>
          <h1>Results</h1>
          <p>
            Showing results {startIndex}- {endIndex} of {data.length}.
          </p>
        </S.ResultTitle>
        {/* Sorting */}
        <S.SortResult>
          <Dropdown
            options={itemsPerPageOptions}
            value={itemsPerPage.value ? itemsPerPage : null}
            onChange={handleItemsPerPageChange}
            width={"5rem"}
          />
          <Dropdown
            options={sortOptions}
            value={sortOption.value ? sortOption : null}
            onChange={handleSortChange}
            label="Sort By"
          />
        </S.SortResult>
      </S.ResultsHeader>
      <S.ResultsMain>
        {getPaginatedData().length > 0 ? (
          getPaginatedData().map(result => (
            <S.Card key={result.id}>
              <S.CardDate>{formatDate(result.date)}</S.CardDate>
              <S.CardTitle>{result.title}</S.CardTitle>
              <S.CardContent>{result.content}</S.CardContent>
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
          ))
        ) : (
          <S.ErrorMessage>
            <TfiFaceSad />
            <p>No results found. Try a broader search or check your spelling, please.</p>
          </S.ErrorMessage>
        )}
      </S.ResultsMain>
      <S.Resultsfooter>
        {/* Pagination */}
        {getPaginatedData().length > 0 ? (
          <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        ) : (
          <></>
        )}
      </S.Resultsfooter>
    </S.ResultContainer>
  );
}
