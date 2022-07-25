import { Link } from "react-router-dom";
import { ListWrapper } from "./styles";

const NavBar = () => {
    return (
        <ListWrapper>
            <ul>
                  <li className={location.pathname === '/' ? 'active' : ''} >
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li className={location.pathname === '/libros' ? 'active' : ''} >
                    <Link to={'/libros'}>Libros</Link>
                  </li>
                  <li className={ location.pathname === '/sobre-mi' ? 'active' : '' } >
                    <Link to={'/sobre-mi'}>Sobre mi</Link>
                  </li>
                  <li className={ location.pathname === '/contacto' ? 'active' : '' } >
                    <Link to={'/contacto'}>Contacto</Link>
                  </li>
                  <li className={location.pathname === '/galeria' ? 'active' : ''} >
                    <Link to={'/galeria'}>Galeria</Link>
                  </li>
                </ul>
        </ListWrapper>
    );
};

export default NavBar;