import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/3.png';
import Main2 from './../assets/signup/4.png';
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
                <Heading main="Sign up">
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
                      For just $399.00, empower your child with access to our
                      essential Primary and Secondary prevention services,
                      invigorating weekly touchpoints, transformative self-care
                      resources, and enlightening monthly parent-Dawn Health
                      conferences. Have more than one child? Enroll two for just
                      $699.00 and save $99! Further discounts are available for
                      additional siblings.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard
                      className="mb-5"
                      title="Therapy (Individual or Family) Session Cost"
                    >
                      For a limited investment of just $169.00 per session,
                      connect with our specialized licensed therapists and
                      embark on a journey of collaborative and personalized care
                      that will uplift your child's spirit and enrich their
                      wellbeing.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard
                      className="mb-5"
                      title="Health & Wellness Coaching Session Cost"
                    >
                      Experience the ultimate in holistic care for only $79.00
                      per session! Our board-certified health and wellness
                      coaches not only offer you and your child personalized
                      blueprints for a radiant life but also synchronize
                      seamlessly with our therapists' care plans. It's a unified
                      approach that amplifies your family's wellbeing.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Individualized Care">
                      Discover the Mental Health Resilience Pathway, a
                      transformative program meticulously tailored to meet your
                      child's—or your own—unique needs. It's not just a service;
                      it's a life-changing journey crafted to strengthen
                      resilience and enrich mental wellbeing.
                    </ValueCard>
                  </Col>
                </Row>
                <Para>
                  Don't just wish for your child's success—make it happen. Join
                  us today to take a decisive step in nurturing their innate
                  talents. Together, we're not just offering therapy; we're
                  shaping lives.
                </Para>
                {/* <Para>
                Don't merely hope for a bright tomorrow for your child—create
                it. Join us today, and take the inspired step towards recognizing
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
                  className="pb-2 pt-5"
                  title="How It Works: A Simple and Rewarding Process!"
                >
                  Embark on a Journey Towards Connection and Joy:
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
                lg={6}
                className="text-end wow animate__animated animate__fadeInLeft"
              >
                <img src={Main2} className="img-fluid" alt="main" />
              </Col>
              {/* <Col lg={1}></Col> */}
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
                Investing in your child's mental wellbeing is an essential yet
                manageable commitment. Our mental health network offers an
                annual membership at $500 per child, along with $145 per
                session. The total annual cost of $1,950 for 10 sessions
                translates to a monthly fee of just $162.50. Think of it as
                investing less than the price of a daily cup of coffee or a
                monthly gym membership or cable bill. The value of nurturing
                mental health is immeasurable, and this investment serves as a
                foundation for your child's growth, happiness, and success. Join
                us in taking this vital step towards a brighter future.
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
