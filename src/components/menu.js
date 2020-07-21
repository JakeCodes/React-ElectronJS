import React from 'react';
import '../css/Menu.css';
import { Link } from "react-router-dom"
import "../css/all.min.css"

class Menu extends React.Component {

  render() {
    return (
    <React.Fragment>
        <input type="checkbox" id="check"/>

        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>

        <div class="sidebar">
        <header>Epix Codes</header>
            <ul>
                <li><Link to="/"><i class="fas fa-qrcode"></i>Dashboard</Link></li>
                <li><Link to="/chat"><i class="fas fa-comment"></i>Chat</Link></li>
                <li><Link to="/about"><i class="far fa-question-circle"></i>About</Link></li>
                <li><Link to="/contact"><i class="far fa-envelope"></i>Contact</Link></li>
            </ul>
        </div>
    </React.Fragment>
    )

  }
}

export default Menu;
