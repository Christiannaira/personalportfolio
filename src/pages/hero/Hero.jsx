import React from 'react';
import TypeIt from 'typeit-react';

import './hero.css';

import Projects from '../../components/projects/Projects';
import Navigation from '../../components/navigation/Navigation';
import Services from '../../components/services/Services';
import About from '../../components/about/About';

const Hero = () => {
    return (

        <>
            <Navigation />
            <section className="hero" id="hero">

                <div className="main-hero-content">

                    <div className="hero-content container-fluid-md  ">

                        <span className="hero-greet">Hi there!</span>
                        <h1 className='hero-fullname'>
                            <TypeIt options={{
                                waitUntilVisible: true,
                                speed: 90,
                            }}>
                                I'm Christian Naira
                            </TypeIt>
                        </h1>
                        <p className="hero-title">
                            <TypeIt
                                className="hero-title-type"
                                options={{
                                    waitUntilVisible: true,
                                    speed: 90,
                                    loop: true,
                                }}
                                getBeforeInit={(instance) => {
                                    instance.type("Full-Stack Developer").pause(750).delete(20).pause(500).type("Web Designer").pause(750).delete(12).pause(750).type('Full-Stack Developer | Web Designer')

                                    // Remember to return it!
                                    return instance;
                                }}

                            >
                            </TypeIt>
                        </p>
                        <p className="hero-value-des">
                            I help start-ups to bring their businesses online by <br />
                            building <span>clean and converting landing pages.</span>
                        </p>

                        <div className="hero-main-button d-flex align-items-center">
                            <button className="btn btn-dark hero-btn">Book A Free Consultation</button>

                            <div className="hero-social-links d-flex align-items-center gap-2">

                                <a href=""><i class='bx bxl-linkedin-square'></i></a>
                                <a href=""><i class='bx bxl-github' ></i></a>
                                <a href=""><i class='bx bxl-facebook-square' ></i></a>
                                <a href=""><i class='bx bxl-dribbble' ></i></a>

                            </div>

                        </div>

                    </div>



                </div>

            </section>

            <Projects />
            <Services />
            <About />
        </>
    )
}

export default Hero
