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
                        <p>Many start-ups and small business owners failed to adapt to a modern way of marketing to increase their business online, that's why they can't stand out. Presenting your business online is essential in the game, that's why you need not just a landing page, but a high performing landing page that can make a high conversions rate.</p>
                        <p>If you're a content creator, small business owner, entrepreneur, and a coach, <span className='problems-cta'>you're in the right place!</span>. As long as your game is in the phase of internet, this is crucial. Let's make your game grow!</p>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Problems
