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
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/chat" component={Chat} />
            <Route component={_404page} />
        </Switch>
    </Router>, 
    document.getElementById("root")
)
