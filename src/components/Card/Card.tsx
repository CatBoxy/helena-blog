import { Container, CoverWrapper, DetailsWrapper } from './styles';
import { Link } from 'react-router-dom';

interface CardProps {
  img: string;
}

const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <>
      <Container>
        <CoverWrapper>
          <Link to={'/book'}>
            <img src={img} alt="camino" />
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
