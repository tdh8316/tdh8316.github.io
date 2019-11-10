import React from 'react';
import { AboutPage, HomePage } from './pages'
import './App.css';
import { Route } from 'react-router';


const App: React.FC = () => {
  return (
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
