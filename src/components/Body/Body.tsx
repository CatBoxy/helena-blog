import {Container} from './styles';
import poem from '../../assets/img/poema.png';

const Body = () => {
  return (
    <>
      <Container>
        <img src={poem} alt="poema" />
      </Container>
    </>
  );
};

export default Body;
