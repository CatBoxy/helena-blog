import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';
import Body from '../../Body/Body';
import Footer from '../../Footer/Footer';

const Home = () => {
  const background = "heroDesktop.png";
  return (
    <>
      <Layout bgImg ={background}>
        <Header />
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
