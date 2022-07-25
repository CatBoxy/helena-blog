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
import NavBar from '../NavBar/NavBar';
import { MainHeader, DrawerNavBar, NavWrapper } from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const titleMayus = title?.toUpperCase();

  return (
    <>
      <MainHeader>
        <NavBar/>
        <NavWrapper justify={location.pathname === '/' ? 'flex-end' : 'space-between'} className='smDisplay'>
          {title && <h2>{titleMayus}</h2>}
          <IconMenu2 onClick={onOpen} color={'white'} stroke={2}/>
        </NavWrapper>
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
              <DrawerNavBar>
                <ul>
                  <li className={location.pathname === '/' ? 'active' : ''} onClick={onClose}>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li className={location.pathname === '/libros' ? 'active' : ''} onClick={onClose}>
                    <Link to={'/libros'}>Libros</Link>
                  </li>
                  <li className={ location.pathname === '/sobre-mi' ? 'active' : '' } onClick={onClose}>
                    <Link to={'/sobre-mi'}>Sobre mi</Link>
                  </li>
                  <li className={ location.pathname === '/contacto' ? 'active' : '' } onClick={onClose}>
                    <Link to={'/contacto'}>Contacto</Link>
                  </li>
                  <li className={location.pathname === '/galeria' ? 'active' : ''} onClick={onClose}>
                    <Link to={'/galeria'}>Galeria</Link>
                  </li>
                </ul>
              </DrawerNavBar>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MainHeader>
    </>
  );
};

export default Header;
