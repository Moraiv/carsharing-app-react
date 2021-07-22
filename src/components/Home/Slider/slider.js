import './slider.scss'
import React, {useEffect, useState} from "react";
import leftArrow from '../../../assets/left-arrow.svg'
import rightArrow from '../../../assets/right-arrow.svg'

const Slider = () => {
    const [step, setStep] = useState(1)
    const [sliderClass, setSliderClass] = useState('__first')

    useEffect(() => {
        switch (step) {
            case 1:
                setSliderClass('__first')
                break
            case 2:
                setSliderClass('__second')
                break
            case 3:
                setSliderClass('__third')
                break
            case 4:
                setSliderClass('__fourth')
                break
            default:
                setSliderClass('__first')
        }
    }, [step])

    const stepLeft = () => {
        if (step > 1) {
            setStep(step - 1)
        } else {
            setStep(4)
        }
        setSliderClass('__first')
    }

    const stepRight = () => {
        if (step < 4) {
            setStep(step + 1)
        } else {
            setStep(1)
        }
    }

    const setSliderText = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h1 className='slider-text__title'>Бесплатная парковка</h1>
                        <p className='slider-text__subtitle'>
                            Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
                            также в аэропортах.
                        </p>
                    </>
                );
            case 2:
                return (
                    <>
                        <h1 className='slider-text__title'>Страховка</h1>
                        <p className='slider-text__subtitle'>
                            Полная страховка автомобиля
                        </p>
                    </>
                );
            case 3:
                return (
                    <>
                        <h1 className='slider-text__title'>Бензин</h1>
                        <p className='slider-text__subtitle'>
                            Полный бак на любой заправке города за наш счёт
                        </p>
                    </>
                );
            case 4:
                return (
                    <>
                        <h1 className='slider-text__title'>Обслуживание</h1>
                        <p className='slider-text__subtitle'>
                            Автомобиль проходит еженедельное ТО
                        </p>
                    </>
                );
            default:
                return (
                    <>
                        <h1 className='slider-text__title'>Бесплатная парковка</h1>
                        <p className='slider-text__subtitle'>
                            Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
                            также в аэропортах.
                        </p>
                    </>
                );
        }
    }

    return (
        <aside className={`slider-container slider-container${sliderClass}`}>
            <section className='slider-container__step-left' onClick={stepLeft}>
                <img className='slider-container__arrow' src={leftArrow} alt='arrow left'/>
            </section>
            <section className='slider-text'>
                {setSliderText()}
                <button className={`slider-text-button slider-text-button${sliderClass}`}>
                    <a className='slider-text__link'>Подробнее</a>
                </button>
            </section>
            <section className='slider-container__step-right' onClick={stepRight}>
                <img className='slider-container__arrow' src={rightArrow} alt='arrow right'/>
            </section>
        </aside>
    );
}

export default Slider;
