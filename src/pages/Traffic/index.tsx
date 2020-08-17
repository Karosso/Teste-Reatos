import React from 'react';

import googleImg from '../../assets/images/top-image.png'
import opheliaImg from '../../assets/images/ophelia.jpg'
import pinkDotsImg from '../../assets/images/pink-dots.png'
import pathImg from '../../assets/images/path-background.png'

import anchoreIcon from '../../assets/images/anchore-icon.png'
import headsetIcon from '../../assets/images/headset-icon.png'
import playIcon from '../../assets/images/play-icon.png'
import studyIcon from '../../assets/images/study-icon.png'
import universityIcon from '../../assets/images/university-icon.png'
import vectorIcon from '../../assets/images/vector-icon.png'

import lineStripesIcon from '../../assets/images/footer-image.png'

import './styles.css'

function Traffic() {
    return (
        <div id="traffic">
            <header className="traffic-header">
                <div className="traffic-text">
                    <div className="title-subtitle">
                        <h1>Be on the Top &</h1>
                        <h1>Get More Traffic to Your Website</h1>
                        <p>No good interviewer expects you to know everything. The problem is, you’re not always going to be interviewed by someone who’s good at it.</p>
                    </div>

                    <div className="statistic">
                        <div className="clients">
                            <h3>7500</h3>
                            <h5>Happy clients</h5>
                            <p>Organically grow the holistic world view of disruptive innovation via workplace diversity.</p>
                        </div>

                        <div className="projects">
                            <h3>32</h3>
                            <h5>Finishedprojects</h5>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                        </div>
                    </div>
                </div>

                <div className="traffic-image">
                    <img src={googleImg} alt="Woman"/>
                </div>
            </header>

            <main className="traffic-main">
                <div className="seo-text">
                    <h1>Check your Website’s SEO and Google page rank</h1>
                    <div className="seo-data">
                        <img src={opheliaImg} alt="Ophelia"/>
                        <div className="seo-data-text">
                            <h5>SEO specialist</h5>
                            <h4>Ophelia Hanson</h4>
                        </div>
                    </div>
                </div>

                <img src={pinkDotsImg} alt="" className="pink-dots"/>

                <form className="seo-inputs">
                    <input name="name" placeholder="   Name"/>
                    <input name="email" placeholder="   Email"/>
                    <input name="input" placeholder="   Input"/>
                    <button type="submit">Submit Form</button>
                </form>
            </main>

            <footer className="traffic-footer">

                <img src={pathImg} alt="" className="path-background"/>

                <div className="traffic-footer-items">
                    
                    <div className="traffic-footer-item">
                        <img src={anchoreIcon} alt="Anchore"/>  
                        <div>
                            <h1>Onsite SEO</h1>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide.</p>
                        </div>
                    </div>

                    <div className="traffic-footer-item">
                        <img src={headsetIcon} alt="Headset"/>
                        <div>
                            <h1>Penalty Recovery</h1>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate.</p>
                        </div>
                    </div>

                    <div className="traffic-footer-item">
                        <img src={playIcon} alt="Play Image"/>
                        <div>
                            <h1>Technical SEO Audit</h1>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
                        </div>
                    </div>

                    <div className="traffic-footer-item">
                        <img src={studyIcon} alt="Study Image"/>
                        <div>
                            <h1>Inphographics Content</h1>
                            <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing.</p>
                        </div>
                    </div>

                    <div className="traffic-footer-item">
                        <img src={universityIcon} alt=" University"/>
                        <div>
                            <h1>MEdia Promotion</h1>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
                        </div>
                    </div>

                    <div className="traffic-footer-item">
                        <img src={vectorIcon} alt="Vector"/>
                        <div>
                            <h1>Reporting & Analysis</h1>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.</p>
                        </div>
                    </div>
                </div>

            </footer>

            <img src={lineStripesIcon} alt="Line Division" className="line-stripes-traffic"/>    
        </div>
    )
}

export default Traffic;