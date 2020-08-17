import React from 'react';

import dateIcon from '../../assets/images/date-icon.png'
import personIcon from '../../assets/images/person-icon.png'
import localIcon from '../../assets/images/local-icon.png'

import './styles.css'

function LatestNews() {
    return (
        <div id="latest-news">
            <h1>Read Our Latest News</h1>

            <header className="latest-news-header">
                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>

                <button>Latest Posts</button>
            </header>


            <main className="latest-news-main">
                <div className="latest-news-person">
                    <div className="latest-news-person-img"></div>

                    <div className="latest-news-schedule">
                        <div className="schedule-info">
                            <img src={dateIcon} alt=""/>
                            <h5>03 May 2018</h5>
                        </div>
                        <div className="schedule-info">
                            <img src={personIcon} alt=""/>
                            <h5>Olive Steele</h5>
                        </div>
                    </div>

                    <h2>5 Reasons To Choose A Notebook Over A Computer Desktop</h2>

                    <footer className="latest-news-person-footer">
                        <div className="footer-city">
                            <img src={localIcon} alt=""/>
                            <h5>women, only</h5>
                        </div>
                        <h5>Read more</h5>
                    </footer>
                </div>

                <div className="latest-news-person">
                    <div className="latest-news-person-img"></div>

                    <div className="latest-news-schedule">
                        <div className="schedule-info">
                            <img src={dateIcon} alt=""/>
                            <h5>03 May 2018</h5>
                        </div>
                        <div className="schedule-info">
                            <img src={personIcon} alt=""/>
                            <h5>Olive Steele</h5>
                        </div>
                    </div>

                    <h2>Cleaning And Organizing Your Computer</h2>

                    <footer className="latest-news-person-footer">
                        <div className="footer-city">
                            <img src={localIcon} alt=""/>
                            <h5>women, only</h5>
                        </div>
                        <h5>Read more</h5>
                    </footer>
                </div>
            </main>

        </div>
    )
}

export default LatestNews;