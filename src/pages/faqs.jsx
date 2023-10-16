import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaqList from '../components/FAQ';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, FaqPageWrapper } from '../styles';
import Main from './../assets/faq/1.png';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const FaqPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>FAQs - Answers - Dawn Health</title>
        <meta
          name="description"
          content="Answers to common questions about our approach to wellness and costs associated with it."
        />
      </Helmet>
      <FaqPageWrapper>
        <Hero>
          <Container>
            <Row className="align-items-center h-100vh reverse">
              <Col lg={6} className="wow animate__animated animate__fadeInLeft">
                <Heading main="FAQs">about Our Wellness System</Heading>
                <Para hero>
                  Answers to common questions about our approach to wellness.
                </Para>
                <div className="d-flex gap-3 mt-4 flex-wrap flex-sm-nowrap">
                  <Button
                    className="mb-1 parent"
                    onClick={() => navigate('/signup')}
                  >
                    Register Here
                  </Button>
                  <Button
                    className="mb-3 ambassador"
                    onClick={() => navigate('/ambassadorship')}
                  >
                    Become a Dawn Health Ambassador
                  </Button>
                </div>
              </Col>
              <Col
                md={6}
                className=" wow animate__animated animate__fadeInRight"
              >
                <img
                  src={Main}
                  className="img-fluid main-image"
                  alt="main image"
                />
              </Col>
            </Row>
          </Container>
        </Hero>
        <SectionWrapper>
          <Container>
            <Row>
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInLeft"
              >
                <SectionHeader className="pb-main" title="FAQs">
                  Expertly Crafted Answers to Your Mental Wellness Related
                  Questions.
                </SectionHeader>
              </Col>
            </Row>
            <Row className="pb-main">
              <Col>
                <FaqList className="mb-3" />
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
      </FaqPageWrapper>
    </>
  );
};

export default FaqPage;
