import "./App.css";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
