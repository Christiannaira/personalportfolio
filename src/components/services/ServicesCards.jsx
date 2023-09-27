import React, { useEffect } from 'react';

import servicesData from './ServicesData';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ServicesCards = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {servicesData.map(({ id, title, description, dataImg, best }, index) => {

                return (

                    <div className="col-lg-4 services-card-main-content" key={index}>

                        <div className={best ? 'services-card-content best' : 'services-card-content'}>

                            <div className="services-card-img">
                                <img src={dataImg} alt="" />
                            </div>

                            <div className="services-card-title">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>

                        </div>

                    </div>

                )

            })}


        </>
    )
}

export default ServicesCards
