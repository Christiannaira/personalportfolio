import React from 'react';

import SampleProject from '../../assets/mockup-sample.webp';

import projectData from './ProjectData';



const ProjectCards = () => {
    return (
        <>
            {projectData.map(({ id, projectTitle, description, date, tools, projectLink, githubLink, projectImg }, index) => (

                <div className="col-lg-4 project-main-card" key={index}>

                    <div className="card">

                        <img src={SampleProject} alt="" style={{ width: "100%" }} className='card-img-top' />

                        <div className="card-animation">


                        </div>

                        <div className="card-body">

                            <div className="card-body-content border
                             h-100 " >

                                <div className="card-body-titles d-flex align-items-start justify-content-between w-100">

                                    <h4 className="card-content-name">
                                        {projectTitle}
                                    </h4>

                                    <h5 className="card-content-number">0{id}</h5>

                                </div>

                                <div className="card-body-tools border">
                                    {tools.map((tool, index) => (
                                        <span key={index} className='card-tool'>{tool}</span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            ))}


        </>
    )
}

export default ProjectCards
