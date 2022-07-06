import { Container, CoverWrapper, DetailsWrapper } from './styles';
import camino from '../../assets/img/camino.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <Container>
        <CoverWrapper>
          <Link to={'/book'}>
            <img src={camino} alt="camino" />
          </Link>
        </CoverWrapper>
        <DetailsWrapper>
          <h2>Titulo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            labore corporis ea veritatis...
          </p>
        </DetailsWrapper>
      </Container>
    </>
  );
};

export default Card;
