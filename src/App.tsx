import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { AboutPage, HomePage, ProjectsPage } from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
