import { Container, CoverWrapper, DetailsWrapper } from './styles';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  image: string;
  text: string;
  title: string;
}

interface CardProps {
  book: Book;
}

const Card: React.FC<CardProps> = ({ book }: CardProps) => {

  // const imgUrl = '../../src/assets/img/' + book.image;
  return (
    <>
      <Container>
        <CoverWrapper>
          <Link to={'/book'}>
            <img src={book.image} alt="" />
          </Link>
        </CoverWrapper>
        <DetailsWrapper>
          <h2>{book.title}</h2>
          <p>{book.text}</p>
        </DetailsWrapper>
      </Container>
    </>
  );
};

export default Card;
