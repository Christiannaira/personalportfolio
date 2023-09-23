import React from 'react';
import './projects.css';

import ProjectCards from './ProjectCards';


const Projects = () => {
    return (
        <>

            <section className="projects" id="projects">

                <div className="projects-main-content container-fluid-md">

                    <div className="section-main-text projects-main-text">
                        <span>recent</span>
                        <h2>PROJECTS</h2>
                    </div>

                    <div className="projects-content">

                        <div className="row projects-view-content">

                            <ProjectCards />


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Projects
