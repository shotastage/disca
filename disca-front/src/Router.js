import React from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

// Import pages
import App from './App';
import Team from './Team';



function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/team" component={Team}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;