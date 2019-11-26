import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import phone from '../../assets/icons/phone.png';


class Navigation extends Component {

    toggle = () => {

        var mobileNav = document.querySelector('.nav-button');
        
        mobileNav.classList.contains('change') ? mobileNav.classList.remove('change') : mobileNav.classList.add('change');
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg fixed-top nav-menu">
                <NavLink to="#" className="navbar-brand text-uppercase brand-name">Joshua Gato</NavLink>
                
                <button onClick={this.toggle} className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#the-navbar">
                    <div className="bg-light line1"></div>
                    <div className="bg-light line2"></div>
                    <div className="bg-light line3"></div>
                </button>
                <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="the-navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-2 menu-item">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-2 menu-item">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-2 menu-item">Statistics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-2 menu-item">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-2 menu-item">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link mx-2 menu-item">
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/joshua.gato.5074"><img src={facebook} alt="facebook" /></a>
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="https://twitter.com/joshuagato2"><img src={twitter} alt="twitter" /></a>
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="https://github.com/joshuagato"><img src={github} alt="github" /></a>
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-gato-b9581a192/"><img src={linkedin} alt="linkedin" /></a>
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+233202677472"><img src={whatsapp} alt="whatsapp" /></a>
                                <a className="icons mx-2" target="_blank" rel="noopener noreferrer" href="tel: +233202677472"><img src={phone} alt="phone" /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;