import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';
import Hero from '../../Hero/Hero';
import Body from '../../Body/Body';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <Layout bgColor="white" body={true}>
        <Body />
      </Layout>
      <Layout bgColor="black" height={'100px'} padding={'0'}>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
