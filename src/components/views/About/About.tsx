import Body from "../../Body/Body";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Layout from "../../Layout/Layout";

const About = () => {
    return (
        <>
            <Layout height={'200px'}>
              <Header />
              <div>
                  SOBRE MI
              </div>
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

export default About;