import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home'


export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}