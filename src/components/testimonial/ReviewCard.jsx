import React from 'react';

import ClientOne from '../../assets/c1.jpg';
import ClientTwo from '../../assets/c2.jpg';
import ClientThree from '../../assets/c3.jpg';


const clients = [
    {
        clientName: 'Bryan Barnedo',
        clientImg: ClientOne,
        clientTitle: 'Video Editor',
        clientReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam doloribus nobis ab error possimus enim, nostrum quaerat fuga tempore maxime totam ipsa porro eaque minima temporibus sed, sint reprehenderit.',
    },
    {
        clientName: 'John Carl Torcuador',
        clientImg: ClientTwo,
        clientTitle: 'Social Media Manager',
        clientReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam doloribus nobis ab error possimus enim, nostrum quaerat fuga tempore maxime totam ipsa porro eaque minima temporibus sed, sint reprehenderit.',
    },
    {
        clientName: 'Glen Merinillo',
        clientImg: ClientThree,
        clientTitle: 'Social Media Manager',
        clientReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam doloribus nobis ab error possimus enim, nostrum quaerat fuga tempore maxime totam ipsa porro eaque minima temporibus sed, sint reprehenderit.',
    },
]

const ReviewCard = () => {
    return (
        <>

            {clients.map(({ clientName, clientImg, clientTitle, clientReview }, index) => {

                return (
                    <div className="col-md-4 review-content-card" key={index}>

                        <div className="review-content-card-content">

                            <div className="review-profile">

                                <div className="review-profile-img">
                                    <img src={clientImg} alt={clientName} />
                                </div>

                                <div className="review-profile-texts">
                                    <h4>{clientName}</h4>
                                    <span>{clientTitle}</span>

                                    <div className="review-rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>

                                </div>

                            </div>


                            <div className="client-review">
                                <p>{clientReview}</p>
                            </div>

                        </div>

                    </div>
                )

            })}

        </>
    )
}

export default ReviewCard
