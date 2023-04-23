import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Hero } from '../styles';
import SubHeading from '../components/SubHeading';
import Para from '../components/Para';

const TermsAndConitionsPage = () => {
  return (
    <>
      <Hero className="terms">
        <Container>
          <Row>
            <Col md={6}>
              <SubHeading>TERMS & CONDITIONS AGREEMENT</SubHeading>
              <Para>
                Welcome to Dawn Health (“Website”). By accessing or using the
                Website, you agree to be bound by the following Terms &
                Conditions:
              </Para>
            </Col>
          </Row>
        </Container>
      </Hero>
      <Container>
        <Row>
          <Col md={12} className="pt-5">
            <SubHeading>Intellectual Property</SubHeading>
            <Para>
              All content on this Website, including but not limited to text,
              graphics, logos, images, videos, and software, is the intellectual
              property of Dawn Health or its content providers and is protected
              by copyright law. You may not reproduce, copy, distribute, or
              otherwise use any content on this Website without the express
              written permission of the owner.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Disclaimer</SubHeading>
            <Para>
              The information on this Website is for general informational
              purposes only and is not a substitute for professional medical
              advice or treatment. The Website owner does not provide medical
              diagnosis, treatment, or therapy services. If you have any
              concerns about your mental health, you should consult a
              professional healthcare provider. The Website owner does not
              endorse, recommend, or make any guarantees about any products or
              services advertised on this website.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Privacy Policy</SubHeading>
            <Para>
              Please refer to our Privacy Policy for information about how we
              collect and use your personal information.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Third-Party Links</SubHeading>
            <Para>
              This Website may contain links to third-party websites. The
              Website owner is not responsible for the accuracy, legality, or
              content of any linked third-party websites. The presence of such
              links on this Website is not an endorsement of, or representation
              that we are affiliated with, or sponsor any third-party website.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Indemnification</SubHeading>
            <Para>
              You agree to indemnify and hold harmless Dawn Health and its
              affiliates, officers, agents, employees, and partners from any
              claims, damages, or expenses arising out of your use or access to
              this Website, including, but not limited to, any user-generated
              content, violation of these Terms & Conditions, or infringement of
              any intellectual property rights.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Limitation of Liability</SubHeading>
            <Para>
              In no event shall Dawn Health or its affiliates, officers, agents,
              employees, or partners be liable for any damages, including, but
              not limited to, direct, indirect, incidental, punitive, or
              consequential damages arising out of your use or inability to use
              this Website.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Governing Law</SubHeading>
            <Para>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the State of Texas, without regard to
              its conflicts of law provisions.
            </Para>
          </Col>
          <Col md={12} className="pt-2">
            <SubHeading>Changes to Terms and Conditions</SubHeading>
            <Para>
              Dawn Health reserves the right to revise these Terms and
              Conditions at any time without notice. By using this Website, you
              agree to be bound by the current version of these Terms and
              Conditions.
            </Para>
          </Col>
          <Col md={12} className="pt-2 mb-5">
            <Para>
              If you have any questions or concerns about these Terms &
              Conditions or the use of this Website, please contact us at
              <a
                href="http://www.compliance@dawnhealth.care."
                target="_blank"
                className="ms-1"
              >
                compliance@dawnhealth.care.
              </a>
            </Para>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TermsAndConitionsPage;
