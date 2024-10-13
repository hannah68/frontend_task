import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Button from "../Button";
import { PaginationContainer } from "./styles";

function Pagination() {
  return (
    <div>
      {/* Display paginated data */}
      {/* <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul> */}

      {/* Pagination controls */}
      <PaginationContainer>
        <Button icon={<GrFormPrevious size={20} type="previous" />} variant={"tertiary"} />

        <Button variant={"secondary"} label={1} size={"small"} />

        <Button variant={"secondary"} label={2} size={"small"} />

        <Button variant={"secondary"} label={3} size={"small"} />

        <Button icon={<GrFormNext size={20} />} variant={"tertiary"} type={"next"} />
      </PaginationContainer>
    </div>
  );
}

export default Pagination;
