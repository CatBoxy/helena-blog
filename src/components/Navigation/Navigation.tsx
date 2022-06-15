import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../views/Home/Home';
import Books from '../views/Books/Books';

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Books />} />
      </Routes>
    </>
  );
};

export default Navigation;
