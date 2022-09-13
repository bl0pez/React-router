import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

export const AppRouters = () => {
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    
    </>
  )
}
