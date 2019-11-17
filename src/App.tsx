import React from 'react';
import { HomePage } from './pages'
import { Route, Redirect, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
