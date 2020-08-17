import React from 'react';

import lineStripesIcon from '../../assets/images/footer-image.png'

import './styles.css'

function Team() {
    return (
        <div id="team">
            <h1>Executive Team</h1>

            <header className="team-header">
                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>

                <button>Vacansies</button>
            </header>

            <main className="team-main">
                <div className="team-person">
                    <div className="team-person-img"></div>
                    <h2>Georgia Gregory</h2>
                    <h3>Technology Officer</h3>
                </div>

                <div className="team-person">
                    <div className="team-person-img"></div>
                    <h2>Rosie Price</h2>
                    <h3>Chief Compliance Officer</h3>
                </div>

                <div className="team-person">
                    <div className="team-person-img"></div>
                    <h2>Callie Stevenson</h2>
                    <h3>Chief Operating Officer</h3>
                </div>

                <div className="team-person">
                    <div className="team-person-img"></div>
                    <h2>Julia Wade</h2>
                    <h3>Chief Operating Officer</h3>
                </div>
            </main>

            <img src={lineStripesIcon} alt="Line Division" className="line-stripes-team"/>    
        </div>
    )
}

export default Team;