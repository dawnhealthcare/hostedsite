import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/3.png';
import Main2 from './../assets/signup/2.png';
import Form from '../components/Form';
import ValueCard from '../components/ValuesCard';
import { Helmet } from 'react-helmet';

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Sign Up - Join The Dawn Health Wellness Ecosystem - Dawn Health
        </title>
        <meta
          name="description"
          content="Unlocking Potential, Illuminating Paths: Igniting Resilience in Adolescents, Hand-in-Hand with Parents!"
        />
      </Helmet>
      <SignupPageWrapper>
        <Hero>
          <Container>
            <Row className="align-items-center reverse h-100vh">
              <Col lg={7} className="wow animate__animated animate__fadeInLeft">
                <Heading main="Sign up here">
                  Join the Dawn Health Wellness Ecosystem
                </Heading>
                <Para hero>
                  Unlocking Potential, Illuminating Paths: Igniting Resilience
                  in Adolescents, Hand-in-Hand with Parents!
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
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInLeft"
              >
                <SectionHeader
                  className="pb-2"
                  title="Know Your Cost: Tailoring a Bright Future"
                ></SectionHeader>
              </Col>
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInLeft"
              >
                <Row>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Annual Subscription">
                      Enroll your first child for only $499.00. And here's the
                      magic: every additional child is just $249.00! Delve into
                      the world of cutting-edge digital health tools and
                      unmatched value-added services.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard
                      className="mb-5"
                      title="Therapy (Individual or Family) Session Cost"
                    >
                      $155.00 each, fostering collaborative care from a licensed
                      counselor.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard
                      className="mb-5"
                      title="Health & Wellness Coaching Session Cost"
                    >
                      $80.00 each for guidance and expertise from a
                      board-certified health & wellness coach.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Individualized Care">
                      Mental Health Resilience pathway tailored to your child's
                      or your unique needs.
                    </ValueCard>
                  </Col>
                </Row>
                <Para>
                  Don't just wish for your child's success—make it happen. Join
                  us today to take a decisive step in nurturing their innate
                  talents. Together, we're not just offering therapy; we're
                  shaping lives
                </Para>
                {/* <Para>
                Don't merely hope for a bright tomorrow for your child—create
                it. Join us today, and take the inspired step toward recognizing
                your child's unique brilliance. Together, we're doing more than
                providing therapy; we're igniting passions and sculpting
                futures.
              </Para> */}
              </Col>
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInLeft"
              >
                <SectionHeader
                  className="pb-2"
                  title="How It Works: A Simple and Rewarding Process!"
                >
                  Embark on a Journey Toward Connection and Joy:
                </SectionHeader>
                <ul>
                  <li className="mb-2">
                    <strong>Enter Your Information Easily:</strong> Just fill
                    out the Sign Up section below. Our advanced system will
                    quickly send you a personalized registration link.
                  </li>
                  <li className="mb-2">
                    <strong>Create Your Profile in Minutes:</strong> In a mere
                    20 minutes, set up your profile, including a specially
                    crafted intake assessment, to understand your unique needs.
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
              <Col
                lg={6}
                className="wow animate__animated animate__fadeInRight"
              >
                <SectionHeader className="pb-1" title="Sign Up">
                  Don't let your children and family suffer in silence - reach
                  out to us for understanding, empowerment, and nurtured
                  resilience.
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
    </>
  );
};

export default SignupPage;
