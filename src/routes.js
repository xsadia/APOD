import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Appod from './pages/Appod';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/app' component={Appod} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;