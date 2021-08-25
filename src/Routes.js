import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Estado from './pages/Estado';
import Municipio from './pages/Municipio';
import Distrito from './pages/Distrito';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Estado} />
                <Route path="/municipio"  component={Municipio} />
                <Route path="/distrito"  component={Distrito} />
            </Switch>
        </BrowserRouter>
    );
}