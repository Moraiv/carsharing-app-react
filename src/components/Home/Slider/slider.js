import './slider.scss'
import React from "react";
import leftArrow from '../../../assets/left-arrow.svg'
import rightArrow from '../../../assets/right-arrow.svg'

const Slider = () => {

    return (
        <aside className='slider-container slider-container'>
            <section className='slider-container__step-left'>
                <img className='slider-container__arrow' src={leftArrow} alt='arrow left'/>
            </section>
            <section className='slider-text' >
Заглушка
            </section>

            <section className='slider-container__step-right'>
                <img className='slider-container__arrow' src={rightArrow} alt='arrow right'/>
            </section>
        </aside>
    );
}

export default Slider;
