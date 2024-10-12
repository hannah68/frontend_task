import React from "react";
import { SearchForm } from "./styles";
import Button from "../../common/Button";
import InputField from "../../common/InputFIeld";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <SearchForm>
      <InputField label="Search" icon={<FiSearch size={30} />} />
      <Button label={"Search"} variant={"primary"} />
    </SearchForm>
  );
}
