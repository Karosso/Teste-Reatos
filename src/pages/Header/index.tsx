import React from 'react';

import './styles.css'

function Header() {
    return (
        <div id="header">
            <div className="logo">
                <h1>.mynx</h1>
            </div>

            <div className="buttons">
                <a className="active" href="#">
                    <h5>DEMOS</h5>
                    <p>.</p>
                </a>

                <a href="#">
                    <h5>PAGES</h5>
                    <p>.</p>
                </a>

                <a href="#">
                    <h5>ELEMENTS</h5>
                    <p>.</p>
                </a>

                <a href="#">
                    <h5>BLOG</h5>
                    <p>.</p>
                </a>

                <a href="#">
                    <h5>CONTACTS</h5>
                    <p>.</p>
                </a>
            </div>

        </div>
    )
}

export default Header;