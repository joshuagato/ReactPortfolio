import React, { Component } from 'react';
import './Footer.scss';

import '../../assets/vendors/js-socials/jssocials-theme-minima.css';
// import '../../assets/vendors/js-socials/jssocials-theme-plain.css';
// import '../../assets/vendors/js-socials/jssocials-theme-flat.css';
// import '../../assets/vendors/js-socials/jssocials-theme-classic.css';
import '../../assets/vendors/js-socials/jssocials.css';
import '../../assets/vendors/js-socials/jssocials';
import $ from 'jquery';

class Footer extends Component {

    state = {
        year: new Date().getFullYear()
    }

    componentDidMount() {
        $("#share").jsSocials({
            shares: ["email", "twitter", "facebook", "linkedin", "whatsapp"],
            url: "https://joshuagato.github.io/",
            text: "Joshua Gato's Portfolio Website",
            showLabel: false,
            showCount: true,
            shareIn: "blank",
            setDefaults: {
                showLabel: false,
                showCount: true
            }
        });
    }


    render() {
        return (
            <div id="copyright" className="copyright-section">

                <div className="col-md-12 text-center">

                    <p>Built by Joshua Gato, {this.state.year}</p>
                    <p className="react">Using &copy; React 16</p>

                    <p><span>SHARE ON </span><span id="share"></span></p>

                </div>

            </div>
        );
    }
}

export default Footer;
