import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useReducer, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import SearchPage from "./components/pages/Search.js";
import { theme } from "./theme";
import { StoreContext, initialState, rootReducer } from "./store.js";

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

export default App;
