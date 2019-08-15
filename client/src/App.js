import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import history from "./history";
import Family from "./components/Family";
import FamDetail from "./components/FamDetail";
import Episode from "./components/Episode";

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Family} />
          <Route exact path="/fam/:id" component={FamDetail} />
          <Route exact path="/show" component={Episode} />
          <Route component={Family} />
        </Switch>
      </Router>
    );
  }
};
export default App;
