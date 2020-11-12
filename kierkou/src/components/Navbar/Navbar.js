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
                <h1 className="Navbar-logo"><img className="logo" src={"https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg"} height="40" /> </h1>
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
                <div className="navbtn" style={{color:"#fff"}}>
                    
                    <Button> <label className="post">Post A Job </label></Button>
                </div>

            </nav>


        )
    }
}

