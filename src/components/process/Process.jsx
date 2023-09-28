import React, { useRef } from 'react';
import "./process.css";

import processData from './processData';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Process = () => {


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (

        <>

            <section className="process" id="process">

                <div className="process-main-content">

                    <div className="section-main-text projects-main-text">
                        <span>my</span>
                        <h2>DESIGN PROCESS</h2>
                    </div>

                    <div className="process-main-content">

                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                onAutoplayTimeLeft={onAutoplayTimeLeft}
                                className="mySwiper"
                            >
                                {
                                    processData.map(({ id, title, des }, index) => {

                                        return (
                                            <SwiperSlide key={index}>

                                                <div className="swiper-main-content">

                                                    <div className="swiper-content">
                                                        <h3>{title}</h3>

                                                        <div className="swiper-content-des">
                                                            <p>{des}</p>
                                                        </div>

                                                    </div>

                                                    <span className="number">
                                                        <h5>0{id}</h5>
                                                    </span>

                                                </div>

                                            </SwiperSlide>
                                        )

                                    })
                                }


                                <div className="autoplay-progress" slot="container-end">
                                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent}></span>
                                </div>
                            </Swiper>
                        </div>


                    </div>

                </div>

            </section>

        </>

    )
}

export default Process
