import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { CgMenu } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { MainHeader, NavBar } from './styles';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      <MainHeader>
        <CgMenu onClick={onOpen}/>
        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} size={'full'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <NavBar>
                <ul>
                  <li className={location.pathname === '/' ? 'active' : ''}><Link to={'/'}>Home</Link></li>
                  <li className={location.pathname === '/libros' ? 'active' : ''}><Link to={'/libros'}>Libros</Link></li>
                  <li><Link to={'/'}>Sobre mi</Link></li>
                  <li><Link to={'/'}>Contacto</Link></li>
                  <li><Link to={'/'}>Galeria</Link></li>
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
