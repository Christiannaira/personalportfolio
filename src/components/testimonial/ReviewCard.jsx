import React from 'react';

import ClientOne from '../../assets/c1.jpg';
import ClientTwo from '../../assets/c2.jpg';
import ClientThree from '../../assets/c3.jpg';


const clients = [
    {
        clientName: 'Bryan Barnedo',
        clientImg: ClientOne,
        clientTitle: 'Video Editor',
        clientReview: "Working and collaborating with christian was one of the best thing I ever did. Not just because of his production quality but he's just too good for his craft and easy to communicate with. Not to mention that he's one I ask when it comes to technicalities in the web. Overall, working with chris was worth it 🔥"
    },
    {
        clientName: 'John Carl Torcuador',
        clientImg: ClientTwo,
        clientTitle: 'Social Media Manager',
        clientReview: "I personally recommend Christian as a web developer and website designer. He has curated the design that I want for my website, and he's attention detailed when it comes to workflow. His design was very mordenized and smooth. Working with Christian is a goal within our company. ",
    },
    {
        clientName: 'Glen Merinillo',
        clientImg: ClientThree,
        clientTitle: 'Social Media Manager',
        clientReview: 'Christian did a great job on my website. Highly recommended! Thanks, Christian!',
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
