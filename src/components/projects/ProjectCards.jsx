import React from 'react';

import SampleProject from '../../assets/mockup-sample.webp';

import projectData from './ProjectData';



const ProjectCards = () => {
    return (
        <>
            {projectData.map(({ id, projectTitle, description, date, tools, projectLink, githubLink, projectImg }, index) => (

                <div className="col-lg-6 project-main-card" key={index}>

                    <div className="project-main-card-content">

                        <div className="project-main-card-content-img">
                            <img src={SampleProject} alt="" />
                        </div>

                        <div className="animation-layer">

                        </div>

                        <div className="project-main-card-des">

                            <div className="project-main-card-title d-flex justify-content-between">

                                <h3 className="project-title">{projectTitle}</h3>

                                <h4 className="projectNumber">0{id}</h4>

                            </div>

                            <div className="projects-main-card-tools d-flex">

                                {tools.map((tool, index) => {

                                    return (
                                        <span className='card-tool' key={index}>{tool}</span>
                                    )

                                })}

                            </div>

                        </div>

                    </div>



                </div>

            ))}


        </>
    )
}

export default ProjectCards
