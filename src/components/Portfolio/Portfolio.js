import React, { Component } from 'react';
import './Portfolio.scss';
import $ from 'jquery';
import Isotope from 'isotope-layout';

// import ucomso from '../../assets/images/portfolio/thumbnail/ucomso-thumbail.png';

class Portfolio extends Component {

    onFilterChange = (newFilter) => {
        
        if (this.iso === undefined) {
          this.iso = new Isotope('#filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows'
          });
        }

        $("#filters .current").removeClass("current");
        $('.' + newFilter).addClass("current");

        if(newFilter === 'all') {
          this.iso.arrange({ filter: `*` });
        }

        else {
          this.iso.arrange({ filter: `.${newFilter}` });
        }
    }

    render() {
        return (
            <div id="portfolio" className="portfolio-section">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <div className="heading">
                                <h2>PORTFOLIO</h2>
                            </div>
                        </div>

                        <div className="filter">
                            <ul id="filters">

                                <li><span className="all current" data-filter="*" onClick={() => {this.onFilterChange("all")}}>ALL</span></li>
                                <li><span className="webs" onClick={() => {this.onFilterChange("webs")}}>FULLSTACK</span></li>
                                <li><span className="vue" onClick={() => {this.onFilterChange("vue")}}>VUE.JS APPS</span></li>
                                <li><span className="react" onClick={() => {this.onFilterChange("react")}}>REACT.JS APPS</span></li>

                            </ul>
                        </div>

                        <div className="items-container">
                            <ul id="filter-container">


                                {/* <li className="filter-item webs col-md-4 col-lg-3 mb-4 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={ucomso} alt="" />

                                        <div className="icons">

                                            <a className="open-button" target="_blank" rel="noopener noreferrer" href="http://joshuagato.unaux.com/ucomso/" title="View App">
                                                <i className="fab fa-internet-explorer"></i>
                                            </a>

                                            <a className="project-link" href="https://gitlab.com/jgato37/ucomso" title="View Code" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-gitlab"></i>
                                            </a>

                                        </div>

                                        <div className="image-overlay"></div>

                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-white">Ucomso Forum</h3>
                                            </div>
                                            <div className="card-subtitle">
                                                <p className="text-light">This is the web app part of my project work back in University.</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-light">Used: HTML, CSS, JS, PHP, BS, JQ</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="filter-item vue col-md-4 col-lg-3 mb-4 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={ucomso} alt="" />

                                        <div className="icons">

                                            <a className="open-button" target="_blank" rel="noopener noreferrer" href="http://joshuagato.unaux.com/ucomso/" title="View App">
                                                <i className="fab fa-internet-explorer"></i>
                                            </a>

                                            <a className="project-link" href="https://gitlab.com/jgato37/ucomso" title="View Code" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-gitlab"></i>
                                            </a>

                                        </div>

                                        <div className="image-overlay"></div>

                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-white">Ucomso Forum</h3>
                                            </div>
                                            <div className="card-subtitle">
                                                <p className="text-light">This is the web app part of my project work back in University.</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-light">Used: HTML, CSS, JS, PHP, BS, JQ</p>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}


                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
