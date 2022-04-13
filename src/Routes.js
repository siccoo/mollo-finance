

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from "./layouts/home";
import history from "./history";


const AppRoutes = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default AppRoutes;