import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookBody from "../../BookBody/BookBody";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Layout from "../../Layout/Layout";
import books from '../../../data/books.json';

interface Book {
  id: string;
  image: string;
  text: string;
  title: string;
}

const Book = () => {
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
            <Layout height={'48px'}>
              <Header title={currentBook?.title}/>
            </Layout>
            <Layout bgColor="white" body={true}>
              <BookBody currentBook={currentBook!}/>
            </Layout>
            <Layout bgColor="black" height={'100px'} padding={'0'}>
              <Footer />
            </Layout>
        </>
    );
};

export default Book;