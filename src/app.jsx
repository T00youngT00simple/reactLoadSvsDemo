import React from 'react';
import {Route, Router, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import LoadSvs from '../imports/pages/loadSvs';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <Route path="/" component={LoadSvs}/>
        </div>
    </Router>
);