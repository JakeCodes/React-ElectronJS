import React from "react"
import Logo from "../svg/chat.svg"
import Menu from "./menu"
import "../css/App.css"


class Chat extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className="all">
                    <h1>Chat</h1>
                    <p>A place to chat!</p>
                    <img className="App-logo" width="275" src={Logo} alt=""/>
                </div>
            </React.Fragment>
        )
    }

}
export default Chat