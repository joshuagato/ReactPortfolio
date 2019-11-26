import React, { Component } from 'react';
import './Welcome.scss';

import ImageGallery from 'react-image-gallery';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';

import Typed from 'react-typed';  // and this one works for the react way


class Welcome extends Component {

    render() {

        const images = [
            { original: slide1 },
            { original: slide2 }
          ];

        return (
            <div id="slides">

                <div className="overlay"></div>
                
                <div className="slides-container">
                    
                    <ImageGallery items={images} autoPlay showThumbnails={false} showPlayButton={false} showFullscreenButton={false} slideInterval={5000} />
                    
                </div>

                <div className="title-message">
                    <div className="heading">
                        <p className="main">JOSHUA GATO</p>
                        <p className="sub typed">
                            <Typed
                                strings={['FullStack Web Developer.', 'Passionate Technology Student...']}
                                    typeSpeed={100}
                                    startDelay={1000}
                                    showCursor
                                    loop >
                            </Typed>
                        </p>
                    </div>
                </div>

                
                <nav className="slides-navigation">
                    {/* <a href="#" className="next"></a>
                    <a href="#" className="prev"></a> */}
                </nav>

            </div>
        );
    }
}

export default Welcome;
