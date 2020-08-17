import React from 'react';


import Header from '../Header';
import Hero from '../Hero';
import SiteRank from '../SiteRank';
import Traffic from '../Traffic';
import Team from '../Team';
import PricePlans from '../PricePlans';
import BrandVisibility from '../BrandVisibility';
import LatestNews from '../LatestNews';

import './styles.css'

function Landing() {
    return (
        <div id="landing-page">
            <Header/>
            <Hero/>
            <SiteRank/>
            <Traffic/>
            <Team/>
            <PricePlans/>
            <BrandVisibility/>
            <LatestNews/>
        </div>
    )
}

export default Landing;