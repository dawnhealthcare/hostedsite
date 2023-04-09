import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/1.png';
import Main2 from './../assets/signup/2.png';
import Form from '../components/Form';

const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Sign up here to">
                Join the Dawn Health Wellness Ecosystem
              </Heading>
              <Para>
                Take the first step towards mental health resilience for your
                children and our communities.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
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
          <Row className="pb-main align-items-center">
            <Col
              md={5}
              className="text-end wow animate__animated animate__fadeInLeft"
            >
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader className="pb-main" title="Sign Up">
                Don't let your children and family suffer in silence - reach out
                to us for understanding, empowerment, and nurtured resilience.
              </SectionHeader>
              <Form />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </SignupPageWrapper>
  );
};

export default SignupPage;
