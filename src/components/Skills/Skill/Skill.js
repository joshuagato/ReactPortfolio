import React, { Component } from 'react';

import $ from 'jquery';
import '../../../assets/vendors/easypiechart/jquery.easypiechart.min.js';

class Skill extends Component {

    componentDidMount() {
        var skillsTopOffset = $(".skills-section").offset().top;

        $(window).scroll(function() {

            if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

                $(".chart").easyPieChart({
                    // animate:{
                    //     duration:1000,
                    //     enabled:true
                    // },
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: true,
                    scaleColor: true,
                    lineWidth: 4,
                    size: 152,
                    // lineCap:'circle',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
    }

    render() {
        return (
            <div className="skill">
                <span className="chart" data-percent={this.props.perc}>
                    <span className="percent">{this.props.perc}</span>
                    <canvas height="152" width="152"></canvas>
                </span>
                <h4>{this.props.name}</h4>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default Skill;
