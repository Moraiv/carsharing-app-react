import React from "react";
import Sider from "./Sider/sider";
import location from '../../assets/location-icon.svg'
import './home.scss'


//second block --> Slider component

const Home = () => {
    return (
        <>
            <Sider/>
            <main className='content'>
                <article className='content__block content__block_first'>
                    <section className='content__header'>
                        <p className='content__header-text'>
                            Need for drive
                        </p>
                        <p className='content__header-location-text'>
                            <img src={location} alt='location' className='content__header-logo'/>Ульяновск
                        </p>
                    </section>
                    <section className='content__hero'>
                        <h1 className='content__hero-title'>Каршеринг</h1>
                        <h2 className='content__hero-name'>Need for drive</h2>
                        <p className='content__hero-subtitle'>Поминутная аренда авто твоего города</p>
                        <a href="#" className="content__hero-link">Забронировать</a>
                    </section>
                </article>
                <footer className='content__footer'>
                    <p className='content__footer-text content__footer-text_left'>© 2016-2021 «Need for drive»</p>
                    <a href='#'><p className='content__footer-text content__footer-text_right'>8 (495) 234-22-44</p></a>
                </footer>
                <article className='content__block content__block_second'>
ЗАГЛУШКА
                </article>
            </main>
        </>
    );
}

export default Home;
