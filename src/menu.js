import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

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
                <li><a href="index.html"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                <li><a href="about.html"><i class="far fa-question-circle"></i>About</a></li>
                <li><a href="contact.html"><i class="far fa-envelope"></i>Contact</a></li>
            </ul>
        </div>
    </React.Fragment>
    )

  }
}

export default Menu;
