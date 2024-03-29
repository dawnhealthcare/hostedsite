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
import Main2 from './../assets/home/values2.png';
import Main3 from './../assets/home/3.png';
import Main4 from './../assets/home/4.png';
import Main5 from './../assets/home/5.png';
import Main6 from './../assets/home/6.png';
import Main7 from './../assets/home/7.png';
import { Link, useNavigate } from 'react-router-dom';
import { why } from '../data/why';
import { Helmet } from 'react-helmet';
import Form from '../components/Form';
import { ChatGpt } from '../components/Icons';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Home - Virtual Mental Health Care - Dawn Health</title>
        <meta
          name="description"
          content="Dawn Health prioritizes preventive wellness. We empower adolescents, guide parents, and nurture resilience by proactively managing mental health through innovative approaches. Join us in empowering the next generation to thrive."
        />
      </Helmet>
      <HomePageWrapper>
        <Hero>
          <Container>
            <Row className="align-items-center h-100vh reverse">
              <Col
                md={12}
                lg={6}
                className="wow animate__animated animate__fadeInLeft"
              >
                <Heading medium main="Wellness Ecosystem" className="pt-lg-5">
                  Virtual Mental Health Care For Adolescents & Parents
                </Heading>
                <Para hero className="mb-0">
                  Crafting a future for children and parents where thriving
                  transcends thought to become an undeniable reality.
                </Para>
                <Para hero>
                  Now caring for families in DC, FL, IL, MA, MI, MN, NE, PA, TX,
                  VA & WI.
                </Para>
                <div className="d-flex gap-3 mt-4 flex-wrap flex-sm-nowrap">
                  <Button
                    className="mb-1 parent"
                    onClick={() => navigate('/signup')}
                  >
                    Register Here
                  </Button>
                  <a
                    href="https://chat.openai.com/g/g-vss2NzsEb-dawn-health"
                    target="blank"
                    className="parent"
                  >
                    <Button className="mb-3 w-100">
                      <ChatGpt className="me-2" /> Dawn Health ChatGPT
                    </Button>
                  </a>
                </div>
              </Col>
              <Col
                md={6}
                className="text-end wow animate__animated animate__fadeInRight"
              >
                <img
                  src={Main}
                  className="img-fluid main-image"
                  alt="Virtual Mental Health Care - Dawn Health"
                />
              </Col>
            </Row>
          </Container>
        </Hero>
        <SectionWrapper>
          <Container>
            {/* <Row>
              <Col
                lg={12}
                className="wow animate__animated animate__fadeInRight mb-5"
              >
                <SectionHeader className="pb-1" title="Sign Up">
                  Don't let your children and family suffer in silence - reach
                  out to us for understanding, empowerment, and nurtured
                  resilience.
                </SectionHeader>
                <Form full />
              </Col>
            </Row> */}
            <Row>
              <Col lg={8}>
                <SectionHeader
                  className="wow animate__animated animate__fadeInLeft pb-main"
                  title="Dawn Health"
                >
                  Empowering Resilient Adolescents; Preparing for Tomorrow,
                  Together.
                </SectionHeader>
              </Col>
              <Col md={{ span: 12, offset: 0 }}>
                <div className="wow animate__animated animate__zoomIn">
                  <iframe
                    width="100%"
                    height="753"
                    src="https://www.youtube.com/embed/zdDU42ldncw"
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
              <Col lg={12}>
                <SectionHeader
                  className="wow animate__animated animate__fadeInLeft"
                  title="Dawn Health: Where Care Meets Revolution"
                ></SectionHeader>
                <Para className="mb-2 fw-semibold wow animate__animated animate__fadeInLeft">
                  Are You Ready for a Healthcare Odyssey?
                </Para>
                <Para className="mb-5 wow animate__animated animate__fadeInLeft">
                  Parents, brace yourselves for a healthcare journey that will
                  forever transform your perception of what medical care can be.
                  This isn't just about doctor visits and prescriptions; this is
                  about a life-altering voyage toward ultimate wellness for your
                  little champions.
                </Para>
              </Col>
              {why.map((item) => (
                <Col
                  md={6}
                  className="wow animate__animated animate__zoomIn"
                  key={item.id}
                >
                  <ValueCard className="mb-4" title={item.title} sub={item.sub}>
                    {item.description}
                  </ValueCard>
                </Col>
              ))}
              <Col
                md={12}
                className="text-center wow animate__animated animate__zoomIn"
              >
                <Para>
                  There's a seat saved for you and your child in this incredible
                  adventure. Together, let's awaken the extraordinary that waits
                  within! 🌟
                </Para>
              </Col>
              {/* <Col
                md={12}
                className="text-center wow animate__animated animate__zoomIn"
              > */}
              {/* <Button className="mb-1" onClick={() => navigate('/signup')}>
                  Sign Up
                </Button> */}
              {/* <Para className="wow animate__animated animate__fadeInLeft">
                  Discover a world where peace of mind and a sense of belonging
                  define your child's care experience. Through our innovative
                  primary and secondary interventions, we take a proactive
                  approach that nurtures their holistic development. We are
                  dedicated to providing the right care precisely when it is
                  needed and at a cost that eases the financial burden on your
                  family.
                </Para>
                <Para className="wow animate__animated animate__fadeInLeft">
                  With us, you'll find a nurturing haven where your child's
                  unique needs are met with unwavering compassion, expertise,
                  and dedication. We believe in empowering your little one(s) to
                  thrive, unleashing their full potential. Trust us to redefine
                  care delivery, creating a brighter future where your child's
                  wellness takes center stage.
                </Para>
                <Para className="wow animate__animated animate__fadeInLeft">
                  Join us on this transformative journey, where we build a
                  foundation of health, happiness, and limitless possibilities
                  for your precious one(s). Together, let's embrace a new era of
                  care that celebrates their wellbeing and ignites their
                  extraordinary potential.
                </Para> */}
              {/* </Col> */}
            </Row>
          </Container>
        </SectionWrapper>

        <SectionWrapper>
          <Container>
            <Row>
              <Col xl={12} xxl={12}>
                <SectionHeader
                  className="wow animate__animated animate__fadeInLeft"
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
                  <Col xl={3}>
                    <Card>
                      <img
                        src={Main4}
                        className="img-fluid mb-3"
                        alt="Virtual Mental Health Care - Dawn Health"
                      />
                      <Title>
                        Biweekly Evidence-Based Assessment for Depression &
                        Anxiety
                      </Title>
                      {/* <Para>
                        Text-based diagnosis tool, validated by the American
                        Psychiatric Association (APA) and the U.S. Preventive
                        Services Task Force (USPSTF), that also engages
                        parents/guardians to measure the symptoms' acuity level
                        in adolescents
                      </Para> */}
                      <ul className="text-left">
                        <li className="mt-2">
                          Utilize a trusted text-based diagnosis tool validated
                          by the APA and USPSTF to assess adolescent symptoms.
                        </li>
                        <li className="mt-3">
                          Engage parents/guardians in measuring symptom severity
                          and actively monitor their adolescents' wellbeing.
                        </li>
                      </ul>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Row className="inner-card align-items-baseline pt-5">
                      <Col lg={6}>
                        <Card className="last-card">
                          <img
                            src={Main5}
                            className="img-fluid mb-3"
                            alt="Virtual Mental Health Care - Dawn Health"
                          />
                          <Title className="text-white">
                            Continuous Data Assessment
                          </Title>
                          {/* <Para className="text-white">
                            Tracking and monitoring depression and anxiety
                            symptoms in your children can lead to better
                            diagnosis and treatment outcomes. Research studies
                            have shown that using mobile apps to monitor
                            symptoms of depression and anxiety can significantly
                            improve mental health outcomes, according to a study
                            published in the Journal of Medical Internet
                            Research. By staying aware of your child's mental
                            health, you can help them get the support they need
                            to thrive.
                          </Para> */}
                          <ul className="text-white text-left">
                            <li>
                              Harness the potential of mobile app tracking to
                              revolutionize your children's mental health care.
                            </li>
                            <li className="mt-3">
                              Stay informed about your child's emotional
                              wellbeing and empower them with the support they
                              need to thrive.
                            </li>
                          </ul>
                        </Card>
                      </Col>
                      <Col lg={6}>
                        <Card className="last-card">
                          <img
                            src={Main6}
                            className="img-fluid mb-3"
                            alt="Virtual Mental Health Care - Dawn Health"
                          />
                          <Title className="text-white">
                            Virtual & Prompt Care
                          </Title>
                          {/* <Para className="text-white">
                            Virtual and prompt care for mental health offers a
                            convenient, accessible, and confidential way for
                            parents of adolescents to provide their children
                            with the necessary support and resources to manage
                            their mental health challenges. By accessing virtual
                            care, parents can promote overall wellness and
                            ensure that their children receive the care they
                            need before they realize they need it.
                          </Para> */}
                          <ul className="text-white text-left">
                            <li>
                              Embrace the convenience and confidentiality of
                              virtual mental health care, empowering parents to
                              support their adolescents' wellbeing.
                            </li>
                            <li className="mt-3">
                              Proactively provide necessary resources and
                              support to manage mental health challenges,
                              promoting overall wellness and early intervention.
                            </li>
                          </ul>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3}>
                    <Card className="last-card">
                      <img
                        src={Main7}
                        className="img-fluid mb-3"
                        alt="Virtual Mental Health Care - Dawn Health"
                      />
                      <Title>Partnering with Parents/Guardians</Title>
                      {/* <Para>
                        Partnering together to promote student engagement,
                        reduce absenteeism, and build mental health resilience,
                        ensuring children receive the support they need to
                        succeed.
                      </Para> */}
                      <ul className="text-left">
                        <li>
                          Join forces to foster student engagement, combat
                          absenteeism, and strengthen mental health resilience,
                          guaranteeing children receive the necessary support
                          for success.
                        </li>
                        <li className="mt-3">
                          Collaborate in promoting student involvement, reducing
                          absenteeism, and cultivating mental wellbeing, laying
                          the foundation for children's achievement.
                        </li>
                      </ul>
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
              <Col lg={6}></Col>
              <Col
                xl={6}
                className="wow animate__animated animate__slideInRight"
              >
                <SectionHeader className="" title="Our Values to Help you">
                  We always want to provide the best value for you and your
                  health. Join us to maximize the benefits.
                </SectionHeader>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col
                xl={6}
                className="wow animate__animated animate__slideInLeft text-center"
              >
                <img
                  src={Main2}
                  className="img-fluid mb-5"
                  alt="Virtual Mental Health Care - Dawn Health"
                />
              </Col>
              <Col
                xl={6}
                className="wow animate__animated animate__slideInRight"
              >
                <Row>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Compassion" icon={1}>
                      Encouraging kindness and understanding towards those
                      facing mental health challenges.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Quality" icon={2}>
                      Providing the best possible care with the highest
                      standards.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Integrity" icon={3}>
                      Conducting oneself with honesty and responsibility.
                    </ValueCard>
                  </Col>
                  <Col md={12} lg={6}>
                    <ValueCard className="mb-5" title="Innovation" icon={4}>
                      Utilizing new approaches and technologies to improve care.
                    </ValueCard>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
        {/* <SectionWrapper className="pt-0 wow animate__animated animate__zoomIn">
          <Container>
            <Row>
              <Col>
                <GetStarted />
              </Col>
            </Row>
          </Container>
        </SectionWrapper> */}
        <SectionWrapper>
          <Container>
            <Row className="align-items-center">
              <Col
                lg={5}
                className="wow animate__animated animate__slideInRight"
              >
                <Row className="pb-main">
                  <Col>
                    <SectionHeader
                      className="pb-main"
                      title={<span>Why Dawn Health?</span>}
                    >
                      Our care delivery approach eliminates the barriers of
                      time, distance, and stigma that prevent many people from
                      seeking the help they need. By prioritizing virtual mental
                      health care, our company is committed to promoting mental
                      wellness and improving the overall health and engagement
                      of our members.
                    </SectionHeader>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TestimonialCard
                      title="National Council for Mental Wellbeing"
                      className="mb-4"
                    >
                      “47% Of School Board Members Say Students’ Mental Health
                      Is One Of Their Top 3 Issues”
                    </TestimonialCard>
                  </Col>
                </Row>
              </Col>
              <Col lg={1}></Col>
              <Col
                lg={6}
                className="wow animate__animated animate__slideInLeft"
              >
                <img
                  src={Main3}
                  className="img-fluid mb-5"
                  alt="Virtual Mental Health Care - Dawn Health"
                />
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
