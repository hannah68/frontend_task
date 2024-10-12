import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/Search.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
