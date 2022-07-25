import AboutBody from '../../AboutBody/AboutBody';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';

const About = () => {
  return (
    <>
      <Layout height={'inherit'} bgColor="black">
        <Header title={'Sobre mi'} />
      </Layout>
      <Layout bgColor="white" body={true}>
        <AboutBody />
      </Layout>
      <Layout bgColor="black" height={'100px'} padding={'0'}>
        <Footer />
      </Layout>
    </>
  );
};

export default About;
