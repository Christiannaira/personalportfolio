import React, { useEffect } from 'react';
import './services.css';

import ServicesCards from './ServicesCards';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>

            <section className="services" id="services" data-aos="fade-up">

                <div className="services-main-content container-fluid-md">

                    <div className="section-main-text services-main-text">
                        <span>current</span>
                        <h2>SERVICES</h2>
                    </div>

                    <div className="services-content">

                        <div className="services-list-content row">

                            <ServicesCards />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Services
