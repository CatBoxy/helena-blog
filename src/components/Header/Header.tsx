import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { IconMenu2 } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import { MainHeader, NavBar } from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      <MainHeader>
        <h2>{title}</h2>
        <IconMenu2 onClick={onOpen} />
        <Drawer
          placement={'top'}
          onClose={onClose}
          isOpen={isOpen}
          size={'full'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <NavBar>
                <ul>
                  <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li
                    className={location.pathname === '/libros' ? 'active' : ''}
                  >
                    <Link to={'/libros'}>Libros</Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/sobre-mi' ? 'active' : ''
                    }
                  >
                    <Link to={'/sobre-mi'}>Sobre mi</Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/contacto' ? 'active' : ''
                    }
                  >
                    <Link to={'/contacto'}>Contacto</Link>
                  </li>
                  <li
                    className={location.pathname === '/galeria' ? 'active' : ''}
                  >
                    <Link to={'/galeria'}>Galeria</Link>
                  </li>
                </ul>
              </NavBar>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MainHeader>
    </>
  );
};

export default Header;
