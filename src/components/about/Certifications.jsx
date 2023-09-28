import React from 'react';

const certificates = [
    {
        name: 'Web Design',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Graphic Design',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Web Development',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Digital Marketing',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Web Design',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Copywriting',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'SEO',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Javascript',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Photoshop',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Illustrator',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'UI/UX Design',
        title: 'MSB Academy',
        certificateLink: '',
    },
    {
        name: 'Full-Stack Development',
        title: 'KodeGo',
        certificateLink: '',
    },
]

const Certifications = () => {
    return (
        <>

            {certificates.map(({ name, title, certificateLink }, index) => {

                return (
                    <div className='certificate' key={index}>

                        <div className="certificate-content">

                            <div>
                                <h4>{name}</h4>
                                <span>{title}</span>
                            </div>

                            <a href={certificateLink}>view certificate</a>
                        </div>

                    </div>
                )

            })}

        </>
    )
}

export default Certifications
