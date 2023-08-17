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
            <Col lg={7} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Sign up here">
                Join the Dawn Health Wellness Ecosystem
              </Heading>
              <Para hero>
                Unlocking Potential, Illuminating Paths: Igniting Resilience in
                Adolescents, Hand-in-Hand with Parents!
              </Para>
            </Col>
            <Col
              md={5}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main} className="img-fluid main-image" alt="main" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className="pb-2"
                title="Know Your Cost: Tailoring a Bright Future"
              >
                Unleash the boundless potential of your child's future. With our
                mental health network, your annual $515.30 commitment per child
                and $149.65 per session becomes a valuable investment in their
                well-being, growth, and success.
              </SectionHeader>
            </Col>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <Para>
                HImagine the joy of giving your child a thriving future for just
                $167.65 per month. That's less than a daily coffee or gym
                membership! This modest investment includes:
              </Para>
              <ul>
                <li>
                  Annual Subscription: $515.30 per child for continued support
                  and connection.
                </li>
                <li>
                  Session Costs: $149.65 each, the foundation of our
                  collaborative care.
                </li>
                <li>
                  Total Annual Investment: $2,011.80 for 10 life-changing
                  sessions.
                </li>
                <li>
                  Individualized Care Plans: Tailored therapy to meet your
                  child's specific needs.
                </li>
              </ul>
              <Para>
                The rewards of this thoughtful approach echo through every
                aspect of your child's life. It's not about money; it's about
                nurturing dreams and building futures.
              </Para>
              <Para>
                Don't merely hope for a bright tomorrow for your child—create
                it. Join us today, and take the inspired step toward recognizing
                your child's unique brilliance. Together, we're doing more than
                providing therapy; we're igniting passions and sculpting
                futures.
              </Para>
            </Col>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className="pb-2"
                title="How It Works: A Simple and Rewarding Process!"
              >
                Embark on a Journey Toward Connection and Joy:
              </SectionHeader>
              <ul>
                <li>
                  <strong>Enter Your Information Easily:</strong> Just fill out
                  the Sign Up section below. Our advanced system will quickly
                  send you a personalized registration link.
                </li>
                <li>
                  <strong>Create Your Profile in Minutes:</strong> In a mere 20
                  minutes, set up your profile, including a specially crafted
                  intake assessment, to understand your unique needs.
                </li>
                <li>
                  <strong>Unlock Seamless Communication:</strong> Once
                  registered, enjoy biweekly connections with you and your
                  child(ren), nurturing a bond that strengthens with every
                  interaction.
                </li>
              </ul>
              <Para>
                Join us today and step into a world that's not merely about
                registration; it's about understanding, connection, and joy.
                Your family deserves the best, and we're eager to provide it!
              </Para>
            </Col>
          </Row>
          <Row className="pb-main align-items-center">
            <Col
              lg={5}
              className="text-end wow animate__animated animate__fadeInLeft"
            >
              <img src={Main2} className="img-fluid" alt="main" />
            </Col>
            <Col lg={1}></Col>
            <Col lg={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader className="pb-1" title="Sign Up">
                Don't let your children and family suffer in silence - reach out
                to us for understanding, empowerment, and nurtured resilience.
              </SectionHeader>
              {/* <Para>
                Investing in your child's mental well-being is an essential yet
                manageable commitment. Our mental health network offers an
                annual membership at $500 per child, along with $145 per
                session. The total annual cost of $1,950 for 10 sessions
                translates to a monthly fee of just $162.50. Think of it as
                investing less than the price of a daily cup of coffee or a
                monthly gym membership or cable bill. The value of nurturing
                mental health is immeasurable, and this investment serves as a
                foundation for your child's growth, happiness, and success. Join
                us in taking this vital step toward a brighter future.
              </Para> */}
              <Form />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </SignupPageWrapper>
  );
};

export default SignupPage;
