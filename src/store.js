import { createContext } from "react";

export const StoreContext = createContext();

export const initialState = {
  searchValue: "",
  filterData: {
    category: { labe: "", value: "" },
    decision: { labe: "", value: "" },
    company: { labe: "", value: "" },
    date: { labe: "", value: "" },
  },
};

export const actionTypes = {
  UPDATE_SEARCHVALUE: "updateSerachValue",
  UPDATE_FILTERDATA: "updateFilterData",
  NEW_FILTERNAME: "newFilterName",
};

export const searchValueReducer = (searchValueState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCHVALUE:
      return action.payload;
    default:
      return searchValueState;
  }
};

export const filterDataReducer = (filterData, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTERDATA:
      return action.payload;
    case actionTypes.NEW_FILTERNAME:
      return {
        ...filterData,
        [action.payload.filterName]: action.payload.selectedValue,
      };
    default:
      return filterData;
  }
};

const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};

export const rootReducer = combineReducers({
  searchValue: searchValueReducer,
  filterData: filterDataReducer,
});
