import React from 'react';

import ideaImg from '../../assets/images/idea-image.png'
import researchImg from '../../assets/images/research-image.png'
import projectImg from '../../assets/images/project-image.png'
import lineStripesImg from '../../assets/images/line-stripes.png'
import lineStripesIcon from '../../assets/images/footer-image.png'

import './styles.css'

function SiteRank() {
    return (
        <div id="site-rank">
            <div className="site-rank-title">
                <h1>Have You Forgotten</h1>
                <h1>How Good Site rank Tastes?</h1>
                <p>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. Qui ipsorum lingua Celtae, nostra Galli appellantur.</p>
            </div>

            <div className="rank-items">

                <img src={lineStripesImg} alt="" className="line-stripes-background"/>

                <div className="rank-item">
                    <img src={ideaImg} alt="Making Idea Image"/>
                    <h1>Making Idea</h1>
                    <p>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. </p>
                </div>

                <div className="rank-item">
                    <img src={researchImg} alt=" SEO Research Image"/>
                    <h1>SEO research</h1>
                    <p>Non equidem invideo, miror magis posuere velit aliquet. Qui ipsorum lingua Celtae, nostra Galli appellantur. </p>
                </div>

                <div className="rank-item">
                    <img src={projectImg} alt="Launch Project Image"/>
                    <h1>Launch project</h1>
                    <p>Qui ipsorum lingua Celtae, nostra Galli appellantur. Non equidem invideo, miror magis posuere velit aliquet. </p>
                </div>
            </div>

            <img src={lineStripesIcon} alt="Line Division" className="line-stripes-rank"/>

        </div>
    )
}

export default SiteRank;