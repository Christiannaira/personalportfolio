import React from 'react';

import StressImg from '../../assets/stress.png';
import DesignImg from '../../assets/design-solution.png';
import ProblemImg from '../../assets/problem-solving.png';

const Problems = () => {
    return (
        <>

            <div className="problems-main-content">
                <h3>BECAUSE YOU DON'T NEED TO ...</h3>

                <div className="problems-content">

                    <div className="problems-content-img">
                        <img src={StressImg} alt="" />
                    </div>

                    <h3 className='problems-highlight'>REINVENT THE WHEEL!!</h3>

                    <div className="problems-value">
                        <p>Many start-ups and small business owners failed to adapt to a modern way of marketing to increase their business online, that's why they can't stand out. Presenting your business online is essential in the game, that's why you need not just a landing page, but a high performing landing page that can make a high conversions rate.</p>
                        <p>If you're a content creator, small business owner, entrepreneur, and a coach, <span className='problems-cta'>you're in the right place</span>. As long as your game is in the phase of internet, this is crucial. <span>Let's make your game grow!</span></p>
                    </div>


                    <div className="problems-solution-process">

                        <div className="problems-solution-process-main-img">

                            <div className="problems-solution-process-img">
                                <img src={ProblemImg} />

                                <h4>Strategic Planning</h4>

                            </div>

                            <span>+</span>

                            <div className="problems-solution-process-img">
                                <img src={DesignImg} alt="" />

                                <h4>Design Execution</h4>
                            </div>

                        </div>

                        <div className="process-des">
                            <p>There are two ways of approach I use to make your business presence in the landing page make high conversions. First, strategic planning, which involves the process of researching the niche, identifying the audience and challenges, knowing the main objectives of the business. And lastly, the execution of the plan.</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Problems
