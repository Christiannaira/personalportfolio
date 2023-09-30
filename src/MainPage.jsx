import React from 'react';

import Navigation from './components/navigation/Navigation';
import Hero from './pages/hero/Hero';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Benefits from './components/benefits/Benefits';
import Process from './components/process/Process';
import About from './components/about/About';
import Cta from './components/cta/Cta';
import Testimonial from './components/testimonial/Testimonial';

const MainPage = () => {
    return (
        <>
            {/*header section layout*/}
            <header>
                <Navigation />
            </header>

            {/*main section layout*/}
            <main>

                <Hero />
                <Projects />
                <Services />
                <Benefits />
                <Process />
                <About />
                <Testimonial />
                <Cta />

            </main>

            {/*footer section layout*/}
            <footer>

                <div className="footer-content text-center">
                    <p>Copyright &copy; 2023. All Rights Reserved. Designed By Christian Naira</p>
                </div>

            </footer>

        </>
    )
}

export default MainPage
