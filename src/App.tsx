import React from 'react';
import { AboutPage, HomePage, ProjectsPage } from './pages'
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />

        <Route component={() => <Redirect to="/" />} />
      </Switch>
  );
}

export default App;
