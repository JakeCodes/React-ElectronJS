import React from "react"
import "../css/App.css"
import Menu from "./menu"
import { Link } from "react-router-dom"


class _404 extends React.Component {
     render() {
        return (
            <React.Fragment>
                <Menu />
                <div className="about">
                    <h1>404 Page Not Found</h1>
                    <Link to="/">Go back to Dashboard</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default _404