
import Hero from './pages/hero/Hero';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
