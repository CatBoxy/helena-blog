import { Container } from './styles';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <>
      <Container>
        <h1 className="title">Helena Escales</h1>
        <div
          style={{
            width: '280px',
            height: '390px',
            backgroundColor: '#000',
          }}
        ></div>
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
