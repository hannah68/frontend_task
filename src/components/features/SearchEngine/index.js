import { useEffect, useState } from "react";
import { getSearchData } from "../../../services";
import { SearchEngineConatiner, Title } from "./styles";

import Search from "./Search";
import Results from "./Results";
import Filters from "./Filters";

const SearchEngine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPageData();
  }, []);

  const getPageData = () => {
    setData(getSearchData());
  };

  return (
    <SearchEngineConatiner>
      <Title>
        <h1>AI-Powered Regulatory Search</h1>
        <p>Use the search engine to search for publications from courts and regulators.</p>
      </Title>
      <Search />
      <Filters />
      <Results />
    </SearchEngineConatiner>
  );
};

export default SearchEngine;
