import React from 'react';
import { ErrorPageWrapper, Hero } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <Hero className="text-center">
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col md={12} className="wow animate__animated animate__zoomIn">
              <Heading main="404"></Heading>
              <Para>The Page you are looking for is not available</Para>
            </Col>
          </Row>
        </Container>
      </Hero>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
