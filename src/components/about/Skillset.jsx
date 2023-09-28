import React from 'react';

import Bootstrap from '../../assets/bootstrap.webp';
import MaterialUI from '../../assets/materialui.png';
import TailwindCss from '../../assets/tailwind.png';
import Figma from '../../assets/figma.png';
import Webflow from '../../assets/webflow.png';
import Javascript from '../../assets/javascript.png';
import ReactJs from '../../assets/reactjs.jpg';
import Vercel from '../../assets/vercel.jpg';
import Jquery from '../../assets/jquery.png';
import Git from '../../assets/git.png';
import Firebase from '../../assets/firebase.png';
import CSS from '../../assets/css.png';
import Framer from '../../assets/framer.png';
import Laravel from '../../assets/laravel.webp';
import Php from "../../assets/php.png";
import Python from "../../assets/python.png";
import ThreeJs from '../../assets/threejs.png';
import Typescript from '../../assets/typescript.png';
import Sass from '../../assets/sass.png';
import RestApi from '../../assets/rest-api.png';
import NodeJs from '../../assets/nodejs.png';
import NextJs from '../../assets/nextJs.png';
import Mysql from '../../assets/mysql.png';
import Html from '../../assets/html.png';
import Photoshop from '../../assets/photoshop.png';
import Illustrator from '../../assets/illustrator.png';

const skills = [
    {
        skill: Bootstrap,
        skillname: 'Bootstrap',
    },
    {
        skill: MaterialUI,
        skillname: 'MaterialUI',
    },
    {
        skill: TailwindCss,
        skillname: 'TailwindCss',
    },
    {
        skill: Firebase,
        skillname: 'Firebase',
    },
    {
        skill: Laravel,
        skillname: 'Laravel',
    },
    {
        skill: Html,
        skillname: 'Html',
    },
    {
        skill: CSS,
        skillname: 'CSS',
    },
    {
        skill: Javascript,
        skillname: 'Javascript',
    },
    {
        skill: ReactJs,
        skillname: 'ReactJs',
    },
    {
        skill: Python,
        skillname: 'Python',
    },
    {
        skill: Php,
        skillname: 'Php',
    },
    {
        skill: Mysql,
        skillname: 'Mysql',
    },
    {
        skill: Figma,
        skillname: 'Figma',
    },
    {
        skill: Webflow,
        skillname: 'Webflow',
    },
    {
        skill: Jquery,
        skillname: 'Jquery',
    },
    {
        skill: Sass,
        skillname: 'Sass',
    },
    {
        skill: Typescript,
        skillname: 'Typescript',
    },
    {
        skill: NodeJs,
        skillname: 'NodeJs',
    },
    {
        skill: ThreeJs,
        skillname: 'ThreeJs',
    },
    {
        skill: NextJs,
        skillname: 'NextJs',
    },
    {
        skill: Framer,
        skillname: 'Framer',
    },
    {
        skill: Vercel,
        skillname: 'Vercel',
    },
    {
        skill: Git,
        skillname: 'Git',
    },
    {
        skill: RestApi,
        skillname: 'RestApi',
    },
    {
        skill: Photoshop,
        skillname: 'Photoshop',
    },
    {
        skill: Illustrator,
        skillname: 'Illustrator',
    },



]

const Skillset = () => {
    return (
        <>
            {
                skills.map(({ skill, skillname }, index) => {
                    return (
                        <div className="stack">
                            <img src={skill} alt={skillname} />
                        </div>
                    )
                })
            }

        </>
    )
}

export default Skillset
