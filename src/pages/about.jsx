import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import SubHeading from '../components/SubHeading';
import { Hero, SectionWrapper, AboutPageWrapper } from '../styles';
import Main from './../assets/about/1.png';
import Main2 from './../assets/about/2.png';
import Main3 from './../assets/about/main2.jpg';
import { partners } from '../data/partners';
import Partner from '../components/Partner';

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col
              md={12}
              lg={6}
              className="wow animate__animated animate__fadeInLeft"
            >
              <Heading main="About Us">
                Our Families are Behind Our Brand
              </Heading>
              <Para hero>
                Family comes first for all of us. Our team comprises of
                passionate, highly diverse, educated, and experienced
                professionals who are committed to creating a better tomorrow
                for our children by nurturing their mental health resilience
                today.
              </Para>
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
                keep up with the needs of society. So, after a meticulous
                exploration of the market and countless brainstorming sessions,
                they decided to take matters into their own hands. Fast-forward
                to 2023, and Dawn Health was born - a revolutionary mental
                healthcare venture that focuses on prevention and wellness, not
                just treating crises.
              </Para>
              <Para>
                At Dawn Health, we believe that every adolescent deserves to
                have control over their mental wellbeing, which is why we've
                developed a state-of-the-art digital-wellness solution. Our
                platform is user-friendly, accessible, and affordable, making it
                easier than ever for young people to screen, monitor, and manage
                their mental health. Say goodbye to sky-high costs and
                access-to-care barriers - with Dawn Health , the future of
                mental healthcare is in your hands.
              </Para>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center wow animate__animated animate__zoomIn">
              <img alt="about" src={Main3} className="img-fluid" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              md={12}
              xl={7}
              className="wow animate__animated animate__fadeInLeft"
            >
              <SectionHeader
                className="pb-main"
                title="Our Approach to Wellness Care"
              >
                Empowering Your Health, Inside and Out - Our Unique Wellness
                Approach
              </SectionHeader>
            </Col>
          </Row>
          <Row className="">
            <Col md={12} className="wow animate__animated animate__zoomIn">
              <iframe
                width="100%"
                height="715"
                src="https://www.youtube.com/embed/j7Ae0lBtuQE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              lg={7}
              xl={5}
              className="wow animate__animated animate__fadeInLeft"
            >
              <SectionHeader className="pb-main" title="Our Proud Partners">
                Collaborating to build a better future, our partners are the
                cornerstone of our success. Together, we strive for excellence.
              </SectionHeader>
            </Col>
          </Row>
          <Row className="text-center mb-5">
            {partners.map((partner) => (
              <Col
                className="wow animate__animated animate__zoomIn"
                md={2}
                key={partner.id}
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
  );
};

export default AboutPage;
