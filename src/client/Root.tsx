import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';


const Root: React.FC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <App></App>
        </Switch>
    </BrowserRouter>
);

export default Root;
