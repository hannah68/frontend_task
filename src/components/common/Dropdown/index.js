import Select from "react-select";
import React from "react";
import { DropdownContainer } from "./styles";

export default function Dropdown({ label, options, value, onChange }) {
  return (
    <DropdownContainer>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>{label}</label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={`Select ${label}`}
        isClearable={true} // Optional: Adds a clear button
      />
    </DropdownContainer>
  );
}
