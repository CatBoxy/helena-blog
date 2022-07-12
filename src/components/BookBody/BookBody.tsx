import { Container } from './styles';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  image: string;
  text: string;
  title: string;
}

interface BookBodyProps {
  currentBook: Book;
}

const BookBody = ({currentBook}: BookBodyProps) => {
  
  return (
    <>
      <Container>
        <div>
          <img src={currentBook?.image} alt="camino" />
        </div>
        <article>
          {currentBook?.text}
        </article>
        <div>
          <Link to={'/libros'}>
            <button>
              Volver
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default BookBody;
