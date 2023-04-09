import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../Heading';
import Para from '../Para';
import { GetStartedInner, GetStartedWrapper } from './styles';
import Logo from './../../assets/logo/started-logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <GetStartedWrapper>
      <GetStartedInner>
        <Container>
          <Row className="justify-content-sm-center text-center">
            <Col md={8}>
              <img src={Logo} className="img-fluid mb-3" alt="" />
              <Heading className="text-white text-center">
                Get Started with Dawn Health
              </Heading>
            </Col>
            <Col md={6}>
              <Para className="text-white text-center">
                Explore the ways in which you can join an upstream wellness
                network that harnesses opportunities to foster healthier
                communities.
              </Para>
              <Button className="mt-3" onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </GetStartedInner>
    </GetStartedWrapper>
  );
};

export default GetStarted;
