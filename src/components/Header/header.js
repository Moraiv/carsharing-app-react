import location from "../../assets/location-icon.svg";
import React from "react";
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <p className='header__text'>
                Need for drive
            </p>
            <p className='header__location-text'>
                <img src={location} alt='location' className='header__logo'/>Ульяновск
            </p>
        </header>)
}

export default Header
