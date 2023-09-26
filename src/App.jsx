
import { useEffect } from 'react';
import Hero from './pages/hero/Hero';
import { Route, Routes } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';


function App() {


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
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
