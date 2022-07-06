import Card from '../Card/Card';
import { Container } from './styles';
import somos from '../../assets/img/Somos.jpg';
import historiasRecetadas from '../../assets/img/historiasRecetadas.jpg';

const Cards = () => {
  return (
    <>
      <Container>
        <Card img={somos} />
        <Card img={historiasRecetadas} />
      </Container>
    </>
  );
};

export default Cards;
