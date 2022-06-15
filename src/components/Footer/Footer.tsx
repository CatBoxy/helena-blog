import { Container} from './styles';
import { TbMail } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import paisajeFooter from '../../assets/img/paisajeFooter.svg';

const Footer = () => {
  return (
    <>
      <Container>
        <h2>
          Helena Escales
        </h2>
        <ul>
          <li><TbMail/></li>
          <li><FiFacebook/></li>
          <li>Etc</li>
        </ul>
        <div className='landscape'>
          <img src={paisajeFooter} alt="paisaje" />
        </div>
      </Container>
    </>
  );
};

export default Footer;
