import React from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

// Import pages
import App from './App';
import Team from './Team';
import Signup from './Signup';




function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/team" component={Team}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
