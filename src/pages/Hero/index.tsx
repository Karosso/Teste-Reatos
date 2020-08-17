import React from 'react';

import polygonBackgroundImg from '../../assets/images/polygon.png'
import polygonBackgroundLightImg from '../../assets/images/polygon-2.png'
import coupleImg from '../../assets/images/Imagecouple-img.png'

import whiteCircleIcon from '../../assets/images/white-circle-icon.png'

import lineStripesIcon from '../../assets/images/footer-image.png'
import circleStripesIcon from '../../assets/images/circle-stripes.png'
import squareStripesIcon from '../../assets/images/square-stripes.png'

import './styles.css'

function Hero() {
    return (
        <div id="hero">
            <img src={polygonBackgroundImg} alt="Blue Background" className="polygon"/>
            <img src={polygonBackgroundLightImg} alt="Blue Background" className="polygon-light"/>

            <main className="hero-main">
                <div className="couple-image">
                    <img src={coupleImg} alt="Couple"/>
                </div>

                <div className="hero-text">
                    <h1>
                        Power up your Site Rank in Google
                    </h1>

                    <h3>
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                    </h3>

                    <a href="#" className="button">
                        Start now
                    </a>
                </div>
            </main>
            
            <img src={whiteCircleIcon} alt="" className="circle-hero-main"/>
            <img src={lineStripesIcon} alt="Line Division" className="line-stripes"/>
            <img src={circleStripesIcon} alt="Stripes Circle" className="cicle-stripes"/>
            <img src={squareStripesIcon} alt="Stripes Square" className="square-stripes"/>

        </div>
    )
}

export default Hero;