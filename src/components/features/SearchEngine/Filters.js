import React from "react";
import Dropdown from "../../common/Dropdown";
import { FilterContainer, DropdownList } from "../SearchEngine/styles";
import Button from "../../common/Button";

export default function Filters() {
  return (
    <FilterContainer>
      <DropdownList>
        <Dropdown options={[]} value={[]} onChange={() => undefined} />
        <Dropdown options={[]} value={[]} onChange={() => undefined} />
        <Dropdown options={[]} value={[]} onChange={() => undefined} />
        <Dropdown options={[]} value={[]} onChange={() => undefined} />
      </DropdownList>

      <Button label={"clear Filters"} variant={"secondary"} />
    </FilterContainer>
  );
}
