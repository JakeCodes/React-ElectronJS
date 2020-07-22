import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import _404page from "./components/_404"
import Dashboard from "./components/dashboard"
import About from "./components/about"
import Contact from "./components/contact"
import Chat from "./components/chat"

document.title = "Epix Codes"
ReactDOM.render(
    <Router>
        <Switch>
            {/* Pages */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/chat" component={Chat} />

            {/* 404 */}
            <Route component={_404page} />
        </Switch>
    </Router>, 
    document.getElementById("root")
)
