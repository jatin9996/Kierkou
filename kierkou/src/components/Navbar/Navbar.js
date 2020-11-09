import React from 'react';
import { Button } from "../Button";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

export default class Navbar extends React.Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">Logo<img src={"./"} /> </h1>
                <div className="menu-Icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="navbtn">
                    <Button>Post A Job</Button>
                </div>

            </nav>


        )
    }
}

