import React from 'react';

import pathImg from '../../assets/images/path-background.png'

import './styles.css'

function Subscribe() {
    return (
        <div id="subscribe">

            <main className="subscribe-main">

                <h1>Subscribe to our newsletter</h1>

                <form className="subscribe-input">
                    <input name="email" placeholder="   Email"/>
                    <button type="submit">Subscribe</button>
                </form>
            </main>

            <footer className="subscribe-footer">
                <div className="footer-content">
                    <div className="footer-content-item">
                        <h1>Contacts</h1>
                        <h4>New Elsiebury 634 Halvorson Estates Suite 039</h4>
                        <div className="contacts-data">
                            <h2>phone</h2>
                            <h1>8 800 888 80 80</h1>
                        </div>

                        <div className="contacts-data">
                            <h2>skype</h2>
                            <h1>mynx.skype</h1>
                        </div>
                        <div className="contacts-data">
                            <button>Contact us</button>
                            <button>Visit us</button>
                        </div>
                    </div>

                    <div className="footer-content-item">
                        <h1>Popular categories</h1>
                        <div className="popular-categories">
                            <div className="popular-categories-categories">
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                            </div>
                            <div className="popular-categories-categories">
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                                <h2>caret-right</h2>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content-item">
                        <h1>Recent Posts</h1>
                        <h4>28 Aug 2018</h4>
                        <h1>Althusser Competing Interpellations</h1>
                        <h4>21 Feb 2018</h4>
                        <h1>Enlightenment Is Not Just One State</h1>
                    </div>
                </div>

                <div className="footer-logo">
                    <h1>.mynx</h1>
                    <h2>© 2020 All Rights Reserved</h2>
                </div>
            </footer>

            <img src={pathImg} alt="Line Division" className="subscribe-background-image"/>    
        </div>
    )
}

export default Subscribe;