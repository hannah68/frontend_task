import { useState } from "react";

import * as S from "./styles";
import Pagination from "../../common/Pagination";
import { formatDate } from "../utils";
import BaseDropdown from "../../common/Dropdown/BaseDropdown";

export default function Results({ data, setData }) {
  const [sortOption, setSortOption] = useState("sort-by");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleItemsPerPageChange = event => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
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

    switch (selectedOption) {
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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const itemsPerPageOptions = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
  ];

  const sortOptions = [
    { value: "sort-by", label: "Sort By" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "date-asc", label: "Date (Oldest to Newest)" },
    { value: "date-desc", label: "Date (Newest to Oldest)" },
  ];

  return (
    <S.ResultContainer>
      <S.ResultsHeader>
        <S.ResultTitle>
          <h1>Results</h1>
          <p>
            Showing results {currentPage}-5 of {data.length}.
          </p>
        </S.ResultTitle>
        {/* Sorting */}
        <S.SortResult>
          <BaseDropdown value={itemsPerPage} onChange={handleItemsPerPageChange} options={itemsPerPageOptions} />
          <BaseDropdown value={sortOption} onChange={e => handleSortChange(e.target.value)} options={sortOptions} />
        </S.SortResult>
      </S.ResultsHeader>
      <S.ResultsMain>
        {getPaginatedData().map(result => (
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
        ))}
      </S.ResultsMain>
      <S.Resultsfooter>
        {/* Pagination */}
        <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </S.Resultsfooter>
    </S.ResultContainer>
  );
}
