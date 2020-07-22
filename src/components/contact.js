import React from "react";
import Logo from "../svg/contact.svg";
import Menu from "./menu";
import "../css/App.css";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="all">
          <h1>Contact</h1>
          <p>Phone Number: (605) 475-6968</p>
          <img className="App-logo" width="275" src={Logo} alt="" />
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
