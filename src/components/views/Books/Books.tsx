import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';
import SearchBar from '../../SearchBar/SearchBar';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';

const Books = () => {
    return (
        <>
            <Layout height={'200px'}>
                <Header />
                <SearchBar />
            </Layout>
            <Layout bgColor="white" body={true}>
                <Cards />
            </Layout>
            <Layout bgColor="black" height={'100px'} padding={'0'}>
                <Footer />
            </Layout>
        </>
    );
};

export default Books;