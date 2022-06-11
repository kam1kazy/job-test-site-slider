import React from 'react';

import './HomeSlide.css'

import particleCircle1 from '../../../template/images/circle-1.png'
import particleCircle2 from '../../../template/images/circle-2.png'
import particleCircle3 from '../../../template/images/circle-3.png'
import particleCircle4 from '../../../template/images/circle-4.png'
import particlePink from '../../../template/images/pink-1.png'
import particleWard from '../../../template/images/ward.png'

const HomeSlide = () => {

    return (
        <div className="item item-1">
            <div className="wrapper">
                <div className="container">
                    <span className="subtitle-text">привет,</span>
                    <h1>это <b>не</b> коммерческое задание</h1>
                    <a href="#" className="go-to-next-slide">Что дальше?</a>
                </div>

                <div className="particle particle-1">
                    <img src={particleCircle1} alt=""/>
                </div>
                <div className="particle particle-2">
                    <img src={particleCircle2} alt=""/>
                </div>
                <div className="particle particle-3">
                    <img src={particleCircle3} alt=""/>
                </div>
                <div className="particle particle-4">
                    <img src={particleCircle4} alt=""/>
                </div>
                <div className="particle particle-5">
                    <img src={particlePink} alt=""/>
                </div>
                <div className="particle particle-6">
                    <img src={particleWard} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HomeSlide;