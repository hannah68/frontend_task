import React, { useContext } from "react";
import * as S from "./styles";
import Button from "../../common/Button";
import InputField from "../../common/InputFIeld";
import { FiSearch } from "react-icons/fi";
import { actionTypes, StoreContext } from "../../../store";

export default function Search({ handleSubmitForm }) {
  const store = useContext(StoreContext);
  const searchValue = store.state.searchValue;

  return (
    <S.SearchForm onSubmit={handleSubmitForm}>
      <InputField
        label="Search"
        value={searchValue}
        onChange={e => store.dispatch({ type: actionTypes.UPDATE_SEARCHVALUE, payload: e.target.value })}
        icon={<FiSearch size={30} />}
      />
      <Button label={"Search"} variant={"primary"} />
    </S.SearchForm>
  );
}
