import React from 'react';

import lineStripesIcon from '../../assets/images/footer-image.png'

import smallPolygonIcon from '../../assets/images/small-polygon-icon.png'
import mediumPolygonIcon from '../../assets/images/medium-polygon-icon.png'
import largePolygonIcon from '../../assets/images/large-polygon-icon.png'

import bestOfferImg from '../../assets/images/best-offer-image.png'

import vIcon from '../../assets/images/v-icon.png'
import xIcon from '../../assets/images/x-icon.png'
import checkIcon from '../../assets/images/check-icon.png'

import './styles.css'

function PricePlans() {
    return (
        <div id="price-plans">
            <h1 className="price-plans-title">Pricing plans for SEO</h1>
            <p className="price-plans-subtitle">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>

            <div className="polygon-icons">
                <img src={smallPolygonIcon} alt="" className="small-polygon-icon"/>  
                <img src={mediumPolygonIcon} alt="" className="medium-polygon-icon"/>    
                <img src={largePolygonIcon} alt="" className="large-polygon-icon"/>      
            </div>

            <div className="price-plans-cards">
                <div className="card">
                    <header className="card-header-image">
                        <img src={bestOfferImg} alt=""/>
                    </header>

                    <main className="card-main">
                        <div className="card-main-item">
                            <img src={checkIcon} alt=""/>
                            <h4>Marketing strategy</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={checkIcon} alt=""/>
                            <h4>Competitive analysis</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={checkIcon} alt=""/>
                            <h4>Build roadmaps</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} className="card-main-item-x" alt=""/>
                            <h4 className="card-main-item-unchecked">Product training</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} className="card-main-item-x" alt=""/>
                            <h4 className="card-main-item-unchecked">Monthly reporting</h4>
                        </div>

                        <button className="card-main-button">Get started</button>
                    </main>
                </div>

                <div className="card">
                    <header className="card-header">
                        <h5>Any Two days</h5>
                        <h1>€  26</h1>
                        <h4>Billed monthly</h4>
                    </header>

                    <main className="card-main">
                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Marketing strategy</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Competitive analysis</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Build roadmaps</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} alt=""/>
                            <h4 className="card-main-item-unchecked">Product training</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} alt=""/>
                            <h4 className="card-main-item-unchecked">Monthly reporting</h4>
                        </div>

                        <button className="card-main-button">Get started</button>
                    </main>
                </div>

                <div className="card">
                    <header className="card-header">
                        <h5>Entire event</h5>
                        <h1>€  59</h1>
                        <h4>Billed monthly</h4>
                    </header>

                    <main className="card-main">
                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Marketing strategy</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Competitive analysis</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={vIcon} alt=""/>
                            <h4>Build roadmaps</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} alt=""/>
                            <h4 className="card-main-item-unchecked">Product training</h4>
                        </div>

                        <div className="card-main-item">
                            <img src={xIcon} alt=""/>
                            <h4 className="card-main-item-unchecked">Monthly reporting</h4>
                        </div>

                        <button className="card-main-button">Get started</button>
                    </main>
                </div>
            </div>

            <div className="price-retangles">
                <div className="retangle"></div>
                <div className="retangle"></div>
                <div className="retangle"></div>
                <div className="retangle"></div>
                <div className="retangle"></div>
                <div className="retangle"></div>
            </div>

            <img src={lineStripesIcon} alt="Line Division" className="line-stripes-price-plans"/>    
        </div>
    )
}

export default PricePlans;