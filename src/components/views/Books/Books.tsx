import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';
import SearchBar from '../../SearchBar/SearchBar';
import Body from '../../Body/Body';
import Footer from '../../Footer/Footer';

const Books = () => {
    return (
        <>
            <Layout>
                <Header />
                <SearchBar />
            </Layout>
            <Layout bgColor="white" body={true}>
                <Body />
            </Layout>
            <Layout bgColor="black" footer={true}>
                <Footer />
            </Layout>
        </>
    );
};

export default Books;