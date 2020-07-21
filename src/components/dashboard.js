import React from 'react';
import logo from '../svg/dashboard.svg';
import '../css/App.css';
import Menu from "./menu"

class Dashboard extends React.Component {

  render() {
    return (
    <React.Fragment>
      <Menu />
      <div className="App">
        <header className="App-header">

            <h1>Dashboard</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to the dashboard
            </p>
        </header>
        
      </div>
    </React.Fragment>
    )

  }
}

export default Dashboard;
