import React from 'react';
import "./benefits.css";


import AnimatedCursor from 'react-animated-cursor'

import DesignerImg from '../../assets/designer.png';

const benefits = () => {
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

            <section className="benefits" id="benefits">

                <div className="benefits-main-content">

                    <div className="benefits-content">

                        <div className="benefits-img">
                            <img src={DesignerImg} alt="" />
                        </div>

                        <div className="benefits-texts">
                            <h2>LET ME HELP YOU TO</h2>

                            <div className="benefits-texts-content">

                                <div className="problem">

                                    <ul>
                                        <li><i class='bx bx-check-double'></i> Gather Quality Leads on your landing page</li>
                                        <li><i class='bx bx-check-double'></i> Develop a great user experience on your website</li>
                                        <li><i class='bx bx-check-double'></i> Position your brand in the internet market.</li>
                                        <li><i class='bx bx-check-double'></i> Redesign your landing page align with your business objectives and missions</li>
                                        <li><i class='bx bx-check-double'></i> Stand out from the competetitors</li>
                                    </ul>

                                </div>
                                <div className="problem">
                                    s
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default benefits
