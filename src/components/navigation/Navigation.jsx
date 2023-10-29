import React, { useState, useEffect } from 'react';
import './navigation.css';

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false);
    const [changeNav, setChangeNav] = useState(false);

    const handleClick = () => {

        setOpenNav(!openNav);

    }

    useEffect(() => {

        window.onscroll = () => {

            if (window.scrollY > 100) {
                setChangeNav(true);
            } else {
                setChangeNav(false);
            }

        }

    }, [changeNav])


    return (
        <>

            <section className={changeNav ? "navigation navigation_change" : "navigation"} id="navigation">

                <div className="navigation-main-content">

                    <div className={openNav ? "navigation-content openThisNav" : "navigation-content"}>

                        <div className="navigation-links">
                            <div className="logo">
                                chris.
                            </div>

                            <div className="navigation-list">

                                <a href="#hero" onClick={() => setOpenNav(false)}>home</a>
                                <a href="#about" onClick={() => setOpenNav(false)}>about</a>
                                <a href="#projects" onClick={() => setOpenNav(false)}>projects</a>
                                <a href="#services" onClick={() => setOpenNav(false)}>services</a>
                                <a href="#contact" onClick={() => setOpenNav(false)}>contact</a>

                            </div>
                        </div>

                    </div>

                    <div className={openNav ? "navigation-menu openThisMenu" : "navigation-menu"} onClick={() => (
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
