import React, { useEffect } from 'react';
import TypeIt from 'typeit-react';
import './hero.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

    useEffect(() => {
        window.onload = () => {
            AOS.init();
        }
    }, []);

    const handleScrollDown = () => {
        // You can customize this scroll behavior
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (

        <>


            <section className="hero" id="hero">

                <div className="main-hero-content">

                    <div className="hero-content container-fluid-md ">

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
                            I help start-ups to bring their businesses online by
                            building <span>clean and converting landing pages.</span>
                        </p>

                        <div className="hero-main-button">

                            <div className="hero-main-button-content">

                                <a href="https://calendly.com/christiannaira/free-consultation" target='_blank' className="btn btn-dark hero-btn">Book A Free Consultation</a>

                                <div className="hero-social-links d-flex align-items-center gap-2">

                                    <a href="https://www.linkedin.com/in/christian-naira-379b1b283/" target='_blank' data-aos="fade-up" data-aos-duration="400"><i className='bx bxl-linkedin-square'></i></a>

                                    <a href="https://github.com/Christiannaira" target='_blank' data-aos="fade-up" data-aos-duration="500"><i className='bx bxl-github' ></i></a>

                                    <a href="https://www.facebook.com/itschanakunz" target='_blank' data-aos="fade-up" data-aos-duration="600"><i className='bx bxl-facebook-square' ></i></a>

                                    <a href="https://dribbble.com/ItsChanz" target='_blank' data-aos="fade-up" data-aos-duration="700"><i className='bx bxl-dribbble' ></i></a>

                                </div>
                            </div>



                            <div className="hero-review ">

                                <div className="hero-review-content d-flex gap-3">

                                    <div className="hero-review-content-card">
                                        <h4>10 +</h4>
                                        <span>projects completed</span>
                                    </div>

                                    <div className="hero-review-content-card">
                                        <h4>1 +</h4>
                                        <span>bootcamp awards</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>

                <div className="scroll-down-button" onClick={handleScrollDown}>
                    <span className="arrow">

                    </span>
                </div>
            </section>

        </>
    )
}

export default Hero
