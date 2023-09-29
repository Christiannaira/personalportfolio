import React from 'react';
import './testimonial.css';

import ReviewCard from './ReviewCard';


const Testimonial = () => {
    return (
        <>

            <section className="testimonial" id="testimonial">


                <div className="testimonial-main-content">

                    <div className="testimonial-content">

                        <div className="testimonial-content-review">

                            <div className="review-content row">

                                <ReviewCard />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Testimonial
