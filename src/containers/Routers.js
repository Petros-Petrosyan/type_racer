import React from 'react';

// router
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

// containers
import {
    History,
    TypeRacer,
} from '.';


const Routers = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={TypeRacer} />
                <Route exact path='/history' component={History} />
            </Switch>
        </HashRouter>
    );
};


export { Routers };