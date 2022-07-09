import Card from '../Card/Card';
import { Container } from './styles';
import books from '../../data/books.json';

const Cards = () => {
  return (
    <>
      <Container>
        {books.map((book) => (
          <Card book={book} key={book.id}/>
        ))}
      </Container>
    </>
  );
};

export default Cards;
