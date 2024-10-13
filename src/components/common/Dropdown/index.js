import Select from "react-select";
import { FiCalendar } from "react-icons/fi";
import { components } from "react-select";

import * as S from "./styles";
import { theme } from "../../../theme";

export default function Dropdown({ label, options, value, onChange, isDateSelect }) {
  const CustomPlaceholder = props => {
    return (
      <components.Placeholder {...props}>
        <FiCalendar style={{ marginRight: "8px" }} />
        {props.children}
      </components.Placeholder>
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? theme.colors.primaryGreen : theme.colors.secondaryBlack,
      boxShadow: state.isFocused ? theme.colors.secondaryGreen : "none",
      "&:hover": {
        borderColor: theme.colors.secondaryBlack,
      },
      placeholder: provided => ({
        ...provided,
        color: theme.colors.secondaryBlack,
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "red" : "brown",
        color: state.isSelected ? "black" : "black",
        "&:hover": {
          backgroundColor: "lightgreen",
          color: "white",
        },
      }),
    }),
  };

  return (
    <S.DropdownContainer>
      <div>
        <Select
          options={options}
          value={value}
          onChange={onChange}
          placeholder={isDateSelect ? "Date" : label}
          components={isDateSelect ? { Placeholder: CustomPlaceholder } : {}}
          styles={customStyles}
        />
      </div>
    </S.DropdownContainer>
  );
}
