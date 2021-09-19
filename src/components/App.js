import Volumes from "../components/Volumes";
import About from "../components/About";
import Author from "../components/Author";
import ErrorPage from "../components/ErrorPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/volumes" component={Volumes} />
        <Route exact path="/author" component={Author} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
