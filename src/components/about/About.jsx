import React from 'react';
import './about.css';

import MeImg from '../../assets/christian.jpg';
import Avatar from '../../assets/avatar.png';

const About = () => {
    return (
        <>

            <section className="about" id="about">

                <div className="about-main-content">


                    <div className="section-main-text about-main-text">

                        <h2>ABOUT ME</h2>
                    </div>


                    <div className="about-content border">


                        <div className="about-content-main-img">
                            <div className="about-content-img">
                                <img src={MeImg} alt="" />
                                <img src={Avatar} alt="" className='avatar' />
                            </div>

                        </div>

                        <div className="about-content-texts">
                            <p>Yo! I am Christian Naira, a web developer and designer from the philippines :-D. I have experience developing web applications, and web designs. But I'm more focused on designing landing pages right now that converts, for start-ups, and coaches.</p>
                            <p>
                                I've been coding and designing for 2 years now, I found myself passionate on what I've been doing because it enhances my problem solving skills and creativity. That's why I wanted to apply all of the knowledge I've acquired to help innovators struggling in the game.
                            </p>
                            <p>
                                Soonest, I will dive into web3 where I can build decentralized applications for web3 businesses. It's a future of the internet, it's our secret shh, hehe.
                            </p>

                        </div>

                    </div>

                    <div className="about-content-two border">

                        <div className="about-content-texts">
                            <p>Yo! I am Christian Naira, a web developer and designer from the philippines :-D. I have experience developing web applications, and web designs. But I'm more focused on designing landing pages right now that converts, for start-ups, and coaches.</p>
                            <p>
                                I've been coding and designing for 2 years now, I found myself passionate on what I've been doing because it enhances my problem solving skills and creativity. That's why I wanted to apply all of the knowledge I've acquired to help innovators struggling in the game.
                            </p>
                            <p>
                                Soonest, I will dive into web3 where I can build decentralized applications for web3 businesses. It's a future of the internet, it's our secret shh, hehe.
                            </p>

                        </div>


                        <div className="about-content-main-img">
                            <div className="about-content-img">
                                <img src={MeImg} alt="" />

                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default About
