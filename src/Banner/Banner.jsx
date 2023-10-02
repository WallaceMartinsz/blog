import React from 'react';
import './Banner.css';
import bannerImage from '../img/banner.png'; 

function Banner(){
    return(
        <div className="banner">
            <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
    )
}

export default Banner;