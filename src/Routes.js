// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Login from './pages/login/';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
        {/*<Route path="/teamtime" component={About} />
        <Route path="*" component={NotFound} />*/}
    </Router>
);

export default Routes;