import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../views/Home/Home';
import Books from '../views/Books/Books';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import Gallery from '../views/Gallery/Gallery';
import Book from '../views/Book/Book';

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Books />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/libros/:libroId" element={<Book />} />
      </Routes>
    </>
  );
};

export default Navigation;
