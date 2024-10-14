import { useContext } from "react";

import Dropdown from "../../common/Dropdown";
import * as S from "./styles";
import Button from "../../common/Button";
import { getUniqueOptions } from "../utils";
import { StoreContext, actionTypes } from "../../../store";

export default function Filters({ data, setData, originalData }) {
  const store = useContext(StoreContext);

  const categoryOptions = getUniqueOptions(data, "category");
  const companyOptions = getUniqueOptions(data, "company");
  const decisionOptions = getUniqueOptions(data, "decision");
  const dateOptions = getUniqueOptions(data, "date");

  const handleFilterChange = (filterName, selectedOption) => {
    store.dispatch({
      type: actionTypes.NEW_FILTERNAME,
      payload: { selectedValue: selectedOption, filterName },
    });

    let filteredData = originalData;

    if (store.state.filterData.category.value) {
      filteredData = filteredData.filter(d => d.category === store.state.filterData.category.value);
    }

    if (store.state.filterData.decision.value) {
      filteredData = filteredData.filter(d => d.decision === store.state.filterData.decision.value);
    }

    if (store.state.filterData.company.value) {
      filteredData = filteredData.filter(d => d.company === store.state.filterData.company.value);
    }

    if (store.state.filterData.date.value) {
      filteredData = filteredData.filter(d => d.date === store.state.filterData.date.value);
    }

    const res = filteredData.filter(d => d[filterName] === selectedOption.label);

    setData(res);
  };

  const handleCategoryChange = selectedOption => handleFilterChange("category", selectedOption);
  const handleDecisionChange = selectedOption => handleFilterChange("decision", selectedOption);
  const handleCompanyChange = selectedOption => handleFilterChange("company", selectedOption);
  const handleDateChange = selectedOption => handleFilterChange("date", selectedOption);

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

  return (
    <S.FilterContainer>
      <S.DropdownList>
        <Dropdown
          options={categoryOptions}
          value={store.state.filterData.category.value ? store.state.filterData.category : null}
          onChange={handleCategoryChange}
          label="Category"
        />
        <Dropdown
          options={decisionOptions}
          value={store.state.filterData.decision.value ? store.state.filterData.decision : null}
          onChange={handleDecisionChange}
          label="Decision"
        />
        <Dropdown
          options={companyOptions}
          value={store.state.filterData.company.value ? store.state.filterData.company : null}
          onChange={handleCompanyChange}
          label="Company"
        />
        <Dropdown
          options={dateOptions}
          value={store.state.filterData.date.value ? store.state.filterData.date : null}
          onChange={handleDateChange}
          isDateSelect={true}
        />
      </S.DropdownList>
      {/* Clear Filters */}
      <Button label={"Clear Filters"} variant={"secondary"} onClick={handleClearFilter} />
    </S.FilterContainer>
  );
}
