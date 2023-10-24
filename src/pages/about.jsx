import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import SubHeading from '../components/SubHeading';
import { Hero, SectionWrapper, AboutPageWrapper } from '../styles';
import Main from './../assets/about/11.png';
import Main2 from './../assets/about/2.png';
import Main3 from './../assets/about/main2.jpg';
import { partners } from '../data/partners';
import Partner from '../components/Partner';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Poem from './../assets/home/poem.png';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          About Us - Our Families Are Behind Our Brand - Dawn Health
        </title>
        <meta
          name="description"
          content="Family comes first for all of us. Our team comprises of passionate, highly diverse, educated, and experienced professionals who are committed to creating a better tomorrow for our children by nurturing their mental health resilience today."
        />
      </Helmet>
      <AboutPageWrapper>
        <Hero>
          <Container>
            <Row className="align-items-center reverse h-100vh">
              <Col
                md={12}
                lg={6}
                className="wow animate__animated animate__fadeInLeft"
              >
                <Heading main="About Us">Prioritizing Family</Heading>
                <Para hero>
                  Prioritizing Family: Our dedicated team of diverse, educated,
                  and experienced professionals has a mission to build resilient
                  futures for children and parents.
                </Para>
                <Button
                  className="mt-3 mb-3"
                  onClick={() => navigate('/signup')}
                >
                  Register Here
                </Button>
              </Col>
              <Col
                md={6}
                className="text-end wow animate__animated animate__fadeInRight"
              >
                <img src={Main} className="img-fluid main-image" alt="main" />
              </Col>
            </Row>
          </Container>
        </Hero>
        <SectionWrapper>
          <Container>
            <Row className="align-items-center pb-main">
              <Col
                md={12}
                lg={6}
                className="text-start wow animate__animated animate__fadeInLeft"
              >
                <img src={Main2} className="img-fluid" alt="main" />
              </Col>
              <Col
                md={12}
                lg={6}
                className="wow animate__animated animate__fadeInRight"
              >
                <SubHeading>Our Story</SubHeading>
                <Para>
                  In 2021, a group of brilliant minds at Harvard Medical School
                  had an epiphany: traditional mental healthcare was failing to
                  keep up with the needs of society. Fast-forward to 2023, Dawn
                  Health was born—a revolutionary mental healthcare venture that
                  prioritizes prevention and wellness. Our user-friendly,
                  accessible, and affordable digital-wellness platform empowers
                  adolescents to take control of their mental wellbeing,
                  eliminating barriers to access and sky-high costs. With Dawn
                  Health, the future of mental healthcare is now in your hands.
                </Para>
              </Col>
            </Row>
            {/* <Row className="mt-5">
              <Col className="text-center wow animate__animated animate__zoomIn">
                <img alt="about" src={Main3} className="img-fluid" />
              </Col>
            </Row> */}

            <Row className="d-flex justify-content-center mt-5 wow animate__animated animate__zoomIn">
              <Col lg={{ span: 5 }}>
                <img
                  src={Poem}
                  className="img-fluid"
                  alt="Virtual Mental Health Care - Dawn Health"
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInLeft"
              >
                <SectionHeader className="pb-main" title="Our Proud Partners">
                  Collaborating to build a better future, our partners are the
                  cornerstone of our success. Together, we strive for
                  excellence.
                </SectionHeader>
              </Col>
            </Row>
            <Row className="text-center mb-5">
              {partners.map((partner) => (
                <Col
                  className="wow animate__animated animate__zoomIn"
                  md={2}
                  key={partner.title}
                >
                  <Partner
                    image={partner.image}
                    link={partner.link}
                    title={partner.title}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </SectionWrapper>
      </AboutPageWrapper>
    </>
  );
};

export default AboutPage;
