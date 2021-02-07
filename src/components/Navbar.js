import React, { Component } from 'react'
import logo from '../resources/images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import Brightness2Icon from '@material-ui/icons/Brightness2';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <MenuIcon/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav": "nav-links"}>
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                        <a href=" ">
                            <Brightness2Icon/>
                        </a>
                    </ul>
                </div>
            </nav>
        )
    }
}

//5:28:35
