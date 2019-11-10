import React from 'react';
import { AboutPage, HomePage } from './pages'
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:about" component={AboutPage} />

      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
