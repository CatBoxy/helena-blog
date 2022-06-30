import { Container } from './styles';
import { IoIosArrowDown } from 'react-icons/io';
import bannerPicture from '../../assets/img/pintura1.png';

const Hero = () => {
  return (
    <>
      <Container>
        <h1 className="title">Helena Escales</h1>
        <div className='banner'>
          <img src={bannerPicture} alt="pintura" />
        </div>
        <div className="btnContainer">
          <button className="scrollBtn">
            <IoIosArrowDown />
          </button>
        </div>
      </Container>
    </>
  );
};

export default Hero;
