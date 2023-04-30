import React from 'react';
import { ErrorPageWrapper, Hero } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <Hero className="text-center h100vh">
        <Container>
          <Row className="align-items-center pt-5 h-100vh">
            <Col md={12} className="wow animate__animated animate__zoomIn">
              <Heading main="oops!">Page Not Found</Heading>
              <Para>
                The page you are looking for doesn't exist or has been moved
              </Para>
            </Col>
          </Row>
        </Container>
      </Hero>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
