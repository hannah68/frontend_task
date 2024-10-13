import { useEffect, useState, useContext } from "react";
import { getSearchData } from "../../../services";
import { SearchEngineConatiner, Title } from "./styles";
import { actionTypes, StoreContext } from "../../../store";

import Search from "./Search";
import Results from "./Results";
import Filters from "./Filters";

const SearchEngine = () => {
  const store = useContext(StoreContext);
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPageData = () => {
      setTimeout(() => {
        const originalData = getSearchData();
        setOriginalData(originalData);
        setData(originalData);
        setLoading(false);
      }, 1000);
    };
    getPageData();
  }, []);

  const handleSubmitForm = e => {
    e.preventDefault();

    const searchValue = store.state.searchValue.toLowerCase();
    const seachData = originalData.filter(d => d.title.toLowerCase().includes(searchValue));
    setData(seachData);
    // reset the search value
    store.dispatch({ type: actionTypes.UPDATE_SEARCHVALUE, payload: "" });
  };

  return (
    <SearchEngineConatiner>
      <Title>
        <h1>AI-Powered Regulatory Search</h1>
        <p>Use the search engine to search for publications from courts and regulators.</p>
      </Title>
      <Search handleSubmitForm={handleSubmitForm} />
      <Filters data={data} setData={setData} originalData={originalData} />
      {loading ? <div>Loading...</div> : <Results data={data} />}
    </SearchEngineConatiner>
  );
};

export default SearchEngine;
