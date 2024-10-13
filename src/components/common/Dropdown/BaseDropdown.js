import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";

export default function BaseDropdown({ value, onChange, options }) {
  return (
    <S.SelectContainer>
      <S.Select value={value} onChange={onChange}>
        {/* <option value="" disabled>
          Sort By
        </option> */}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
      <S.Arrow>
        <IoIosArrowDown />
      </S.Arrow>
    </S.SelectContainer>
  );
}
