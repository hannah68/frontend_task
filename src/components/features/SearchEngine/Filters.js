import React from "react";
import { useContext } from "react";
import Dropdown from "../../common/Dropdown";
import * as S from "./styles";
import Button from "../../common/Button";
import { getUniqueOptions } from "../utils";
import { StoreContext, actionTypes } from "../../../store";

export default function Filters({ data, setData, originalData }) {
  const store = useContext(StoreContext);
  console.log({ data });

  const categoryOptions = getUniqueOptions(data, "category");
  const companyOptions = getUniqueOptions(data, "company");
  const decisionOptions = getUniqueOptions(data, "decision");

  const handleCategoryChange = selectedOption => {
    const filterName = "category";
    store.dispatch({
      type: actionTypes.NEW_FILTERNAME,
      payload: { selectedValue: selectedOption, filterName },
    });
    const filteredData = data.filter(d => d.category === selectedOption.label);
    setData(filteredData);
  };

  const handleDecisionChange = selectedOption => {
    const filterName = "decision";
    store.dispatch({
      type: actionTypes.NEW_FILTERNAME,
      payload: { selectedValue: selectedOption, filterName },
    });
    const filteredData = data.filter(d => d.decision === selectedOption.label);
    setData(filteredData);
  };

  const handleCompanyChange = selectedOption => {
    const filterName = "company";
    store.dispatch({
      type: actionTypes.NEW_FILTERNAME,
      payload: { selectedValue: selectedOption, filterName },
    });
    const filteredData = originalData.filter(d => d.company === selectedOption.label);
    setData(filteredData);
  };

  const handleClearFilter = () => {
    store.dispatch({
      type: actionTypes.UPDATE_FILTERDATA,
      payload: {
        category: { labe: "", value: "" },
        decision: { labe: "", value: "" },
        company: { labe: "", value: "" },
        date: { labe: "", value: "" },
      },
    });
    setData(originalData);
  };

  console.log("state", store.state);

  return (
    <S.FilterContainer>
      <S.DropdownList>
        <Dropdown
          options={categoryOptions}
          value={store.state.filterData.category || { label: "", value: "" }}
          onChange={handleCategoryChange}
          label="Category"
        />
        <Dropdown
          options={decisionOptions}
          value={store.state.filterData.decision || { label: "", value: "" }}
          onChange={handleDecisionChange}
          label="Decision"
        />
        <Dropdown
          options={companyOptions}
          value={store.state.filterData.company || { label: "", value: "" }}
          onChange={handleCompanyChange}
          label="Company"
        />
        <Dropdown
          options={[]}
          value={store.state.filterData.date || { label: "", value: "" }}
          onChange={() => undefined}
          label="Date"
          isDateSelect={true}
        />
      </S.DropdownList>

      <Button label={"Clear Filters"} variant={"secondary"} onClick={handleClearFilter} />
    </S.FilterContainer>
  );
}
