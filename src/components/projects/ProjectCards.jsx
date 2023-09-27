import React, { useEffect } from 'react';

import SampleProject from '../../assets/mockup-sample.webp';

import projectData from './ProjectData';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCards = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            {projectData.map(({ id, projectTitle, description, date, tools, projectLink, githubLink, projectImg, color, animation }, index) => (

                <div className="col-md-6 project-main-card" key={index}>

                    <div className="project-main-card-content" data-aos={animation === 'left' ? "fade-right" : "fade-left"}>

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

                            <div className="projects-main-card-tools d-flex flex-wrap">

                                {tools.map((tool, index) => {

                                    return (
                                        <span className='card-tool' key={index}>{tool}</span>
                                    )

                                })}

                            </div>

                            <div className="view-link">
                                <a href={projectLink} target='_blank'>visit website</a>
                                <a href={githubLink} target='_blank'>github link</a>
                            </div>

                        </div>

                    </div>



                </div>

            ))}


        </>
    )
}

export default ProjectCards
