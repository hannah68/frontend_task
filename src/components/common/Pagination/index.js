import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Button from "../Button";

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
      <div>
        <Button icon={<GrFormPrevious />} variant={"tertiary"} />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <Button icon={<GrFormNext />} variant={"tertiary"} />
      </div>
    </div>
  );
}

export default Pagination;
