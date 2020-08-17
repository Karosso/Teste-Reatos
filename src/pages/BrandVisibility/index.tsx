import React from 'react';

import lineStripesIcon from '../../assets/images/footer-image.png'
import brandVisibilityImg from '../../assets/images/brand-visibility-image.png'

import headsetIcon from '../../assets/images/headset-icon.png'
import bookIcon from '../../assets/images/book-icon.png'
import universityIcon from '../../assets/images/university-icon.png'

import './styles.css'

function BrandVisibility() {
    return (
        <div id="brand-visibility">
            <div className="brand-visibility-content">
                <h1>SEO to Improve Brand Visibility</h1>

                <div className="brand-visibility-content-items">
                    <img src={headsetIcon} alt=""/>
                    <div className="brand-item-text">
                        <h1>SEO Content Strategy</h1>
                        <p>Override the digital divide with additional clickthroughs from DevOps. </p>
                    </div>
                </div>

                <div className="brand-visibility-content-items">
                    <img src={bookIcon} alt=""/>
                    <div className="brand-item-text">
                        <h1>B2B SEO</h1>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test application. </p>
                    </div>
                </div>

                <div className="brand-visibility-content-items">
                    <img src={universityIcon} alt=""/>
                    <div className="brand-item-text">
                        <h1>SEO Conversion</h1>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to override the digital divide.</p>
                    </div>
                </div>
            </div>

            <img src={brandVisibilityImg} alt="Couple Image" className="brand-visibility-image"/>


            <img src={lineStripesIcon} alt="Line Division" className="line-stripes-brand"/>    
        </div>
    )
}

export default BrandVisibility;