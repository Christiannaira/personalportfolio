import React from 'react';
import './services.css';

import ServicesCards from './ServicesCards';


const Services = () => {
    return (
        <>

            <section className="services" id="services">

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
