import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./layouts/ErrorBoundary/ErrorBoundary";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
