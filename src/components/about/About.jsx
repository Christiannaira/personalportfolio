import React from 'react';
import './about.css';

import MeImg from '../../assets/christian.jpg';
import Avatar from '../../assets/avatar.png';

import Bootstrap from '../../assets/bootstrap.webp';
import MaterialUI from '../../assets/materialui.png';
import TailwindCss from '../../assets/tailwind.png';
import Figma from '../../assets/figma.png';
import Webflow from '../../assets/webflow.png';
import Javascript from '../../assets/javascript.png';
import ReactJs from '../../assets/reactjs.jpg';
import Vercel from '../../assets/vercel.jpg';
import Jquery from '../../assets/jquery.png';
import Git from '../../assets/git.png';
import Firebase from '../../assets/firebase.png';
import CSS from '../../assets/css.png';
import Framer from '../../assets/framer.png';
import Laravel from '../../assets/laravel.webp';
import Php from "../../assets/php.png";
import Python from "../../assets/python.png";
import ThreeJs from '../../assets/threejs.png';
import Typescript from '../../assets/typescript.png';
import Sass from '../../assets/sass.png';
import RestApi from '../../assets/rest-api.png';
import NodeJs from '../../assets/nodejs.png';
import NextJs from '../../assets/nextJs.png';
import Mysql from '../../assets/mysql.png';
import Html from '../../assets/html.png';
import Photoshop from '../../assets/photoshop.png';
import Illustrator from '../../assets/illustrator.png';

import Skillset from './Skillset';
import Certifications from './Certifications';

const About = () => {
    return (
        <>

            <section className="about" id="about">

                <div className="about-main-content">


                    <div className="section-main-text about-main-text">

                        <h2>ABOUT ME</h2>
                    </div>


                    <div className="about-content">


                        <div className="about-content-main-img">
                            <div className="about-content-img">
                                <img src={MeImg} alt="" />
                                <img src={Avatar} alt="" className='avatar' />
                            </div>

                            <div className="ratings">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>

                            <div className='about-content-social-links'>

                                <a href="" ><i className='bx bxl-linkedin-square'></i></a>
                                <a href="" ><i className='bx bxl-github' ></i></a>
                                <a href="" ><i className='bx bxl-facebook-square' ></i></a>
                                <a href=""><i className='bx bxl-dribbble' ></i></a>


                            </div>
                        </div>

                        <div className='about-content-main-texts'>

                            <div className="about-content-texts">
                                <p>Yo! I am Christian Naira, a web developer and designer from the philippines :-D. I have experience developing web applications, and web designs. But I'm more focused on designing landing pages right now that converts, for start-ups, and coaches.</p>
                                <p>
                                    I've been coding and designing for 2 years now, I found myself passionate on what I've been doing because it enhances my problem solving skills and creativity. That's why I wanted to apply all of the knowledge I've acquired to help innovators struggling in the game.
                                </p>
                                <p>
                                    Soonest, I will dive into web3 where I can build decentralized applications for web3 businesses. It's a future of the internet, it's our secret shh, hehe.
                                </p>

                            </div>

                            <div className="technology-stacks">

                                <h3>Technology Stacks</h3>

                                <div className="technology-stacks-content">

                                    <Skillset />

                                </div>

                                <h3>Certifications</h3>


                                <div className="technology-stacks-content">

                                    <Certifications />

                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </section>

        </>
    )
}

export default About
