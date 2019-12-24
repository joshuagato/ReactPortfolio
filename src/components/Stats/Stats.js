import React, { Component } from 'react';
import './Stats.scss';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import Stat from './Stat/Stat';

export class Stats extends Component {
    render() {
        return (
            <div id="stats" className="stats-section">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12">
                            <div className="heading">
                                <h2>STATISTICS</h2>
                            </div>
                        </div>
                        
                        <Stat title="Year Experience" number={1} icon={faClock} />
                        <Stat title="Clients" number={0} icon={faArchive} />
                        <Stat title="Websites" number={5} icon={faCloud} />
                        <Stat title="Desktop Apps" number={3} icon={faBolt} />
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;
