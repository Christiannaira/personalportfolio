import React, { useEffect } from 'react';
import "./benefits.css";


import AnimatedCursor from 'react-animated-cursor'

import DesignerImg from '../../assets/designer.png';

import Problems from './Problems';


import AOS from 'aos';
import 'aos/dist/aos.css';




const benefits = () => {

    useEffect(() => {

        window.onload = () => {
            AOS.init();
        }

    }, []);

    const benefitsData = [
        {
            data: "Increase the Conversion Rate of your Landing Page"
        },
        {
            data: "Gather Quality Leads on your Business."
        },
        {
            data: "Position your brand with authority and credibility."
        },
        {
            data: "Enhance great user-experience to your site."
        },
        {
            data: "Stand out from the rest."
        },
        {
            data: "Lower your ad cost."
        },
        {
            data: "Build trust with your audience and prospects."
        },
    ]

    return (
        <>

            <AnimatedCursor
                innerSize={10}
                outerSize={30}
                color='34, 34, 34'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.custom',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '255, 255, 255',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5
                        }
                    }
                ]}
            />

            <section className="benefits" id="benefits" >

                <div className="benefits-main-content" data-aos="fade-up">

                    <div className="benefits-content">

                        <div className="benefits-img">
                            <img src={DesignerImg} alt="" />
                        </div>

                        <div className="benefits-texts">
                            <h2>LET ME HELP YOU TO</h2>

                            <div className="benefits-texts-content">

                                <div className="problem">

                                    <ul>
                                        {benefitsData.map((item, index) => {

                                            return (
                                                <li key={index}><i className='bx bx-check-double'></i>{item.data}</li>
                                            )

                                        })}
                                    </ul>

                                </div>

                            </div>

                            <Problems />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default benefits
