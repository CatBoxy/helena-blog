import ContactForm from '../../ContactForm/ContactForm';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Layout from '../../Layout/Layout';

const Contact = () => {
  return (
    <>
      <Layout height={'inherit'}>
        <Header title={'Contacto'} />
      </Layout>
      <Layout bgColor="white" body={true}>
        <ContactForm />
      </Layout>
      <Layout bgColor="black" height={'100px'} padding={'0'}>
        <Footer />
      </Layout>
    </>
  );
};

export default Contact;
