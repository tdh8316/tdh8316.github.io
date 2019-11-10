import React from 'react';
import {AboutPage, HomePage} from './pages'
import './App.css';
import { Route } from 'react-router';


const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
    </div>
  );
}

export default App;
