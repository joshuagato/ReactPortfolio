import React, { Component } from 'react';
import './About.scss';

import about from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';

export class About extends Component {
    render() {
        return (
            <div id="about" className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="heading">
                                <h2>ABOUT ME</h2>
                            </div>

                            <div id="accordion">
                                <div className="card">

                                    <div className="card-header">
                                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseOne">
                                            <img src={about} width="50" className="mr-3 rounded" alt="about" />
                                            <span>Click here</span>
                                        </button>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="row">
                                                {/* <div className="col-md-3 mr-md-3"> */}
                                                <div className="col-md-2">
                                                    <img src={about2} width="220" className="rounded" alt="about" />
                                                    {/* <img src={about2} width="220" className="rounded" alt="about" /> */}
                                                </div>
                                                <div className="col-md-10">
                                                    <p>
                                                        Hi there! I'm Joshua Gato. I have a few years experience creating Java apps and websites for both myself,
                                                        and for loved ones. I program in Java, Javascript and PHP, however, some of my favourite projects involve
                                                        working in EcmaScript6 for Vue.js and Object-oriented (modular) PHP for Laravel.
                                                    </p>
                                                    <p>
                                                        I graduated from University of Cape Coast, Ghana with a second class upper in Information Technology
                                                        and spent all the days after my one year mandatory service to the nation self-studying hard-coding
                                                        web-development. I'm still learning, working on projects. Thanks for spending time to read my long essay.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;