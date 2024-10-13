import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import Button from "../Button";
import * as S from "./styles";

function Pagination({ setCurrentPage, currentPage, totalPages }) {
  // Pagination nums
  const renderPaginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          variant={"secondaryColorStyles"}
          label={i}
          size={"small"}
          key={i}
          onClick={() => setCurrentPage(i)}
          isActive={currentPage === i}
        />
      );
    }
    return pages;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <S.PaginationContainer>
        <Button
          icon={<GrFormPrevious size={20} type="previous" />}
          variant={"tertiary"}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        {renderPaginationNumbers()}
        <Button
          icon={<GrFormNext size={20} />}
          variant={"tertiary"}
          type={"next"}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </S.PaginationContainer>
    </div>
  );
}

export default Pagination;
