import React from 'react';

import StressImg from '../../assets/stress.png';
import DesignImg from '../../assets/design-solution.png';
import ProblemImg from '../../assets/problem-solving.png';

const Problems = () => {
    return (
        <>

            <div className="problems-main-content">
                <h3>BECAUSE YOU DON'T HAVE TO ...</h3>

                <div className="problems-content">

                    <div className="problems-content-img">
                        <img src={StressImg} alt="" />
                    </div>

                    <h3 className='problems-highlight'>REINVENT THE WHEEL!!</h3>

                    <div className="problems-value">
                        <p>If you're an entreprenuer, course creator, online coach, or whatever you do in the internet game. As long as you're doing business in the digital era. You have to hire a companion that will work for you, 24 hours a day, and 365 days in a year. It's a website and a landing page. A High-Converting Site will generate more leads and more sales to your business, and your brand will enhance!</p>
                        <p>Are you ready to take this journey with me?<span className='problems-cta'> Let's Get Started!</span></p>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Problems
