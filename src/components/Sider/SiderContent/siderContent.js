import React from "react";
import './siderContent.scss'
import {linkText, icons} from "../../../store/store";

const SiderContent = () => {

    return (
        <section className='burger-menu-container'>
            <nav className='burger-menu-nav'>
                {linkText.map(item => (
                <li className='burger-menu-nav__menu-element'>
                    <a href='#' className='burger-menu-nav__link'>{item}</a>
                </li>
                    ))}
            </nav>
            <section className='burger-menu-icons'>
                {icons.map(item => (
                    <a href='#' className='burger-menu-icons__item'>{item}</a>
                    ))}
            </section>
        </section>
    )
}

export default SiderContent