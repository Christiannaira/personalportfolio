import React from 'react';

import servicesData from './ServicesData';


const ServicesCards = () => {
    return (
        <>
            {servicesData.map(({ id, title, description, dataImg }, index) => {

                return (

                    <div className="col-md-4 border services-card-main-content ">

                        <div className="services-card-content">

                            <div className="services-card-title">
                                <h3>{title}</h3>
                            </div>

                        </div>

                    </div>

                )

            })}


        </>
    )
}

export default ServicesCards
