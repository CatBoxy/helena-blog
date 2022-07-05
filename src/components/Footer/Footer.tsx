import { Container } from './styles';
import { IconMail, IconBrandFacebook } from '@tabler/icons';
import paisajeFooter from '../../assets/img/paisajeFooter.svg';
import firma from '../../assets/img/firma.png';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <Container>
        <div className="signature">
          <img src={firma} alt="" />
        </div>
        <ul className={location.pathname !== '/' ? 'navFooter' : ''}>
          <li>
            <IconMail stroke={1} />
          </li>
          <li>
            <IconBrandFacebook stroke={1} />
          </li>
        </ul>
        {location.pathname === '/' && (
          <div className="landscape">
            <img src={paisajeFooter} alt="paisaje" />
          </div>
        )}
      </Container>
    </>
  );
};

export default Footer;
