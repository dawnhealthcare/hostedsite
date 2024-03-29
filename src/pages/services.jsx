import React from 'react';
import { Hero, SectionWrapper, ServicesPageWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import Main from './../assets/services/main2.png';
import Sun from './../assets/services/sun.png';
import SubHeading from '../components/SubHeading';
import { services, therapy } from '../data/services';
import WellnessCard from '../components/WellnessCard';
import ValueCard from '../components/ValuesCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Services - Virtual Mental Health Care - Dawn Health</title>
        <meta
          name="description"
          content="In close partnership with parents, we craft a compassionate, holistic approach that fosters mental resilience and optimal brain function."
        />
      </Helmet>
      <ServicesPageWrapper>
        <Hero>
          <Container>
            <Row className="align-items-center reverse h-100vh">
              <Col lg={7} className="wow animate__animated animate__fadeInLeft">
                <Heading main="Our Services">
                  Preventive Wellness Measurable Based Care
                </Heading>
                <Para hero>
                  Explore a transformative path to adolescent wellness with our
                  unique virtual mental health care system. Collaboratively with
                  parents, we nurture mental resilience and optimal brain
                  function.
                </Para>
                <Button
                  className="mt-3 mb-3"
                  onClick={() => navigate('/signup')}
                >
                  Register Here
                </Button>
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
            <Row className="align-items-center pb-main">
              <Col
                xl={12}
                className="wow animate__animated animate__fadeInRight text-center"
              >
                <SubHeading>Wellness-based Model</SubHeading>
                <Para>
                  Nurturing mental health resilience early on to promote brain
                  health.
                </Para>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col lg={{ offset: 1, span: 10 }}>
                <Row>
                  {services.map((service) => (
                    <Col
                      md={6}
                      lg={6}
                      className="mb-4 wow animate__animated animate__zoomIn"
                      style={{ minHeight: '100%' }}
                      key={service.title}
                    >
                      <WellnessCard
                        bold
                        title={service.title}
                        key={service.id}
                        desc={service.desc}
                        image={service.image}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
        <SectionWrapper className="">
          <Container>
            <Row className="align-items-center pb-main">
              <Col
                xl={{ span: 8, offset: 2 }}
                className="wow animate__animated animate__fadeInRight text-center"
              >
                <SubHeading>Dawn Health Wellness Approach</SubHeading>
                <Para>
                  We work in partnership with parents to promote the brain
                  health of every child.
                </Para>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col
                md={12}
                className="wow animate__animated animate__zoomIn text-center"
              >
                <img src={Sun} className="img-fluid" alt="Sun" />
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
        <SectionWrapper>
          <Container>
            <Row>
              <Col lg={12} className="mb-3">
                <SectionHeader
                  className="wow animate__animated animate__fadeInLeft"
                  title="Nurturing Your Family's Growth: The Power of Therapy and Health Coaching"
                ></SectionHeader>
              </Col>
            </Row>
            <Row className="g-4 mb-5">
              {therapy.map((item) => (
                <Col
                  md={6}
                  className="wow animate__animated animate__zoomIn"
                  key={item.id}
                >
                  <ValueCard
                    className="mb-4 h-100 justify-content-start pt-5"
                    title={item.title}
                  >
                    {item.description}
                  </ValueCard>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center pb-main">
              <Col
                lg={{ span: 10, offset: 1 }}
                className="wow animate__animated animate__fadeInRight text-center"
              >
                <SubHeading>Our Care Guiding Team</SubHeading>
                <Para>
                  The cultural competence of our care team is essential for
                  providing effective and inclusive care for BIPOC, LGBQ, and
                  TGNC individuals. It involves understanding and respecting
                  diverse cultures, values, and beliefs, as well as recognizing
                  and addressing systemic barriers that communities may face in
                  accessing healthcare. By fostering cultural competence, our
                  care team creates a safe and supportive environment that
                  promotes the health and wellbeing of all children and their
                  families, regardless of their background or identity.
                </Para>
              </Col>
            </Row>
            <Row className="align-items-center mt-4">
              <Col lg={6} className="wow animate__animated animate__fadeInLeft">
                <ValueCard
                  className="mb-5"
                  title="Primary Intervention"
                  icon={1}
                >
                  A systematic review of school-based prevention programs found
                  that these interventions can effectively reduce symptoms of
                  anxiety and depression in children and adolescents.
                </ValueCard>
              </Col>
              <Col
                lg={6}
                className="wow animate__animated animate__fadeInRight"
              >
                <ValueCard
                  className="mb-5"
                  title="Secondary Intervention"
                  icon={1}
                >
                  A randomized controlled trial of a school-based CBT program
                  for adolescents with anxiety found that the program was
                  effective in reducing symptoms of anxiety and improving school
                  attendance.
                </ValueCard>
              </Col>
            </Row>
            <Row className="text-center">
              <Col lg={12} className="text-center">
                <Button
                  className="mb-5 wow animate__animated animate__zoomIn"
                  onClick={() => navigate('/signup')}
                >
                  Register Here
                </Button>
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
      </ServicesPageWrapper>
    </>
  );
};

export default ServicesPage;
