import { Container } from './styles';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import books from '../../data/books.json';
import { useEffect, useState } from 'react';

interface Book {
  id: string;
  image: string;
  text: string;
  title: string;
}

const BookBody = () => {
  const [currentBook, setCurrentBook ] = useState<Book | undefined>(undefined);
  let params = useParams();

  useEffect(() => {

    let filteredBook = books.find((book) => {
      if (book.id === params.libroId) {
        return book;
      };
      return 
    });
    setCurrentBook(filteredBook);

  }, []);

  return (
    <>
      <Container>
        <h2>{currentBook?.title}</h2>
        <div>
          <img src={currentBook?.image} alt="camino" />
        </div>
        <article>
          {currentBook?.text}
        </article>
        <div>
          <button>
            <Link to={'/libros'}>Volver</Link>
          </button>
        </div>
      </Container>
    </>
  );
};

export default BookBody;
