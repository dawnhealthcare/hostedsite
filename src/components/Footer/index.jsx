import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EmailIcon, LinkedinIcon } from '../Icons';
import Para from '../Para';
import Logo from './../../assets/logo/dark-logo.png';
import { CopyRight, FooterWrapper, ReLink, Title, Text } from './styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Row>
            <Col sm={6} className="wow animate__animated animate__fadeInLeft">
              <ReLink to="/">
                <img src={Logo} alt="Footer logo" />
              </ReLink>
              <Para className="text-white intro">
                Nurturing mental health resilience in adolescents for a stronger
                future.
              </Para>
              <div className="mt-4 mb-4">
                <a className="me-3" href="mailto:panos@dawnhealth.care">
                  <EmailIcon />
                </a>
                <a
                  className="me-3"
                  href="https://www.linkedin.com/company/dawn-health-care"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </Col>
            <Col sm={2} className="wow animate__animated animate__fadeInRight">
              <Title>Company</Title>
              <ReLink to="/about">Partners</ReLink>
              <ReLink to="/join-our-team">Join our team</ReLink>
              {/* <Para className="cursor-pointer text-white" onClick={handleShow}>
                Contact us
              </Para> */}
              <div className="mb-2">
                <a
                  className="cursor-pointer text-white"
                  href="mailto:panos@dawnhealth.care"
                >
                  Contact us
                </a>
              </div>
            </Col>
            <Col sm={2} className="wow animate__animated animate__fadeInRight">
              <Title>Resources</Title>
              <ReLink to="/">Services</ReLink>
              <ReLink to="/">Releases</ReLink>
            </Col>
            <Col sm={2} className="wow animate__animated animate__fadeInRight">
              <Title>Support</Title>
              <ReLink to="/faqs">FAQs</ReLink>
              <ReLink to="/terms-and-conditions">Terms & Conditions</ReLink>
              {/* <ReLink to="/">Privacy Policy</ReLink> */}
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <CopyRight>
        <Container>
          <Row>
            <Col className="">
              <Text>
                All Copyright © 2023 - Dawn Health . All Right Reversed{' '}
              </Text>
            </Col>
          </Row>
        </Container>
      </CopyRight>
      {/* <MyModal show={show} setShow={setShow} handleShow={handleShow} /> */}
    </>
  );
};

export default Footer;
