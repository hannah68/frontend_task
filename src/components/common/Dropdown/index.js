import Select from "react-select";
import React from "react";
import { DropdownContainer } from "./styles";
import { FiCalendar } from "react-icons/fi";

export default function Dropdown({ label, options, value, onChange, isDateSelect }) {
  const CustomPlaceholder = props => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <FiCalendar style={{ marginRight: "8px" }} />
      </div>
    );
  };

  return (
    <DropdownContainer>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={label}
        components={isDateSelect ? { Placeholder: CustomPlaceholder } : {}}
        isClearable={true} // Optional: Adds a clear button
      />
    </DropdownContainer>
  );
}
