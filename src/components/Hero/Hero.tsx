import { Container } from './styles';
import { IconChevronDown } from '@tabler/icons';
import bannerPicture from '../../assets/img/pintura1.jpg';

const Hero = () => {
  return (
    <>
      <Container>
        <h1 className="title">Helena Escales</h1>
        <div className="banner">
          <img src={bannerPicture} alt="pintura" />
        </div>
        <div className="btnContainer">
          <button className="scrollBtn">
            <IconChevronDown />
          </button>
        </div>
      </Container>
    </>
  );
};

export default Hero;
