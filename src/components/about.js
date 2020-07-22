import React from "react"
import Logo from "../svg/team.svg"
import "../css/App.css"
import Menu from "./menu"


class About extends React.Component {
     render() {
        return (
            <React.Fragment>
                <Menu />
                <div className="all">
                    <h1>About Me</h1>
                    <p>I am Jane Doe welcome to the about page!</p>
                    <img className="App-logo" width="275" src={Logo} alt=""/>
                </div>
            </React.Fragment>
        )
    }
}

export default About