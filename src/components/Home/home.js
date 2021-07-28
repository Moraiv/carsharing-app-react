import React from "react";
import Sider from "../Sider/sider";
import './home.scss'
import Slider from "./Slider/slider";
import Header from "../Header/header";

const Home = () => {
    return (
        <>
            <Sider/>
            <main className='content'>
                <article className='content__block content__block_first'>
                    <Header/>
                    <section className='content__hero'>
                        <h1 className='content__hero-title'>Каршеринг</h1>
                        <h2 className='content__hero-name'>Need for drive</h2>
                        <p className='content__hero-subtitle'>Поминутная аренда авто твоего города</p>
                        <button className="content__hero-link">Забронировать</button>
                    </section>
                </article>
                <footer className='content__footer'>
                    <p className='content__footer-text content__footer-text_left'>© 2016-2021 «Need for drive»</p>
                    <a href='tel:+74952342244'><p className='content__footer-text content__footer-text_right'>8 (495) 234-22-44</p></a>
                </footer>
                <article className='content__block content__block_second'>
                    <Slider/>
                </article>
            </main>
        </>
    );
}

export default Home;
