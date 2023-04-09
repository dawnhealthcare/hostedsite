import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button';
import GetStarted from '../components/GetStarted';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import ValueCard from '../components/ValuesCard';
import { Card, Hero, HomePageWrapper, SectionWrapper, Title } from '../styles';
import Main from './../assets/home/1.png';
import Main2 from './../assets/home/2.png';
import Main3 from './../assets/home/3.png';
import Main4 from './../assets/home/4.png';
import Main5 from './../assets/home/5.png';
import Main6 from './../assets/home/6.png';
import Main7 from './../assets/home/7.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomePageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh reverse">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Mental health">
                Nurturing Mental Health resilience
              </Heading>
              <Para>
                At Dawn Health, we're transforming adolescent mental healthcare
                with a groundbreaking approach that prioritizes preventive
                wellness. By identifying and addressing pre-crisis conditions,
                we can help teens and their parents proactively manage their
                mental health. Our innovative approach is designed to detect and
                respond to increased depression and anxiety acuity levels,
                ensuring that families receive the support they need before a
                crisis occurs.
              </Para>
              <Button className="mt-3 mb-3" onClick={() => navigate('/signup')}>
                Sign Up Here
              </Button>
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
          <Row>
            <Col md={8}>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft pb-main"
                title="Mental Health Resilience For Adolescents"
              >
                Families connect with us - Change this to: Revolutionize your
                child's mental health journey with our AI-powered approach,
                designed to keep parents engaged and informed every step of the
                way.
              </SectionHeader>
            </Col>
            <Col md={12}>
              <div className="wow animate__animated animate__zoomIn">
                <iframe
                  width="100%"
                  height="603"
                  src="https://www.youtube.com/embed/iilnY08udm0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={5}>
              <SectionHeader
                className="pb-main wow animate__animated animate__fadeInLeft"
                title="Our Wellness Programs"
              >
                Take charge of your mental health with our proactive care
                pathways that address symptoms before they escalate, and build
                resilience through therapy and metabolic health.
              </SectionHeader>
            </Col>
          </Row>
          {/* <Row>
            <Col md={12}>
              <WellnessWrapper>
                <WellnessInner className="d-flex justify-content-between">
                  <Card>1</Card>
                  <InnerCard className="d-flex justify-content-between">
                    <Card>2</Card>
                    <Card>3</Card>
                  </InnerCard>
                  <Card>4</Card>
                </WellnessInner>
              </WellnessWrapper>
            </Col>
          </Row> */}
          <Row>
            <Col
              md={12}
              className="wellness-wrapper wow animate__animated animate__zoomIn"
            >
              <Row className="wellness-inner">
                <Col lg={3}>
                  <Card>
                    <img src={Main4} className="img-fluid mb-3" alt="main" />
                    <Title>
                      Biweekly Evidence-Based Assessment for Depression &
                      Anxiety
                    </Title>
                    <Para>
                      Text-based diagnosis tool, validated by the American
                      Psychiatric Association (APA) and the U.S. Preventive
                      Services Task Force (USPSTF), that also engages
                      parents/guardians to measure the symptoms' acuity level in
                      adolescents
                    </Para>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Row className="inner-card">
                    <Col lg={6}>
                      <Card className="last-card">
                        <img
                          src={Main5}
                          className="img-fluid mb-3"
                          alt="main"
                        />
                        <Title className="text-white">
                          Continuous Data Assessment
                        </Title>
                        <Para className="text-white">
                          Tracking and monitoring depression and anxiety
                          symptoms in your children can lead to better diagnosis
                          and treatment outcomes. Research studies have shown
                          that using mobile apps to monitor symptoms of
                          depression and anxiety can significantly improve
                          mental health outcomes, according to a study published
                          in the Journal of Medical Internet Research. By
                          staying aware of your child's mental health, you can
                          help them get the support they need to thrive.
                        </Para>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card className="last-card">
                        <img
                          src={Main6}
                          className="img-fluid mb-3"
                          alt="main"
                        />
                        <Title className="text-white">
                          Virtual & Prompt Care
                        </Title>
                        <Para className="text-white">
                          Virtual and prompt care for mental health offers a
                          convenient, accessible, and confidential way for
                          parents of adolescents to provide their children with
                          the necessary support and resources to manage their
                          mental health challenges. By accessing virtual care,
                          parents can promote overall wellness and ensure that
                          their children receive the care they need before they
                          realize they need it.
                        </Para>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3}>
                  <Card className="last-card">
                    <img src={Main7} className="img-fluid mb-3" alt="main" />
                    <Title>Partnering with Parents/Guardians</Title>
                    <Para>
                      Partnering together to promote student engagement, reduce
                      absenteeism, and build mental health resilience, ensuring
                      children receive the support they need to succeed.
                    </Para>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={6}></Col>
            <Col md={6} className="wow animate__animated animate__slideInRight">
              <SectionHeader className="" title="Our Values to Help you">
                We always want to provide the best value for you and your
                health. Join us to maximize the benefits
              </SectionHeader>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="wow animate__animated animate__slideInLeft">
              <img src={Main2} className="img-fluid mb-5" alt="main image" />
            </Col>
            <Col md={6} className="wow animate__animated animate__slideInRight">
              <Row>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Compassion" icon={1}>
                    Encouraging kindness and understanding towards those facing
                    mental health challenges.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Quality" icon={2}>
                    Providing the best possible care with the highest standards.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Integrity" icon={3}>
                    Conducting oneself with honesty and responsibility.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Innovation" icon={4}>
                    Utilizing new approaches and technologies to improve care.
                  </ValueCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper className="pt-0 wow animate__animated animate__zoomIn">
        <Container>
          <Row>
            <Col>
              <GetStarted />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="wow animate__animated animate__slideInLeft">
              <img src={Main3} className="img-fluid mb-5" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={5} className="wow animate__animated animate__slideInRight">
              <Row className="pb-main">
                <Col>
                  <SectionHeader className="pb-main" title="Why Dawn Health?">
                    Our care delivery approach eliminates the barriers of time,
                    distance, and stigma that prevent many people from seeking
                    the help they need. By prioritizing virtual mental health
                    care, our company is committed to promoting mental wellness
                    and improving the overall health and engagement of our
                    members.
                  </SectionHeader>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TestimonialCard
                    title="National Council for Mental Wellbeing"
                    className="mb-4"
                  >
                    “47% Of School Board Members Say Students’ Mental Health Is
                    One Of Their Top 3 Issues”
                  </TestimonialCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
