
import BookBody from "../../BookBody/BookBody";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Layout from "../../Layout/Layout";

const Book = () => {

    return (
        <>
            <Layout height={'48px'}>
              <Header />
            </Layout>
            <Layout bgColor="white" body={true}>
              <BookBody />
            </Layout>
            <Layout bgColor="black" height={'100px'} padding={'0'}>
              <Footer />
            </Layout>
        </>
    );
};

export default Book;