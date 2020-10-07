import React from "react";
import Login from "./Components/Login/Login";
import "bulma/css/bulma.css";
// import './@fortawesome/react-fontawesome'
import "./App.css";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Award from "./Components/Award/Award";
import Review from "./Components/Review/Review";
import RegisterUser from "./Components/Register/RegisterUser";
import Home from "./Components/Home/Home";
import { createBrowserHistory } from "history";
import DocentesBody from "./Components/Home/Docentes";
// import AulaVirtual from "./Components/Home/AulaVirtual";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Register">
            <RegisterUser />
          </Route>
          <Route path="/Award">
            <Award />
          </Route>
          <Route path="/Review">
            <Review />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Docentes">
            <DocentesBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
