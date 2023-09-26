import React, { useRef } from 'react';
import "./benefits.css";


import AnimatedCursor from 'react-animated-cursor'

import DesignerImg from '../../assets/designer.png';

import BenefitsCard from './BenefitsCard';
import Problems from './Problems';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const benefits = () => {

    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
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
                                        <li><i class='bx bx-check-double'></i> Gather Quality Leads on your landing page.</li>
                                        <li><i class='bx bx-check-double'></i> Develop a great user experience on your website.</li>
                                        <li><i class='bx bx-check-double'></i> Position your brand with authority.</li>
                                        <li><i class='bx bx-check-double'></i> Redesign your landing page aligned with your business goals and objectives.</li>
                                        <li><i class='bx bx-check-double'></i> Stand out from the rest of your field.</li>
                                        <li><i class='bx bx-check-double'></i> Plan out the best strategy to increase your sales & conversions.</li>
                                        <li><i class='bx bx-check-double'></i> Build trust with your audience and prospects.</li>

                                    </ul>

                                </div>

                            </div>

                            <Problems />

                        </div>




                    </div>
                    <h3 className='benefits-card-title'>MY DEVELOPMENT - <br /> AND DESIGN PROCESS</h3>
                    <BenefitsCard />

                </div>

            </section>
        </>
    )
}

export default benefits
