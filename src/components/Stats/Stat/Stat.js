import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stat = (props) =>  (

    <div className="col-md-3 col-sm-6">
        <div className="square-item">
            
            <div className="square-inner-container">

                <div className="square-icon">
                    <FontAwesomeIcon icon={props.icon} />
                </div>

                <div className="square-content">
                    <h2 className="counter">{props.number}</h2>
                    <h3>{props.title}</h3>
                </div>

            </div>

        </div>
    </div>
    
);

export default stat;