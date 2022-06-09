import Header from '../../Header/Header';
import { Layout } from './styles';
import Hero from '../../Hero/Hero';
import Body from '../../Body/Body';
import Footer from '../../Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <Layout bgColor="white">
        <Body />
      </Layout>
      <Layout bgColor="black">
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
