import React, { Component } from 'react';
import './Skills.scss';

import Skill from './Skill/Skill';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 4,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        938: {
            items: 4
        }
    } 
};

class Skills extends Component {

    render() {
        const description = "Used in most of my web based projects";

        return (
            <div id="skills" className="skills-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="heading text-center">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>A representation of my proficiency in each skill</p>
                            </div>

                            <OwlCarousel className="owl-theme" autoplay loop nav {...options} >
                                <Skill name="HTML" perc="65" desc={description} />
                                <Skill name="CSS" perc="55" desc={description} />
                                <Skill name="BOOTSTRAP" perc="65" desc={description} />
                                <Skill name="SASS/SCSS" perc="65" desc={description} />
                                <Skill name="JAVASCRIPT" perc="50" desc={description} />
                                <Skill name="JQUERY" perc="60" desc={description} />
                                <Skill name="ES 6" perc="50" desc={description} />
                                <Skill name="VUE.JS" perc="50" desc={description} />
                                <Skill name="REACT.JS" perc="55" desc={description} />
                                <Skill name="MYSQL" perc="65" desc={description} />
                                <Skill name="PHP" perc="60" desc={description} />
                                <Skill name="OO-PHP" perc="60" desc={description} />
                                <Skill name="LARAVEL" perc="65" desc={description} />
                                <Skill name="WORDPRESS" perc="50" desc={description} />
                                <Skill name="GIT" perc="65" desc={description} />
                            </OwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skills;
