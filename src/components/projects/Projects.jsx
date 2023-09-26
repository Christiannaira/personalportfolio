import React from 'react';
import './projects.css';

import ProjectCards from './ProjectCards';

import AnimatedCursor from 'react-animated-cursor';


const Projects = () => {
    return (

        <>
            <AnimatedCursor
                innerSize={10}
                outerSize={30}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.custom',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '255, 255, 255',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5
                        }
                    }
                ]}
            />

            <section className="projects" id="projects" >

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
