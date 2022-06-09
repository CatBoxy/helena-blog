import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../views/Home/Home';

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Navigation;
