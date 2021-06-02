import React from 'react'
import './Main.css'
import logo from '../../../assets/logo.png';

const Main = () => {
    return (
        <div className="container-main">
            <img src= {logo}
            width='70%'
            alt='logo'
            />
            <h1>
                ChatBot
            </h1>
        </div>
    )
}

export default Main;
