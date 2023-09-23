import React, { useState, useEffect } from 'react';
import './navigation.css'

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false);

    const handleClick = () => {

        alert("hello")

    }

    return (
        <>

            <section className="navigation" id="navigation">

                <div className="navigation-main-content">

                    <div className="navigation-content">

                        <div className="navigation-links">
                            <div className="logo">
                                logo
                            </div>

                            <div className="navigation-list">

                                <a href="#home">home</a>
                                <a href="#about">about</a>
                                <a href="#projects">projects</a>
                                <a href="#services">services</a>
                                <a href="#contact">contact</a>

                            </div>
                        </div>

                    </div>

                    <div className="navigation-menu" onClick={() => (
                        handleClick()
                    )}>
                        <div className="menu menu1"></div>
                        <div className="menu menu2"></div>
                        <div className="menu menu3"></div>
                    </div>

                </div>

            </section >

        </>
    )
}

export default Navigation
